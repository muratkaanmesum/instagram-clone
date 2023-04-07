import useProfile from "@/Hooks/ProfilePage/useProfile";
import { IUser } from "@/UserInterfaces";
import Navbar from "@/components/MainPage/Navbar/Navbar";
import ProfilePage from "@/components/Profile/Profile";
import axios from "axios";
import https from "https";
import { GetServerSidePropsContext } from "next";

const Profile: React.FC<{ user: IUser }> = ({ user }) => {
  const { handleProfileTab, profileTab } = useProfile();
  return (
    <>
      <Navbar />
      <ProfilePage
        user={user}
        handleProfileTab={handleProfileTab}
        profileTab={profileTab}
      />
    </>
  );
};
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { username } = context.query;

  const API_ROOT = "https://localhost:7023/api/User/getByUsername";
  try {
    const result = await axios.get(API_ROOT, {
      headers: {
        username: username,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    return {
      props: {
        user: result.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      user: { username: "Test" },
    },
  };
}
export default Profile;
