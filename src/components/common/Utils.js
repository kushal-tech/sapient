export function setUser(user) {
  window.localStorage.setItem("user", user);
}
export function getUser() {
  return window.localStorage.getItem("user");
}

export function deleteUser() {
  window.localStorage.removeItem("user");
}
