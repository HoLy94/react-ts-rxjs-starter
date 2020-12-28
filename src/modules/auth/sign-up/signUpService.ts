import {Observable} from 'rxjs';
import {AjaxResponse} from 'rxjs/ajax';

// Models
import {SignUpDto} from './models';
import {RequestMethods} from '../../models';

// Constants
import {authApi} from '../../api';

// Services
import httpService, {HttpServiceType} from '../../common/services/httpService';

export type SignUpServiceType = {
  signUp(dto: SignUpDto): Observable<AjaxResponse>;
};

export const createSignUpService = (
  http: HttpServiceType,
): SignUpServiceType => {
  return {
    signUp: (dto) => {
      return http.request(`${authApi}/sign-up`, {
        method: RequestMethods.POST,
        body: JSON.stringify(dto),
      });
    },
  };
};

export default createSignUpService(httpService);
