import {AjaxRequest} from 'rxjs/ajax';

export const RequestMethods = {
  DELETE: 'DELETE',
  PUT: 'PUT',
  GET: 'GET',
  POST: 'POST',
};

export type RequestOptions = AjaxRequest & {
  search?: {
    [key: string]: string;
  };
  headers?: {
    [key: string]: string;
  };
};
