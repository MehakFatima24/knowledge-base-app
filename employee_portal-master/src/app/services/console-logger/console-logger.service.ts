import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Logger } from '../logger/logger.service';

export let isDebugMode = environment.isDebugMode;

const noop = (): any => undefined;

@Injectable()

export class ConsoleLoggerService implements Logger {
  /**
   * This method displays the info logs in the console.
   *
   * @method info
   * @return
   */
    get info(): any {
      if (isDebugMode) {
        return console.info.bind(console);
      } else {
        return noop;
      }
    }
    /**
     * This method displays the warning logs in the console.
     *
     * @method warn
     * @return 
     */
    get warn(): any {
      if (isDebugMode) {
        return console.warn.bind(console);
      } else {
        return noop;
      }
    }
    /**
     * This method displays the error logs in the console.
     *
     * @method error
     * @return
     */
    get error(): any {
      if (isDebugMode) {
        return console.error.bind(console);
      } else {
        return noop;
      }
    }
}
