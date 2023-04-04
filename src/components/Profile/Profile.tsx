import Image from "next/image";
import ProfileHeader from "./ProfileHeader";
import { useRouter } from "next/router";
import useProfile from "@/Hooks/ProfilePage/useProfile";
import ProfileTabs from "./ProfileTabs";
import ProfilePosts from "./ProfilePosts";

const ProfilePage = () => {
  const { user, handleProfileTab, profileTab } = useProfile();
  if (!user) return <div>Loading</div>;
  if (!user.userProfile) return <div>Loading</div>;
  if (!user.userProfile.posts) return <div>Loading</div>;
  return (
    <div className="h-full ml-64">
      <section className="h-full w-full">
        <main className="p-5 mx-auto w-5/6">
          <ProfileHeader user={user} />
          <ProfileTabs
            handleProfileTab={handleProfileTab}
            profileTab={profileTab}
          />
          <ProfilePosts posts={user.userProfile.posts} />
        </main>
      </section>
    </div>
  );
};
export default ProfilePage;
