export const setValueToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value))
}
