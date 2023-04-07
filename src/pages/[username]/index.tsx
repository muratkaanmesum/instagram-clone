import useProfile from "@/Hooks/ProfilePage/useProfile";
import Navbar from "@/components/MainPage/Navbar/Navbar";
import ProfilePage from "@/components/Profile/Profile";

const Profile = () => {
  const { user, handleProfileTab, profileTab } = useProfile();
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
export default Profile;
