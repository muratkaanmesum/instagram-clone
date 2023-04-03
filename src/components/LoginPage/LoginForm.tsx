import Image from "next/image";
import useLogin from "@/Hooks/LoginPage/useLogin";
import { useContext } from "react";
import { LoginContext } from "@/Contexts/LoginContext";
const LoginInputs = (props: any) => {
  const { setUsername, setPassword } = useContext(LoginContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Username or email"
          className="focus:outline-none border border-gray-300 pt-3 bg-gray-50 rounded-md w-5/6"
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="w-full flex items-center justify-center">
          <input
            type="text"
            name=""
            id=""
            className="focus:outline-none border border-gray-300 pt-3 relative bg-gray-50 rounded-md w-5/6"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="ml-7 mt-5 flex items-center gap-2">
        <input
          id="checkbox"
          type="checkbox"
          className="w-4 h-4 rounded focus:ring-0"
        />
        <label htmlFor="save-info" className="text-sm">
          save login info
        </label>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button className="rounded-xl bg-blue-400 w-5/6 text-white p-1">
          Log in
        </button>
      </div>
    </>
  );
};
const LoginForm = () => {
  const { login, error } = useContext(LoginContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login();
      }}
    >
      <div className="flex flex-col items-center border w-96 border-gray-200">
        <div className="w-2/4 mt-10 mb-10 rel">
          <Image
            src="/insta_logo.png"
            className="image"
            alt=""
            fill={true}
            sizes=""
          />
        </div>
        <div className="flex flex-col w-full justify-start">
          <LoginInputs />
          <div className="mx-4 flex justify-center my-4">
            <div className="w-4/5 border border-gray-200 relative after:absolute after:text-gray-400 after:left-28 after:-top-3 after:px-2 after:content-['OR'] after:bg-white after::w-10 my-5"></div>
          </div>
          <div className="w-full flex items-center justify-center text-blue-900">
            Login with facebook
          </div>
          {error && (
            <p className="text-center text-red-500">
              Sorry, your password was incorrect. Please double-check your
              password.
            </p>
          )}
          <div className="w-full flex items-center justify-center">
            <a className="text-sm my-5 text-blue-700"> Forgot password ? </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border w-96 h-20 border-gray-200 mt-5">
        <p className="">
          Don't have an account?
          <a className="text-blue-600 cursor-pointer">Sign up</a>
        </p>
      </div>
    </form>
  );
};
export default LoginForm;
