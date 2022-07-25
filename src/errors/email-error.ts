import { BaseError } from './base-error';
import { HttpStatusCode } from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class EmailError extends BaseError {
  constructor(property: string) {
    super('', HttpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.email',
      params: [property],
      name: ErrorName.EMAIL,
      type: 'validation',
    });
  }
}
