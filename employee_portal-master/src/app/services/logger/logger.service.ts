import { Injectable } from '@angular/core';

export abstract class Logger {
  info: any;
  warn: any;
  error: any;
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
 info: any;
 warn: any;
 error: any;
}
