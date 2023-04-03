import useLogin from "@/Hooks/LoginPage/useLogin";
import React, { createContext, useEffect, useState } from "react";
interface ILoginContext {
  error: boolean;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  login: () => void;
}
const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: React.PropsWithChildren) => {
  const { error, setPassword, setUsername, login } = useLogin();

  return (
    <LoginContext.Provider value={{ error, setPassword, setUsername, login }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
