import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <main className="h-screen flex items-center justify-center gap-10">
        <div className="rounded-xl w-96 relative">
          <Image src="/temp_login.jpg" alt="" className="object-cover image" fill={true}/>
        </div>
        <LoginForm/>
      </main>
    );

}
export default LoginPage;