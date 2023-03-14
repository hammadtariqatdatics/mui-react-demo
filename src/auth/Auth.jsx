import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const [login, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(loggedInUser)
    if (!loggedInUser) {
      navigate("/");
      return;
    } else {
      setIsLogin(true);
    }
  }, []);
  return login ? children : navigate("/");
};

export default Auth;
