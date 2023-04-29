import { LoginContext } from "@/Contexts/LoginContext";
import Loading from "@/components/Loading";
import LoginPage from "@/components/LoginPage/LoginPage";
import MainPage from "@/components/MainPage/MainPage";
import { useContext, useEffect } from "react";

const Index = () => {
  const { user, loading } = useContext(LoginContext);
  if (loading) return <Loading />;
  return user ? <MainPage /> : <LoginPage />;
};
export default Index;
