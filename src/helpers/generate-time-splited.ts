export const generateTimeSplited = (): string =>
  new Date().toISOString().split('T').join(' ');
