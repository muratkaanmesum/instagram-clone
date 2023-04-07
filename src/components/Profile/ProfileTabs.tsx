import { ProfileTab } from "@/Hooks/ProfilePage/useProfile";
import Image from "next/image";
interface IProfileTabsProps {
  handleProfileTab: (tab: ProfileTab) => void;
  profileTab: ProfileTab;
}
const ProfileTabs: React.FC<IProfileTabsProps> = ({
  handleProfileTab,
  profileTab,
}) => {
  return (
    <div className="relative text-sm">
      <hr className="border border-gray-200 h-0 w-full mt-4" />
      <div
        className={`absolute flex items-center gap-1 ${
          profileTab == "Posts" ? "border" : "border border-t-transparent"
        } p-1 pt-4 border-x-0 border-b-0 cursor-pointer border-t-black`}
        style={{ left: "calc(50% - 200px)", top: "1px" }}
        onClick={() => handleProfileTab("Posts")}
      >
        <div className="w-4">
          <Image src="/grid.svg" fill={true} className="image" alt="" />
        </div>
        <span className="font-medium">POSTS</span>
      </div>
      <div
        className={`absolute flex items-center gap-1 ${
          profileTab == "Saved"
            ? "border border-t-black"
            : "border border-t-transparent"
        } p-1 pt-4 border-x-0 border-b-0 cursor-pointer border-t-black`}
        style={{ left: "calc(50% - 50px)", top: "1px" }}
        onClick={() => handleProfileTab("Saved")}
      >
        <div className="w-4">
          <Image
            src="/instagram-bookmark.svg"
            fill={true}
            className="image"
            alt=""
          />
        </div>
        <span className="font-medium">SAVED</span>
      </div>
      <div
        className={`absolute flex items-center gap-1 ${
          profileTab == "Tagged" ? "border" : "border border-t-transparent"
        } p-1 pt-4 border-x-0 border-b-0 cursor-pointer border-t-black`}
        style={{ left: "calc(50% + 100px)", top: "1px" }}
        onClick={() => handleProfileTab("Tagged")}
      >
        <div className="w-4">
          <Image src="/grid.svg" fill={true} className="image" alt="" />
        </div>
        <span className="font-medium">TAGGED</span>
      </div>
    </div>
  );
};
export default ProfileTabs;
