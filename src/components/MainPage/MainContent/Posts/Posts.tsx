import Image from "next/image";
import { IPost } from "./interfaces";
import Post from "./Post";
const tempPosts: IPost[] = [
  {
    id: 1,
    username: "username",
    userImage: "/icons8-customer-48.png",
    postImage: "/more_horiz_FILL0_wght400_GRAD0_opsz48.svg",
    location: "location",
    likes: 5,
    comments: 0,
    description: "Random Desc",
  },
  {
    id: 2,
    username: "username2",
    userImage: "/icons8-customer-48.png",
    postImage: "/more_horiz_FILL0_wght400_GRAD0_opsz48.svg",
    location: "location2",
    likes: 15,
    comments: 0,
    description: "Random Desc",
  },
];
const Posts = () => {
  return (
    <>
      {tempPosts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </>
  );
};
export default Posts;
