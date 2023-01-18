import Image from "next/image";
import Stories from "./MainContent/Stories/Stories";
import Navbar from "./Navbar/Navbar";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className="ml-56 h-screen">
        <div className="flex justify-center bg-slate-50">
          <div>
            <Stories />
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
                  <Image src="/temp.jpg" alt="" fill={true} className="image" />
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
