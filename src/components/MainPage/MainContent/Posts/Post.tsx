import Image from "next/image";
import { IPost, IPostProps } from "./interfaces";

const Post: React.FC<IPostProps> = (props: IPostProps) => {
  const { username, userImage, postImage } = props.post;
  return (
    <div className="border-solid border-2 mt-5 rounded-md max-w-full">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <div>
            <Image
              src={userImage}
              alt=""
              className="rounded-full w-8"
              width={50}
              height={50}
            />
          </div>
          <div className="text-xs">{username}</div>
        </div>
        <div className="w-8">
          <Image src={postImage} alt="" width={50} height={50} />
        </div>
      </div>
      <div className="w-full max-w-md h-2/3">
        <Image
          src="/temp.jpg"
          alt=""
          fill={true}
          className="image object-cover"
        />
      </div>
    </div>
  );
};
export default Post;
