import Image from "next/image";
import ProfileHeader from "./ProfileHeader";
import { useRouter } from "next/router";
import useProfile from "@/Hooks/ProfilePage/useProfile";
import ProfileTabs from "./ProfileTabs";

const ProfilePage = () => {
  const { user, handleProfileTab, profileTab } = useProfile();
  if (!user) return <div>Loading</div>;
  return (
    <div className="h-full ml-64">
      <section className="h-full w-full">
        <main className="p-5 mx-auto w-5/6">
          <ProfileHeader user={user} />
          <ProfileTabs
            handleProfileTab={handleProfileTab}
            profileTab={profileTab}
          />
          <div className="mt-16">
            <div className="grid grid-cols-3 gap-2">
              <div className="object-fit aspect-square group relative cursor-pointer group">
                <Image
                  src="/temp.jpg"
                  alt=""
                  className="image h-full w-full cursor-pointer"
                  fill={true}
                />
                <div className="w-full absolute top-0 h-full group-hover:flex hidden group-hover:bg-black group-hover:opacity-20"></div>
                <div className="gap-3 hidden group-hover:flex absolute w-full top-0 items-center justify-center h-full">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/instagram-likes.svg"
                        fill={true}
                        className="image"
                        alt=""
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/comment_bubble.svg"
                        fill={true}
                        className="image"
                        alt=""
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                </div>
              </div>
              <div className="object-fit aspect-square group relative cursor-pointer group">
                <Image
                  src="/temp.jpg"
                  alt=""
                  className="image h-full w-full cursor-pointer"
                  fill={true}
                />
                <div className="w-full absolute top-0 h-full group-hover:flex hidden group-hover:bg-black group-hover:opacity-20"></div>
                <div className="gap-3 hidden group-hover:flex absolute w-full top-0 items-center justify-center h-full">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/instagram-likes.svg"
                        fill={true}
                        className="image"
                        alt=""
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/comment_bubble.svg"
                        fill={true}
                        className="image"
                        alt=""
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                </div>
              </div>
              <div className="object-fit aspect-square group relative cursor-pointer group">
                <Image
                  src="/temp.jpg"
                  className="image h-full w-full cursor-pointer"
                  fill={true}
                  alt=""
                />
                <div className="w-full absolute top-0 h-full group-hover:flex hidden group-hover:bg-black group-hover:opacity-20"></div>
                <div className="gap-3 hidden group-hover:flex absolute w-full top-0 items-center justify-center h-full">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/instagram-likes.svg"
                        fill={true}
                        alt=""
                        className="image"
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/comment_bubble.svg"
                        fill={true}
                        alt=""
                        className="image"
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                </div>
              </div>
              <div className="object-fit aspect-square group relative cursor-pointer group">
                <Image
                  src="/temp.jpg"
                  alt=""
                  className="image h-full w-full cursor-pointer"
                  fill={true}
                />
                <div className="w-full absolute top-0 h-full group-hover:flex hidden group-hover:bg-black group-hover:opacity-20"></div>
                <div className="gap-3 hidden group-hover:flex absolute w-full top-0 items-center justify-center h-full">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/instagram-likes.svg"
                        fill={true}
                        alt=""
                        className="image"
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-8">
                      <Image
                        src="/comment_bubble.svg"
                        fill={true}
                        alt=""
                        className="image"
                      />
                    </div>
                    <span className="text-white font-medium">200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};
export default ProfilePage;
