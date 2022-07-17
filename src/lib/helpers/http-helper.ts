import {
  AccessDeniedError,
  ServerError,
  UnauthorizedError,
} from '../../errors';

export const httpHelper = {
  badRequest: (error: Error) => ({
    status: 400,
    body: error,
  }),
  forbidden: (error: Error) => ({
    statusCode: 403,
    body: error,
  }),
  unauthorized: () => ({
    statusCode: 401,
    body: UnauthorizedError(),
  }),
  ok: (data: any) => ({
    statusCode: 200,
    body: data,
  }),
  noContent: () => ({
    statusCode: 204,
    body: null,
  }),
  accessDenied: () => ({
    statusCode: 403,
    body: AccessDeniedError(),
  }),
  serverError: (error: Error) => ({
    statusCode: 500,
    body: ServerError(error),
  }),
};
