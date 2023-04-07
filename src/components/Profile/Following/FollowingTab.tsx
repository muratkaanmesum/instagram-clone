import Image from "next/image";
import { IUser } from "@/UserInterfaces";
import Link from "next/link";
import Followings from "./Following";
const FollowingTab: React.FC<{ user: IUser }> = ({ user }) => {
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
        <Link href={`/${user.username}`} className="w-7 cursor-pointer">
          <Image
            src="/FollowerClose.svg"
            alt=""
            className="image"
            fill={true}
          />
        </Link>
      </div>
      <Followings user={user} />
    </div>
  );
};
export default FollowingTab;
