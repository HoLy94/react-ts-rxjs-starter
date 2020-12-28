import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

// Models
import {RequestOptions} from '../models';

// Constants
import {authApi} from '../api';
import {ACCEPT_LANGUAGE, AUTH_HEADER, CONTENT_TYPE} from './constants';

// Services
import httpService, {HttpServiceType} from '../common/services/httpService';

export type AuthServiceType = {
  request(url: string, options?: RequestOptions): Observable<AjaxResponse>;
  setToken(token: string): void;
  getToken(): string;
  signOut(): Observable<AjaxResponse>;
};

export const createAuthService = (http: HttpServiceType): AuthServiceType => {
  let authToken = '';

  return {
    request: (url, options = {}) => {
      const {headers = {}} = options;

      return http.request(url, {
        ...options,
        headers: {
          ...headers,
          [AUTH_HEADER.toString()]: authToken,
          [CONTENT_TYPE]: 'application/json',
          [ACCEPT_LANGUAGE]: 'ru',
        },
      });
    },
    setToken: (token) => {
      authToken = token;
    },
    getToken: () => authToken,
    signOut: () => http.request(`${authApi}/logout`),
  };
};

export default createAuthService(httpService);
