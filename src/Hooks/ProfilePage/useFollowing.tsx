import { IFollower } from "@/UserInterfaces";
import axios from "axios";
import { useEffect, useState } from "react";

const useFollowing = (id: number) => {
  const [following, setFollowing] = useState<IFollower[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (window == undefined) return;
    const getFollowers = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://localhost:7023/api/User/GetUserFollowing",
        {
          headers: {
            id: id,
          },
        }
      );
      response.data && setFollowing(response.data);
      setLoading(false);
    };
    getFollowers();
  }, [id]);
  return { following };
};
export default useFollowing;
