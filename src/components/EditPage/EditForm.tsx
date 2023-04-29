import useEdit from "@/Hooks/EditPage/useEdit";
import { IUser } from "@/UserInterfaces";

const EditForm: React.FC<{ user: IUser }> = ({ user }) => {
  const { fullNameRef, usernameRef, bioRef, emailRef, handleSubmit } =
    useEdit();
  return (
    <form className="flex flex-col gap-4 box-border" onSubmit={handleSubmit}>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-32">
          <label className="font-medium">Name</label>
        </aside>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            className="focus:outline-none border border-gray-300 rounded-md p-1 pl-2"
            defaultValue={user.userProfile.fullName}
            ref={fullNameRef}
          />
          <p className="text-sm text-gray-500">
            Help people discover your account by using the name you&apos;re
            known by either your full name, nickname, or business name.
          </p>
          <p className="text-sm text-gray-500">
            You can only change your name twice within 14 days.
          </p>
        </div>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-24">
          <label className="font-medium">Username</label>
        </aside>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Username"
            className="focus:outline-none border border-gray-300 rounded-md p-1 pl-2"
            defaultValue={user.username}
            ref={usernameRef}
          />
          <p className="text-sm text-gray-500">
            In most cases, you&apos;ll be able to change your username back to
            muratkaanmesum for another 14 days. Learn more
          </p>
        </div>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-28">
          <label className="font-medium">Website</label>
        </aside>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Website"
            disabled
            className="focus:outline-none border border-gray-300 bg-gray-200 rounded-md p-1 pl-2"
          />
          <p className="text-sm text-gray-500">
            Editing your links is only available on mobile. Visit the Instagram
            app and edit your profile to change the websites in your bio.
          </p>
        </div>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-36">
          <label className="font-medium">Bio</label>
        </aside>
        <div className="flex flex-col gap-2">
          <textarea
            name=""
            id=""
            cols={50}
            rows={3}
            className="outline-none border border-gray-400 rounded-sm"
            defaultValue={user.userProfile.bio}
            ref={bioRef}
          ></textarea>
          <div className="text-gray-500">
            <span className="text-sm">0</span>
            <span className="text-sm">/150</span>
          </div>
        </div>
      </div>
      <div className="px-48 text-sm text-gray-500">
        <strong> Personal information </strong>
        <p className="">
          Provide your personal information, even if the account is used for a
          business, a pet or something else. This won&apos;t be a part of your
          public profile.
        </p>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-32">
          <label className="font-medium">Email</label>
        </aside>
        <div className="flex flex-col flex-1 gap-2">
          <input
            type="text"
            placeholder="Email"
            className="focus:outline-none border flex-1 border-gray-300 rounded-md p-1 pl-2"
            defaultValue={user.userProfile.email}
            ref={emailRef}
          />
        </div>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-14">
          <label className="font-medium">Phone mumber</label>
        </aside>
        <div className="flex flex-col flex-1 gap-2">
          <input
            type="text"
            placeholder="Phone number"
            className="focus:outline-none border flex-1 bg-gray-200 border-gray-300 rounded-md p-1 pl-2"
            disabled
          />
        </div>
      </div>
      <div className="flex pr-44 gap-4">
        <aside className="text-right pl-28">
          <label className="font-medium">Gender</label>
        </aside>
        <div className="flex flex-col flex-1 gap-2">
          <input
            type="text"
            placeholder="Gender"
            className="focus:outline-none border flex-1 bg-gray-200 border-gray-300 rounded-md p-1 pl-2"
            disabled
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="pb-2">
          <button className="bg-blue-500 rounded-lg text-white p-2 font-medium">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
