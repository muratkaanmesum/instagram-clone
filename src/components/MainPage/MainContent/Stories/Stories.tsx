import useStories from "@/Hooks/MainContent/useStories";
import Image from "next/image";
import UserStories from "./UserStories";
const temp = [
  {
    id: 1,
    name: "Name1",
  },
  {
    id: 2,
    name: "Name2",
  },
  {
    id: 3,
    name: "Name3",
  },
  {
    id: 4,
    name: "Name4",
  },
  {
    id: 5,
    name: "Name5",
  },
  {
    id: 6,
    name: "Name6",
  },
  {
    id: 7,
    name: "Name7",
  },
  {
    id: 8,
    name: "Name8",
  },
];
const Stories = () => {
  const { translateValue, nextStory, prevStory, hiddenArrows } = useStories(
    temp.length
  );
  return (
    <div
      style={{ width: 450 }}
      className={`relative border-solid bg-white border scroll-smooth p-4 rounded-md flex gap-6 mt-5 overflow-hidden`}
    >
      <div
        className={`absolute ${
          hiddenArrows().left
        } bg-gray-50 top-8 left-5 w-6 z-10 rounded-full p-1 cursor-pointer`}
        onClick={prevStory}
      >
        <Image src={"/arrow_left.svg"} className="image" fill={true} alt="" />
      </div>
      <div
        className={`absolute ${
          hiddenArrows().right
        } bg-gray-50 top-8 right-5 w-6 z-10 rounded-full p-1 cursor-pointer`}
        onClick={nextStory}
      >
        <Image src={"/arrow_right.svg"} className="image" fill={true} alt="" />
      </div>
      {temp.map((item) => {
        return (
          <UserStories
            key={item.id}
            name={item.name}
            translateValue={translateValue}
          />
        );
      })}
    </div>
  );
};
export default Stories;
