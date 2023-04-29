import { IUser } from "@/UserInterfaces";
import Image from "next/image";
import Link from "next/link";
interface IProfileProps {
  user: IUser;
}
const ProfileInfo: React.FC<IProfileProps> = (props) => {
  const { user } = props;
  const { username, userProfile } = user;
  if (!userProfile) return <div></div>;
  const { posts, fullName, followers, following } = userProfile;
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <span className="text-lg">{fullName}</span>
        <Link href={"/accounts/edit"}>
          <button className="bg-gray-200 rounded-md hover:bg-gray-300 p-2 font-medium">
            Edit Profile
          </button>
        </Link>
        <button className="w-8">
          <Image
            src="/icons8-settings.svg"
            alt=""
            className="image"
            fill={true}
          />
        </button>
      </div>
      <div className="flex gap-10">
        <span>
          <span className="font-medium">{posts.length}</span> Post
        </span>
        <Link href={`/${user.username}/Followers`}>
          <span className="font-medium">{followers.length}</span> followers
        </Link>
        <Link href={`/${user.username}/Following`}>
          <span className="font-medium">{following.length}</span> Following
        </Link>
      </div>
      <span className="font-medium">{username}</span>
    </div>
  );
};

const ProfileHeader: React.FC<IProfileProps> = (props) => {
  const { user } = props;
  return (
    <div className="flex w-full gap-28 p-5">
      <button className="w-44">
        <Image
          src="/temp_login.jpg"
          className="rounded-full object-cover aspect-square image"
          fill={true}
          alt=""
        />
      </button>
      <ProfileInfo user={user} />
    </div>
  );
};
export default ProfileHeader;
