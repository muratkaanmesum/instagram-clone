import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <Image
          src="/InstagramLoading.gif"
          alt=""
          className="image"
          fill={true}
        />
      </div>
    </div>
  );
};

export default Loading;
