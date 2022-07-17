export const UniqueConstrainError = (message: string) => {
  return {
    name: 'UniqueConstrainError',
    message,
  };
};
