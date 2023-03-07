import { useEffect } from "react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const AxiosInterceptors = ({ children }) => {
  useEffect(() => {
    const responseInterceptor = (response) => {
      return response;
    };
    const errorInterceptor = (error) => {
      if (error.response.status === 401) {
        console.log(error.response);
      }
      return Promise.reject();
    };
    const interceptor = instance.interceptors.response.use(
      responseInterceptor,
      errorInterceptor
    );
    return () => instance.interceptors.response.eject(interceptor);
  }, []);
  return children;
};

export default instance;
export { AxiosInterceptors };
