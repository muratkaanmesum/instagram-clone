import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "@/UserInterfaces";

const useProfilePosts = (userId: number) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const API_ROOT = "https://localhost:7023/api/Post/getUserPost";
      const result = await axios.get(API_ROOT, {
        headers: {
          id: userId,
        },
      });
      result.data && setPosts(result.data);
    };

    fetchPosts().catch((error) => {
      console.log(error);
      setPosts([]);
    });
  }, [userId]);

  return { posts };
};
export default useProfilePosts;
