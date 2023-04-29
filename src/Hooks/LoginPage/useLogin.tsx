import { IUser } from "@/UserInterfaces";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const storageStr = localStorage.getItem("user");
    if (storageStr != null) {
      const storageUser = JSON.parse(storageStr);
      setUser(storageUser);
      setLoading(false);
    }
  }, []);
  async function login() {
    const API_ROOT = "https://localhost:7023/api/User/login";
    const data = {
      username,
      password,
    };
    try {
      const result = await axios.post(API_ROOT, data);
      result.data && setUser(result.data);
      if (result.data != null) {
        localStorage.setItem("user", JSON.stringify(result.data));
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  return {
    username,
    password,
    error,
    setUsername,
    setPassword,
    login,
    user,
    loading,
  };
};
export default useLogin;
