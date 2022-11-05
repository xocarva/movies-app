
export const getFromLocalStorage = (key: string): any[] => {
  const localStorageData = localStorage.getItem(key);
  return localStorageData ? JSON.parse(localStorageData) : [];
}
