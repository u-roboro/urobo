import { BaseError } from './base-error';
import { HttpStatusCode } from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class MinLengthError extends BaseError {
  constructor(min: number) {
    super('', HttpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.minLength',
      params: [min],
      name: ErrorName.MIN_LENGTH,
      type: 'validation',
    });
  }
}
