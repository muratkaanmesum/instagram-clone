import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { useContext } from "react";
import { LoginContext } from "@/Contexts/LoginContext";
import Image from "next/image";
import Navbar from "@/components/MainPage/Navbar/Navbar";
import axios from "axios";
import ProfilePage from "@/components/Profile/Profile";
const Profile = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      <ProfilePage />
    </>
  );
};

export default Profile;
