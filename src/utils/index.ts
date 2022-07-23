export const replaceByParams = (str: string, params: string[]): string => {
  return str.replace(/\{(\d+)\}/g, (_match, index) => {
    return params[index];
  });
};

export const findStringOnObject = (key: string, obj: any): string => {
  const arrayKeyToSearch = key.split('.');
  let currentObject = obj;

  try {
    for (const key of arrayKeyToSearch) {
      currentObject = currentObject[key];
    }
    return currentObject;
  } catch (e) {
    return 'Translation not found: ' + key;
  }
};
