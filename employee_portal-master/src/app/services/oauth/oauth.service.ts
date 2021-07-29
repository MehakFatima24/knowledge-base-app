import { Injectable } from '@angular/core';
import { JwtService } from '../jwt/jwt.service';
import { AdapterService } from '../adapter/adapter.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
const API = environment.api;
@Injectable({
  providedIn: 'root'
})

export class OauthService {

  constructor( private adapter: AdapterService,
               private jwt: JwtService) { }
  /**
   * This method initialzes the parameters for the authenticate call.
   *
   * @param  username
   * @param  password
   * @return
   */
  initializeParameters(username: string, password: string): any{
    let params = {
      username : username,
      password : password,
      client_id : API.clientId,
      client_secret : API.clientSecret,
      grant_type : API.grant_type,
     };
    return params;
  }
  /**
   * This method authenticates the user and saves the oauth token from the
   * response into local storage and returns to the callback method.
   *
   * @param username
   * @param password
   * @param callback
   * @method authenticateUser
   * @return
   */
  authenticateUser( username: string, password: string, callback): void {
    let params = this.initializeParameters(username, password);
    this.adapter.post('oauth2/token', params)
    .subscribe(
      response => {
        this.jwt.saveToken(response.access_token);
        return callback();
      }
    );
  }
  /**
   * This method invalidates the session by deleting the json web token & returns to the
   * the callback method.
   *
   * @method invalidateSession
   * @return
   */
  invalidateSession(callback): void{
    this.jwt.destroyToken();
    return callback;
  }

}
