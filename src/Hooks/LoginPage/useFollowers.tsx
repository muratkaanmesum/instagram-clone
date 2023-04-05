import axios from "axios";
import { useEffect, useState } from "react";

const useFollowers = (id: number) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (window == undefined) return;
    const getFollowers = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://localhost:7023/api/User/GetUserFollowers",
        {
          headers: {
            id: id,
          },
        }
      );
      response.data && setFollowers(response.data);
      setLoading(false);
    };
    getFollowers();
  }, [id]);
  return { followers };
};
export default useFollowers;
