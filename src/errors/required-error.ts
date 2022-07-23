import { BaseError } from './base-error';
import httpStatusCode from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class RequiredError extends BaseError {
  constructor(propertyRequired: string) {
    super('', httpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.required',
      params: [propertyRequired],
      name: ErrorName.REQUIRED,
      type: 'validation',
    });
  }
}
