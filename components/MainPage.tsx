import Image from "next/image";

const MainPage = () => {
  return (
    <>
      <nav className="fixed h-full w-52 m-lg:w-10 m-5 mt-0 border-l-gray-900 border-r">
        <div className="w-28 my-8 m-lg:hidden transition-all">
          <Image src="/insta_logo.png" alt="" width={50} height={50} />
        </div>
        <div className="w-6 my-8 lg:hidden transition-all">
          <Image src="/icons8-instagram.svg" alt="" width={50} height={50} />
        </div>
        <ul>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex relative">
                <Image
                  src="/icons8-home-page-24.png"
                  alt=""
                  className="mr-5 group-hover:scale-105 transition duration-150 ease-in-out"
                  fill={true}
                />
                <div className="m-lg:hidden">Home</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-search.svg"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Search</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-compass-50.png"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Explore</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-instagram-reels.svg"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Reels</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-12 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-facebook-messenger.svg"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Messages</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-favorite-30.png"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Notifications</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-add-new-50.png"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Create</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-male-user-50.png"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">Profile</div>
              </div>
            </div>
          </li>
          <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center mt-28 group relative">
            <ul className="absolute h-auto bg-white bottom-14 w-56 shadow-lg">
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Settings</div>
                <div className="w-6">
                  <Image
                    src="/icons8-settings.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Save</div>
                <div className="w-6">
                  <Image
                    src="/icons8-bookmark-64.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Switch appearance</div>
                <div className="w-6">
                  <Image
                    src="/icons8-crescent-moon-50.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Your activity</div>
                <div className="w-6">
                  <Image
                    src="/icons8-clock.svg"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Report a problem</div>
                <div className="w-6">
                  <Image
                    src="/icons8-failed-24.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
              </li>
              <div className="bg-gray-100 w-1/1 h-1"></div>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Switch accounts</div>
              </li>
              <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
                <div>Log out</div>
              </li>
            </ul>
            <div className="flex">
              <div className="w-24 flex">
                <Image
                  src="/icons8-menu.svg"
                  alt=""
                  className="mr-5 w-6 group-hover:scale-105 transition duration-150 ease-in-out"
                  width={50}
                  height={50}
                />
                <div className="m-lg:hidden">More</div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="ml-56 h-screen">
        <div className="flex justify-center bg-slate-50">
          <div>
            <div className="border-solid bg-white border w-auto p-4 rounded-md flex gap-6 mt-5">
              <div className="flex items-center flex-col">
                <div className="rounded-full border-solid border-black border flex items-center justify-center w-16">
                  <Image
                    src="/icons8-customer-48.png"
                    className="object-cover w-10/12"
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-gray-400 font-thin mt-2 text-xs">Name</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="rounded-full border-solid border-black border flex items-center justify-center w-16">
                  <Image
                    src="/icons8-customer-48.png"
                    className="object-cover w-10/12"
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-gray-400 font-thin mt-2 font text-xs">
                  Name
                </div>
              </div>
              <div className="flex items-center flex-col">
                <div className="rounded-full border-solid border-black border flex items-center justify-center w-16">
                  <Image
                    src="/icons8-customer-48.png"
                    className="object-cover w-10/12"
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-gray-400 font-thin mt-2 text-xs">Name</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="rounded-full border-solid border-black border flex items-center justify-center w-16">
                  <Image
                    src="/icons8-customer-48.png"
                    className="object-cover w-10/12"
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-gray-400 font-thin mt-2 text-xs">Name</div>
              </div>
              <div className="flex items-center flex-col">
                <div className="rounded-full border-solid border-black border flex items-center justify-center w-16">
                  <Image
                    src="/icons8-customer-48.png"
                    className="object-cover w-10/12"
                    alt={""}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-gray-400 font-thin mt-2 text-xs">Name</div>
              </div>
            </div>
            <main>
              <div className="border-solid border-2 mt-5 rounded-md max-w-full">
                <div className="flex justify-between items-center p-4">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src="/icons8-customer-48.png"
                        alt=""
                        className="rounded-full w-8"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text-xs">Username</div>
                  </div>
                  <div className="w-8">
                    <Image
                      src="/more_horiz_FILL0_wght400_GRAD0_opsz48.svg"
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-full max-w-md object-cover">
                  <Image src="/temp.jpg" alt="" width={50} height={50} />
                </div>
              </div>
            </main>
          </div>
          <div className="flex flex-col w-1/4 ml-8 mt-20 gap-4 max-lg:bg-red-900 m-lg:hidden">
            <div className="flex justify-between items-center">
              <div className="flex items-center justify-center">
                <div className="rounded-full">
                  <Image
                    src="/icons8-customer-48.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="font-medium block text text-xs">
                    Username
                  </span>
                  <span className="font-thin text-xs">Full name</span>
                </div>
              </div>
              <div className="text-blue-500">Switch</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-400 font-medium text-sm">
                Suggestions For You
              </div>
              <div className="font-medium text-xs">See All</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full w-1/4 flex justify-center items-center mr-3">
                  <Image
                    src="/icons8-customer-48.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="font-medium block text text-xs">
                    Username
                  </span>
                  <span className="font-thin text-xs">Followers</span>
                </div>
              </div>
              <div className="text-blue-500">Follow</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full w-1/4 flex justify-center items-center mr-3">
                  <Image
                    src="/icons8-customer-48.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="font-medium block text text-xs">
                    Username
                  </span>
                  <span className="font-thin text-xs">Followers</span>
                </div>
              </div>
              <div className="text-blue-500">Follow</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full w-1/4 flex justify-center items-center mr-3">
                  <Image
                    src="/icons8-customer-48.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="font-medium block text text-xs">
                    Username
                  </span>
                  <span className="font-thin text-xs">Followers</span>
                </div>
              </div>
              <div className="text-blue-500">Follow</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="rounded-full w-1/4 flex justify-center items-center mr-3">
                  <Image
                    src="/icons8-customer-48.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <span className="font-medium block text text-xs">
                    Username
                  </span>
                  <span className="font-thin text-xs">Followers</span>
                </div>
              </div>
              <div className="text-blue-500">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
