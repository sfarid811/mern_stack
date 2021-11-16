//  const authHelper = {
//   isAuthenticated() {
//     if (localStorage.getItem("userInfo")) return true;
//     return false;
//   },
//     isAdmin() {
//       if (localStorage.getItem("userInfo")) {
//         let auth = JSON.parse(localStorage.getItem("userInfo"));
//         return auth?.user?.role === 1;
//       }
//       return false;
//     },
//     extractAuth() {
//       if (localStorage.getItem("userInfo"))
//         return JSON.parse(localStorage.getItem("userInfo"));
//       return false;
//     },
//   };
  
 
//   export default authHelper;


export const isAuthenticated = () => {

  if (localStorage.getItem("userInfo")) return true;
  return false;
}


export const extractAuth = () => {
  if (localStorage.getItem("userInfo"))
    return JSON.parse(localStorage.getItem("userInfo"));
  return false;
}

