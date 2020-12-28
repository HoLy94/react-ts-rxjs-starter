import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

// Models
import {SignInDto} from './models';
import {RequestMethods} from '../../models';

// Constants
import {authApi} from '../../api';

// Services
import httpService, {HttpServiceType} from '../../common/services/httpService';

export type SignInServiceType = {
  signIn(dto: SignInDto): Observable<AjaxResponse>;
};

export const createSignInService = (
  http: HttpServiceType,
): SignInServiceType => {
  return {
    signIn: (dto) => {
      return http.request(`${authApi}/sign-in`, {
        method: RequestMethods.POST,
        body: JSON.stringify(dto),
      });
    },
  };
};

export default createSignInService(httpService);
