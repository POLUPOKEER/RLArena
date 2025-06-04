import React, { FC } from "react";
import Login from "../components/Login";

interface LoginPageProps {
  // TODO: define your props here
}

const LoginPage: FC<LoginPageProps> = (props) => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
