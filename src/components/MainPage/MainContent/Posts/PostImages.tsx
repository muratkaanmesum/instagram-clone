import usePosts from "@/Hooks/MainContent/usePosts";
import Image from "next/image";
import { IPostProps } from "./interfaces";
const PostImages: React.FC<IPostProps> = (props: IPostProps) => {
  const { postImage } = props.post;
  const { imageIndex, handleNextImage, handlePrevImage, hiddenArrows } =
    usePosts(postImage.length);

  return (
    <div className="relative overflow-hidden flex" style={{ width: 450 }}>
      <ul className="flex">
        {postImage.map((image, index) => {
          return (
            <li
              key={index}
              className="transition-all duration-300"
              style={{
                width: 450,
                translate: imageIndex * -450,
              }}
            >
              <Image
                src={image}
                priority
                alt=""
                className="image"
                fill={true}
              />
            </li>
          );
        })}
      </ul>
      <div
        className={`absolute bg-white p-2 rounded-full right-2 top-72 opacity-80 cursor-pointer ${
          hiddenArrows().right
        }`}
      >
        <Image
          src="/arrow_right.svg"
          alt=""
          width={20}
          height={20}
          onClick={handleNextImage}
        />
      </div>
      <div
        className={`absolute bg-white p-2 rounded-full left-2 top-72 opacity-80 cursor-pointer ${
          hiddenArrows().left
        }`}
      >
        <Image
          src="/arrow_left.svg"
          className=""
          alt=""
          width={20}
          height={20}
          onClick={handlePrevImage}
        />
      </div>
    </div>
  );
};
export default PostImages;
