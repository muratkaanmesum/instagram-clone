import Image from "next/image";
import EditSidebar from "./EditSidebar";
import { useRouter } from "next/router";
import { IUser } from "@/UserInterfaces";
import EditForm from "./EditForm";

const EditBody: React.FC<{ user: IUser }> = ({ user }) => {
  const router = useRouter();

  if (user == null) {
    router.push("/");
  }
  return (
    <div className="ml-64 m-lg:ml-10 h-full">
      <main className="mx-auto w-4/5 p-1">
        <div className="flex my-8 border border-gray-300">
          <EditSidebar />
          <div className="flex flex-col gap-2 pt-8 w-full">
            <div className="flex gap-8 ml-32 items-center">
              <div className="h-9 aspect-square">
                <Image
                  src="/temp.jpg"
                  alt="test"
                  fill={true}
                  className="image rounded-full object-cover aspect-square"
                />
              </div>
              <div>
                <span className="text-base block">{user.username}</span>
                <span className="text-blue-500 text-base font-medium">
                  Change Profile photo
                </span>
              </div>
            </div>
            <EditForm user={user} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditBody;
