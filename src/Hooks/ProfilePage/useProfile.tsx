import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export type ProfileTab = "Posts" | "Saved" | "Tagged";
const useProfile = () => {
  const [profileTab, setProfileTab] = useState<ProfileTab>("Posts");
  const router = useRouter();
  const handleProfileTab = (tab: ProfileTab) => {
    setProfileTab(tab);
  };

  return { handleProfileTab, profileTab };
};
export default useProfile;
