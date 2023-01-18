import useStories from "@/Hooks/MainContent/useStories";
import Image from "next/image";

interface IUserStoriesProps {
  name: string;
  translateValue: number;
}
const UserStories: React.FC<IUserStoriesProps> = ({
  name,
  translateValue,
}: IUserStoriesProps) => {
  return (
    <div
      className="flex items-center flex-col transition-all duration-300"
      style={{ translate: -translateValue }}
    >
      <div className="rounded-full border-solid  border-black border flex items-center justify-center w-16">
        <Image
          src="/icons8-customer-48.png"
          className="object-cover w-10/12"
          alt={""}
          width={50}
          height={50}
        />
      </div>
      <div className="text-gray-400 font-thin mt-2 text-xs">{name}</div>
    </div>
  );
};
export default UserStories;
