export const getLocalStorageValues = (key: string) => {
  if (typeof window !== 'undefined') {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
  }
  return undefined;
};
