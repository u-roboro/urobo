import { UniqueConstrainError } from './unique-constrain-error';

export const ServerError = (error: any) => {
  switch (error.name) {
    case 'SequelizeUniqueConstraintError':
      return UniqueConstrainError(error.errors[0]?.message);
    default:
      return {
        name: 'ServerError',
        message: error.message,
      };
  }
};
