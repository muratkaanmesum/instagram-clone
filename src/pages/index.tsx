import { LoginContext } from "@/Contexts/LoginContext";
import LoginPage from "@/components/LoginPage/LoginPage";
import MainPage from "@/components/MainPage/MainPage";
import { useContext } from "react";

const Index = () => {
  const { user } = useContext(LoginContext);
  return user ? <MainPage /> : <LoginPage />;
};
export default Index;
