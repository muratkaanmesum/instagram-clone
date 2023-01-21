import usePosts from "@/Hooks/MainContent/usePosts";
import Image from "next/image";
import { IPost, IPostProps } from "./interfaces";
import PostImages from "./PostImages";

const CommentBar: React.FC<IPostProps> = ({ post }) => {
  const { comments, likes } = post;
  return (
    <section>
      <div className="flex justify-start gap-1">
        <div className="w-5">
          <Image
            src="/icons8-male-user-50.png"
            alt=""
            className="image"
            fill={true}
          />
        </div>
        <span className="text-sm">Liked by</span>
        <span className="text-sm font-bold">one user</span>
        <span className="text-sm">and</span>
        <span className="text-sm font-bold">{likes}</span>
      </div>
      <div>
        <textarea
          className="border-none w-1/1 placeholder:text-gray-400 placeholder:text-xs text-sm rounded-sm outline-none resize-none mt-3 text-justify"
          placeholder="Add a comment..."
        ></textarea>
      </div>
    </section>
  );
};

const InteractionBar: React.FC = () => {
  return (
    <div className="w-1/1 flex justify-between pt-3 pb-3">
      <div className="flex gap-3 items-center justify-center">
        <div className="w-8 hover:opacity-50 cursor-pointer">
          <Image
            src="/instagram-like.svg"
            alt=""
            className="image"
            fill={true}
          />
        </div>
        <div className="w-8 hover:opacity-50 cursor-pointer">
          <Image
            src="/instagram-comment.svg"
            alt=""
            className="image"
            fill={true}
          />
        </div>
        <div className="w-8 hover:opacity-50 cursor-pointer">
          <Image
            src="/instagram-send.svg"
            alt=""
            className="image"
            fill={true}
          />
        </div>
      </div>
      <div>
        <div className="w-8 hover:opacity-50 cursor-pointer">
          <Image
            src="/instagram-bookmark.svg"
            alt=""
            className="image"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

const Post: React.FC<IPostProps> = (props: IPostProps) => {
  const { username, userImage, postImage, likes } = props.post;

  return (
    <div className="border-solid border-2 mt-5 rounded-md">
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
          <Image src="/instagram-3dots.svg" alt="" width={50} height={50} />
        </div>
      </div>
      <PostImages post={props.post} />
      <InteractionBar />
      <CommentBar post={props.post} />
    </div>
  );
};
export default Post;
