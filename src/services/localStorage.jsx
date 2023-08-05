export const addToLocalStorage = (email) => {
  const key = 'user';
  const value = JSON.stringify({ email });
  return localStorage.setItem(key, value);
};
