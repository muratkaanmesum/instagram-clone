import useProfile from "@/Hooks/ProfilePage/useProfile";
import Navbar from "@/components/MainPage/Navbar/Navbar";
import FollowerTab from "@/components/Profile/Followers/FollowerTab";
import ProfilePage from "@/components/Profile/Profile";
import axios from "axios";
import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import https from "https";
import { IUser } from "@/UserInterfaces";

const Followers: React.FC<{ user: IUser }> = ({ user }) => {
  const { handleProfileTab, profileTab } = useProfile();
  return (
    <div className="relative overflow-hidden h-full">
      <Navbar />

      <Link href={`/${user.username}`}>
        <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      </Link>
      <ProfilePage
        user={user}
        handleProfileTab={handleProfileTab}
        profileTab={profileTab}
      />
      <FollowerTab user={user} />
    </div>
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
        rejectUnauthorized: false, // this is not recommended in production
      }),
    });
    return {
      props: {
        user: result.data,
      },
    };
  } catch (error) {}
  return {
    props: {
      user: { username: "Test" },
    },
  };
}
export default Followers;
