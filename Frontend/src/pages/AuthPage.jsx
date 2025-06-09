import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const AuthPage = () => {
 const [login, setLogin]= useState(true);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    {  login ?
      <LoginForm state={setLogin}/>:
      <RegisterForm state={setLogin} />}
    </div>
  );
};

export default AuthPage;
