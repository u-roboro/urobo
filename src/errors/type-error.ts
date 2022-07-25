import { BaseError } from './base-error';
import { HttpStatusCode } from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class TypeError extends BaseError {
  constructor(propertyUsed: string, typeNameExpected: string) {
    super('', HttpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.type',
      params: [propertyUsed, typeNameExpected],
      name: ErrorName.TYPE,
      type: 'validation',
    });
  }
}
