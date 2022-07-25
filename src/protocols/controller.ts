import { HttpReponse } from './httpReponse';

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpReponse>;
}
