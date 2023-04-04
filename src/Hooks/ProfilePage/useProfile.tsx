import { IUser } from "@/UserInterfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export type ProfileTab = "Posts" | "Saved" | "Tagged";
const useProfile = () => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [error, setError] = useState<boolean>(false);
  const [profileTab, setProfileTab] = useState<ProfileTab>("Posts");
  const router = useRouter();
  const { username } = router.query;
  useEffect(() => {
    async function getProfile() {
      if (!username) return;
      console.log(username, "ads");

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

        setError(true);
        throw new Error("Error while fetching user data");
      }
    }
    getProfile().catch((error) => {
      throw new Error(error);
    });
  }, [username]);
  const handleProfileTab = (tab: ProfileTab) => {
    setProfileTab(tab);
  };

  return { user, handleProfileTab, profileTab };
};
export default useProfile;
