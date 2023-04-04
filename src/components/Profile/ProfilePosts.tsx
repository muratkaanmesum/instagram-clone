import { IPost } from "@/UserInterfaces";
import Image from "next/image";
interface IProfilePostsProps {
  posts: IPost[];
}
interface IPostProps {
  post: IPost;
}
const Post: React.FC<IPostProps> = ({ post }) => {
  const { likes, comments } = post;

  return (
    <div className="object-fit aspect-square group relative cursor-pointer group">
      <Image
        src="/temp.jpg"
        alt=""
        className="image h-full w-full cursor-pointer"
        fill={true}
      />
      <div className="w-full absolute top-0 h-full group-hover:flex hidden group-hover:bg-black group-hover:opacity-20"></div>
      <div className="gap-3 hidden group-hover:flex absolute w-full top-0 items-center justify-center h-full">
        <div className="flex items-center justify-center gap-1">
          <div className="w-8">
            <Image
              src="/instagram-likes.svg"
              fill={true}
              className="image"
              alt=""
            />
          </div>
          <span className="text-white font-medium">{}</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <div className="w-8">
            <Image
              src="/comment_bubble.svg"
              fill={true}
              className="image"
              alt=""
            />
          </div>
          <span className="text-white font-medium">test</span>
        </div>
      </div>
    </div>
  );
};
const ProfilePosts: React.FC<IProfilePostsProps> = ({ posts }) => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-3 gap-2">
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
};

export default ProfilePosts;
