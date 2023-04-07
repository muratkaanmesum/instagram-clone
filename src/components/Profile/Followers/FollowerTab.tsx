import Image from "next/image";
import Followers from "./Followers";
import { IUser } from "@/UserInterfaces";
interface IFollowerTabProps {
  user: IUser;
}
const FollowerTab: React.FC<IFollowerTabProps> = ({ user }) => {
  if (!user) return <div>Loading</div>;
  if (!user.userProfile) return <div>Loading123</div>;
  return (
    <div
      className="absolute w-96 bg-white z-20 rounded-2xl max-w-sm"
      style={{ left: "calc(50% - 200px)", top: "20%" }}
    >
      <div className="flex items-center justify-between box-border p-3 border-y-0 border-b-2 border-t-0">
        <div></div>
        <span className="font-medium">Followers</span>
        <button className="w-7 cursor-pointer">
          <Image
            src="/FollowerClose.svg"
            alt=""
            className="image"
            fill={true}
          />
        </button>
      </div>
      <Followers user={user} />
    </div>
  );
};
export default FollowerTab;
