import useFollowers from "@/Hooks/LoginPage/useFollowers";
import { IFollower, IUser } from "@/UserInterfaces";
import Image from "next/image";
interface FollowerItemProps {
  follower: IFollower;
}

interface FollowersProps {
  user: IUser;
}
const FollowerItem: React.FC<FollowerItemProps> = ({ follower }) => {
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
const Followers: React.FC<FollowersProps> = ({ user }) => {
  const { userProfile } = user;
  const { followers } = useFollowers(userProfile.id);

  return (
    <div className="overflow-y-auto overflow-hidden max-h-96">
      {followers.map((follower, index) => {
        return <FollowerItem follower={follower} key={index} />;
      })}
    </div>
  );
};
export default Followers;
