import Image from "next/image";
import Link from "next/link";
import { INavbarProps } from "./interfaces";

const MoreSection: React.FC<INavbarProps> = (props: INavbarProps) => {
  const { url, iconPath, header } = props;
  return url ? (
    <Link href={url}>
      <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
        <div>{header}</div>
        <div className="w-6">
          <Image src={iconPath} alt="" width={50} height={50} />
        </div>
      </li>
    </Link>
  ) : (
    <li className="w-auto flex justify-between z-10 h-12 items-center border-b-2 border-gray-200">
      <div>{header}</div>
      <div className="w-6">
        <Image src={iconPath} alt="" width={50} height={50} />
      </div>
    </li>
  );
};
const MoreTab = () => {
  return (
    <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center mt-28 group relative">
      <ul className="absolute h-auto bg-white bottom-14 w-56 shadow-lg  ">
        <MoreSection
          iconPath="/icons8-settings.svg"
          url="/Settings"
          header="Setings"
        />
        <MoreSection iconPath="/icons8-bookmark-64.png" header="Save" />

        <MoreSection
          iconPath="/icons8-crescent-moon-50.png"
          header="Switch appearance"
        />
        <MoreSection iconPath="/icons8-clock.svg" header="Your activity" />
        <MoreSection
          iconPath="/icons8-failed-24.png"
          header="Report a problem"
        />
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
  );
};
export default MoreTab;
