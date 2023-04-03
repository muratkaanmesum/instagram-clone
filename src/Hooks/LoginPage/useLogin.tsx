import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  async function login() {
    const API_ROOT = "https://localhost:7023/api/User/login";
    const data = {
      username,
      password,
    };
    try {
      const result = await axios.post(API_ROOT, data);
      result.data && setUser(result.data);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      setError(true);
    }
  }
  return { username, password, error, setUsername, setPassword, login, user };
};
export default useLogin;
