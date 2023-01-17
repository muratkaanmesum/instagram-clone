import Image from "next/image";
import Link from "next/link";
import { INavbarProps } from "./interfaces";

const NavbarItem: React.FC<INavbarProps> = (props: INavbarProps) => {
  const { url, iconPath, header } = props;
  return (
    <li className="w-48 h-14 rounded-3xl flex hover:bg-slate-50 cursor-pointer justify-start items-center group">
      {url ? (
        <Link href={url}>
          <div className="flex">
            <div className="w-7 flex relative">
              <Image
                src={iconPath}
                alt=""
                className="mr-5 group-hover:scale-105 transition duration-150 ease-in-out image"
                fill={true}
              />
              <div className="m-lg:hidden">{header}</div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex">
          <div className="w-7 flex relative">
            <Image
              src={iconPath}
              alt=""
              className="mr-5 group-hover:scale-105 transition duration-150 ease-in-out image"
              fill={true}
            />
            <div className="m-lg:hidden">{header}</div>
          </div>
        </div>
      )}
    </li>
  );
};
export default NavbarItem;
