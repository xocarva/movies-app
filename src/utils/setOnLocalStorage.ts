
export const setOnLocalStorage = (key: string, values: any[]) => {
  localStorage.setItem(key, JSON.stringify(values));
}
