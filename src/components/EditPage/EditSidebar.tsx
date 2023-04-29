const EditSidebar = () => {
  return (
    <section className="flex flex-col basis-64 border-r-[1px] flex-shrink-0 border-gray-300 m-md:hidden">
      <div className="border-b-[1px] p-5 border-gray-300">
        <h1 className="font-medium text-lg">
          Some account settings are moving
        </h1>
        <span>
          Soon, Accounts Center will be the primary place to manage your account
          info and settings.
        </span>
        <br />
        <span className="text-blue-400 font-medium">Learn more</span>
      </div>
      <ul>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-l-black border-y-transparent">
          <span> Edit Profile </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span> Change Password </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span> Apps and websites </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span> Email notifications </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span> Push notifications </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span> Manage contracts </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Privacy and Security </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Add </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Supervision </span>
        </li>
        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Login activity </span>
        </li>

        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Emails from Instagram </span>
        </li>

        <li className="p-3 pl-4 border-2 border-y-0 border-x-transparent hover:border-l-gray-400 hover:cursor-pointer border-y-transparent">
          <span>Help</span>
        </li>
      </ul>
      <div className="border border-x-transparent border-gray-300 border-b-transparent flex items-center justify-center p-6">
        <div>
          <h3 className="text-blue-500 font-semibold">Accounts Center</h3>
          <p className="text-sm text-gray-400 mt-2">
            Control settings for connected experiences across Instagram, the
            Facebook app and Messenger, including story and post sharing and
            logging in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EditSidebar;
