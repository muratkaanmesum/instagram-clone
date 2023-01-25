import Image from "next/image";

const Suggestion = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <div className="rounded-full w-1/4 flex justify-center items-center mr-3">
          <Image src="/icons8-customer-48.png" alt="" width={50} height={50} />
        </div>
        <div>
          <span className="font-medium block text text-xs">Username</span>
          <span className="font-thin text-xs">Followers</span>
        </div>
      </div>
      <div className="text-blue-500">Follow</div>
    </div>
  );
};
export default Suggestion;
