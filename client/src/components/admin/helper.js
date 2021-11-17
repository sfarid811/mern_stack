export const isAuthenticated = () => {

  if (localStorage.getItem("userInfo")) return true;
  return false;
}



export const extractAuth = () => {
  if (localStorage.getItem("userInfo"))
    return JSON.parse(localStorage.getItem("userInfo"));
  return false;
}

export const isAdmin = () => {
  if (localStorage.getItem("userInfo")) {
    let auth = JSON.parse(localStorage.getItem("userInfo"));
    return auth?.user?.role === 1;
  }
  return false;
}

export const isExists = () => {

  const jwt = localStorage.getItem('userInfo');

  if(jwt) {

      return JSON.parse(jwt)

  }

  return false
}