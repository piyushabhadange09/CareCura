// // Save user info and token in localStorage
// export const setUser = (user, token) => {
//   localStorage.setItem("carecure_user", JSON.stringify(user));
//   localStorage.setItem("carecure_token", token);
// };

// // Get logged-in user info
// export const getUser = () => {
//   const user = localStorage.getItem("carecure_user");
//   return user ? JSON.parse(user) : null;
// };

// // Get token
// export const getToken = () => localStorage.getItem("carecure_token");

// // Remove user and token on logout
// export const logout = () => {
//   localStorage.removeItem("carecure_user");
//   localStorage.removeItem("carecure_token");
// };

export const setUser = (user, token) => {
  localStorage.setItem("carecure_user", JSON.stringify(user));
  localStorage.setItem("carecure_token", token);
};

export const getUser = () => {
  const user = localStorage.getItem("carecure_user");
  return user ? JSON.parse(user) : null;
};

export const getToken = () => localStorage.getItem("carecure_token");

export const logout = () => {
  localStorage.removeItem("carecure_user");
  localStorage.removeItem("carecure_token");
};
