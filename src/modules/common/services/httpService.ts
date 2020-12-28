import {Observable} from 'rxjs';
import {ajax, AjaxResponse} from 'rxjs/ajax';

// Models
import {RequestOptions} from '../../models';

// Helpers
import {buildRequestUrl, extractHeaders, removeCustomKeys} from '../helpers';

export type HttpServiceType = {
  request(url: string, options?: RequestOptions): Observable<AjaxResponse>;
};

export const createHttpService = (): HttpServiceType => {
  return {
    request: (url, options = {}) => {
      const requestUrl = buildRequestUrl(url, options.search);
      const requestHeader = extractHeaders(options, true);
      const ajaxRequest = removeCustomKeys(options);

      return ajax({
        url: requestUrl,
        headers: requestHeader,
        ...ajaxRequest,
      });
    },
  };
};

export default createHttpService();
