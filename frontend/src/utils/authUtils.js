import Cookies from "js-cookie";
export const isLoggedIn = () => {
  const token = Cookies.get('token');
  console.log("Token", token)
    return !!Cookies.get('token'); // or sessionStorage.getItem('authToken');
  };