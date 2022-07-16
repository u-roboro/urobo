export const ServerError = (message: string) => {
  return {
    name: 'ServerError',
    message,
  };
};
