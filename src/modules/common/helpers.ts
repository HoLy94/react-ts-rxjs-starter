import queryString from 'querystring';
import {AjaxRequest} from 'rxjs/ajax';

// Models
import {RequestOptions} from '../models';

// Constants
import {CONTENT_TYPE} from '../auth/constants';

const asQueryString = (parameters?: {
  [key: string]: string | string[];
}): string => {
  if (!parameters || Object.keys(parameters).length === 0) return '';

  return `?${queryString.stringify(parameters)}`;
};

export const buildRequestUrl = (
  path: string,
  searchParameters?: {[key: string]: string | string[]},
): string => {
  const preparedParameters = {...searchParameters};

  Object.keys(preparedParameters).forEach((key) => {
    if (Array.isArray(preparedParameters[key])) {
      preparedParameters[key] = preparedParameters[key].toString();
    }

    if (preparedParameters[key].length === 0) {
      delete preparedParameters[key];
    }
  });

  return `${path}${asQueryString(preparedParameters)}`;
};

export const removeCustomKeys = (options: RequestOptions): AjaxRequest => {
  const requestOptions: AjaxRequest = {};

  Object.keys(options)
    .filter((key: string) => key !== 'search')
    .forEach((key) => {
      requestOptions[key as keyof AjaxRequest] =
        options[key as keyof AjaxRequest];
    });

  return requestOptions;
};

export const extractHeaders = (
  options: RequestOptions,
  addAcceptAndContentTypeJSON: boolean,
): RequestOptions['headers'] => {
  const {headers = {}} = options;

  if (!addAcceptAndContentTypeJSON) return headers;

  const keys = Object.keys(headers).map((key: string) => key.toLowerCase());
  const newHeaders = {...headers};

  if (!keys.includes(CONTENT_TYPE) && typeof options.body === 'string') {
    newHeaders[CONTENT_TYPE] = 'application/json';
  }

  return newHeaders;
};
