import { BaseError } from './base-error';
import { HttpStatusCode } from '../consts/http-status-code';
import { ErrorName } from '../consts/errors';

export class TypeError extends BaseError {
  constructor(typeNameUsed: string, typeNameExpected: string) {
    super('', HttpStatusCode.BAD_REQUEST, {
      translate: true,
      localeKey: 'validationError.type',
      params: [typeNameUsed, typeNameExpected],
      name: ErrorName.TYPE,
      type: 'validation',
    });
  }
}
