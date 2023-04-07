import useFollowers from "@/Hooks/ProfilePage/useFollowers";
import useFollowing from "@/Hooks/ProfilePage/useFollowing";
import { IFollower, IUser } from "@/UserInterfaces";
import Image from "next/image";
interface FollowingItemProps {
  follower: IFollower;
}

interface FollowingProps {
  user: IUser;
}
const FollowerItem: React.FC<FollowingItemProps> = ({ follower }) => {
  const { username, fullName } = follower;
  return (
    <div className="flex justify-between p-3">
      <div className="flex items-center gap-3">
        <div className="w-12">
          <Image
            src="/temp.jpg"
            alt=""
            className="aspect-square object-cover rounded-full box-border image"
            fill={true}
          />
        </div>
        <div>
          <span className="font-medium block">{username}</span>
          <span className="block"> {fullName}</span>
        </div>
      </div>
      <div>
        <button className="bg-gray-200 hover:bg-gray-300 p-2 font-medium rounded-lg">
          Remove
        </button>
      </div>
    </div>
  );
};
const Followings: React.FC<FollowingProps> = ({ user }) => {
  const { userProfile } = user;
  const { following } = useFollowing(userProfile.id);
  return (
    <div className="overflow-y-auto overflow-hidden max-h-96">
      {following.map((following, index) => {
        return <FollowerItem follower={following} key={index} />;
      })}
    </div>
  );
};
export default Followings;
