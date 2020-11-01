import Cookies from 'js-cookie';
import { SESSION_COOKIE_KEY, USER_COOKIE_KEY } from './constants';

const COOKIE_EXPIRE_DAYS = 7;

/**
 * Class for cookie handling. All methods are static.
 */
class CookieHandler {
  static getSessionId(): string {
    return Cookies.get(SESSION_COOKIE_KEY);
  }

  static setSessionId(value: string): void {
    Cookies.set(SESSION_COOKIE_KEY, value, { expires: COOKIE_EXPIRE_DAYS });
  }

  static getUserId(): string {
    return Cookies.get(USER_COOKIE_KEY);
  }

  static setUserId(value: string): void {
    Cookies.set(USER_COOKIE_KEY, value, { expires: COOKIE_EXPIRE_DAYS });
  }
}

export default CookieHandler;
