import { HttpStatusCode } from '../consts';
import { BaseError } from './base-error';

export class ResourceNotFound extends BaseError {
  constructor(id: any) {
    super('Resource with ' + id + ' not found', HttpStatusCode.NOT_FOUND);
  }
}
