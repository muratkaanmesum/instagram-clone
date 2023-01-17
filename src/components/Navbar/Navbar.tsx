import Image from "next/image";
import MoreTab from "./MoreTab";
import NavbarItem from "./NavbarItem";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed h-full w-52 m-lg:w-10 m-5 mt-0 border-l-gray-900 border-r">
      <div className="w-28 my-8 m-lg:hidden transition-all">
        <Image src="/insta_logo.png" alt="" fill={true} className="image" />
      </div>
      <div className="w-16 my-8 lg:hidden transition-all">
        <Image
          src="/icons8-instagram.svg"
          alt=""
          fill={true}
          className="image"
        />
      </div>
      <ul>
        <NavbarItem url="/" iconPath="/icons8-home-page-24.png" header="Home" />
        <NavbarItem iconPath="/icons8-search.svg" header="Search" />
        <NavbarItem
          url="/Explore"
          iconPath="/icons8-compass-50.png"
          header="Explore"
        />
        <NavbarItem
          url="/Reels"
          iconPath="/icons8-instagram-reels.svg"
          header="Reels"
        />
        <NavbarItem
          url="/Inbox"
          iconPath="/icons8-facebook-messenger.svg"
          header="Messages"
        />
        <NavbarItem iconPath="/icons8-favorite-30.png" header="Notifications" />
        <NavbarItem iconPath="/icons8-add-new-50.png" header="Create" />
        <NavbarItem iconPath="/icons8-male-user-50.png" header="Profile" />
        <MoreTab />
      </ul>
    </nav>
  );
};
export default Navbar;
