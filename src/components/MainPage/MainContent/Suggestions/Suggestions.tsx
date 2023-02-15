import { LoginContext } from "@/Contexts/LoginContext";
import Image from "next/image";
import { useContext } from "react";
import Suggestion from "./Suggestion";
const UserProfile = () => {
  const {user} = useContext(LoginContext);
  console.log(user);
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-center">
        <div className="rounded-full">
          <Image src="/icons8-customer-48.png" alt="" width={50} height={50} />
        </div>
        <div>
          <span className="font-medium block text text-xs">Username</span>
          <span className="font-thin text-xs">Full name</span>
        </div>
      </div>
      <div className="text-blue-500">Switch</div>
    </div>
  );
};
const Suggestions: React.FC = () => {
  return (
    <div className="flex flex-col w-1/4 ml-8 mt-20 gap-4 max-lg:bg-red-900 m-lg:hidden">
      <UserProfile />
      <div className="flex justify-between">
        <div className="text-gray-400 font-medium text-sm">
          Suggestions For You
        </div>
        <div className="font-medium text-xs">See All</div>
      </div>
      <Suggestion />
      <Suggestion />
      <Suggestion />
    </div>
  );
};

export default Suggestions;
