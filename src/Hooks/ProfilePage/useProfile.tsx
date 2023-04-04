import { IUser } from "@/UserInterfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useProfilePosts from "./useProfilePosts";
export type ProfileTab = "Posts" | "Saved" | "Tagged";
const useProfile = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [profileTab, setProfileTab] = useState<ProfileTab>("Posts");
  const router = useRouter();
  const { username } = router.query;
  useEffect(() => {
    async function getProfile() {
      if (!username) return;
      const API_ROOT = "https://localhost:7023/api/User/getByUsername";
      try {
        const result = await axios.get(API_ROOT, {
          headers: {
            username: username,
          },
        });
        result.data && setUser(result.data);
      } catch (error) {
        console.log(error);
        throw new Error("Error while fetching user data");
      }
    }
    getProfile().catch((error) => {
      console.log(error);
      setUser({} as IUser);
    });
  }, [username]);
  const handleProfileTab = (tab: ProfileTab) => {
    setProfileTab(tab);
  };

  return { user, handleProfileTab, profileTab };
};
export default useProfile;
