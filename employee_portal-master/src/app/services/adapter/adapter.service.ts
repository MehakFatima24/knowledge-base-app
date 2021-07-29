import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  HttpHeaders,
	HttpClient,
	HttpParams,
} from '@angular/common/http';
import { Request, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from '../jwt/jwt.service';
import { LoggerService } from '../logger/logger.service';

const API_URL = environment.api.host;

@Injectable({
	providedIn: 'root'
})
export class AdapterService {

	constructor(private http: HttpClient,
              private jwtService: JwtService,
              private logger: LoggerService) {}
  /**
   * This method logs the errors if the API call fails.
   *
   * @param self
   * @method formatErrors
   * @return
   */
   private formatErrors(error: any) {
     return  throwError(error.error);
   }
  /**
   * This method adds the headers to the API requests.
   *
   * @param path
   * @method requestHeaders
   * @return
   */
	private requestHeaders(path: string) {
    let headers;
    if (path !== 'outh2/token') {
        headers = new HttpHeaders({
          'Accept':  'application/json',
          'Oauth-Token': this.jwtService.getToken()
        })
      }
		return headers;
	}
  /**
   * This method generates the GET api call.
   *
   * @param path
   * @param params
   * @method get
   * @return
   */
	get(path: string, params: HttpParams = new HttpParams()): Observable < any > {
    let headers = this.requestHeaders(path);
		return this.http.get(`${API_URL}${path}`, { headers })
			.pipe(catchError(this.formatErrors));
	}
  /**
   * This method generates the PUT api call.
   *
   * @param path
   * @param body
   * @method put
   * @return
   */
	put(path: string, body: Object = {}): Observable < any > {
		return this.http.put(
			`${API_URL}${path}`,
			JSON.stringify(body),
		).pipe(catchError(this.formatErrors));
	}
  /**
   * This method generates the POST api call.
   *
   * @param path
   * @param body
   * @method post
   * @return
   */
	post(path: string, body: Object = {}): Observable < any > {
    return this.http.post(
			`${API_URL}${path}`,
			JSON.stringify(body),
		).pipe(catchError(this.formatErrors));
	}
  /**
   * This method generates the DELETE api call.
   *
   * @param path
   * @method delete
   * @return
   */
	delete(path): Observable < any > {
    return this.http.delete(
			`${API_URL}${path}`,
		).pipe(catchError(this.formatErrors));
	}
}
