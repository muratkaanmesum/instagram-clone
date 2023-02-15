import useLogin from "@/Hooks/useLogin";
import React, { createContext, useEffect, useState } from "react";
const LoginContext = createContext(null);
const LoginProvider = ({ children }:React.PropsWithChildren) => {
    const { login, user } = useLogin();
    
    return (
        <LoginContext.Provider value={{login,user}} >
        {children}
        </LoginContext.Provider>
    );
};

export { LoginContext, LoginProvider };