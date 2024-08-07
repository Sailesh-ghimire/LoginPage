export const loadToken = () => {
  return localStorage.getItem('authToken') || null;
};

export const saveToken = (token: string | null) => {
  if (token) {
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
};
