import {
  AccessDeniedError,
  ServerError,
  UnauthorizedError,
} from '../../errors';
import { HttpResponse } from '../../protocols';

export const httpResponse = {
  badRequest: (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error,
  }),
  forbidden: (error: Error): HttpResponse => ({
    statusCode: 403,
    body: error,
  }),
  unauthorized: (): HttpResponse => ({
    statusCode: 401,
    body: UnauthorizedError(),
  }),
  ok: (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
  }),
  noContent: (): HttpResponse => ({
    statusCode: 204,
    body: null,
  }),
  accessDenied: (): HttpResponse => ({
    statusCode: 403,
    body: AccessDeniedError(),
  }),
  serverError: (error: Error): HttpResponse => ({
    statusCode: 500,
    body: ServerError(error),
  }),
};
