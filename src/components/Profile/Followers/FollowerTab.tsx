import Image from "next/image";
const FollowerItem = () => {
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
          <span className="font-medium block">Username</span>
          <span className="block"> Fullname</span>
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
const FollowerTab = () => {
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
      <div className="overflow-y-auto overflow-hidden max-h-96">
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
        <FollowerItem />
      </div>
    </div>
  );
};
export default FollowerTab;
