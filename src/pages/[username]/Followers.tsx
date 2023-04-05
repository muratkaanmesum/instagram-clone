import Navbar from "@/components/MainPage/Navbar/Navbar";
import FollowerTab from "@/components/Profile/Followers/FollowerTab";
import ProfilePage from "@/components/Profile/Profile";

const Followers = () => {
  return (
    <div className="relative overflow-hidden h-full">
      <Navbar />
      <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      <ProfilePage />
      <FollowerTab />
    </div>
  );
};
export default Followers;
