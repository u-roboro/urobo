import { locale } from '../consts/locale';
import { ErrorCustomized } from '../protocols';

export const UnauthorizedError = (): ErrorCustomized => ({
  name: 'UnauthorizedError',
  message: locale.exceptionsMessage.unauthorized,
});
