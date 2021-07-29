import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  /**
   * This method fetches the token from local storage and returns it.
   *
   * @method getToken
   * @return
   */
  getToken(): string {
    return window.localStorage['jwtToken'];
  }
  /**
   * This method takes the token as an argument and saves it into the local storage.
   *
   * @param  token
   * @method saveToken
   * @return
   */
  saveToken(token: string) {
    window.localStorage['jwtToken'] = token;
  }
  /**
   * This method deletes the token from local Storage.
   *
   * @method destroyToken
   * @return
   */
  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
