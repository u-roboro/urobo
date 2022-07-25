import { BaseError } from './base-error';
import { HttpStatusCode } from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class MaxLengthError extends BaseError {
  constructor(property: string, min: number) {
    super('', HttpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.maxLength',
      params: [property, min],
      name: ErrorName.MAX_LENGTH,
      type: 'validation',
    });
  }
}
