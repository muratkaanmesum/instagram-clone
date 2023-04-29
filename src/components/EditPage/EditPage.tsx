import { useContext } from "react";
import Navbar from "../MainPage/Navbar/Navbar";
import EditBody from "./EditBody";
import { LoginContext } from "@/Contexts/LoginContext";
import Loading from "../Loading";

const EditPage = () => {
  const { user, loading } = useContext(LoginContext);
  if (loading) return <Loading />;
  return (
    <>
      <Navbar />
      <EditBody user={user} />
    </>
  );
};

export default EditPage;
