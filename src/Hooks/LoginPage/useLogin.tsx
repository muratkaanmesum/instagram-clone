import axios from "axios";
import { useState } from "react";

const useLogin = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  async function login() {
    const API_ROOT = "https://localhost:7023/api/User/login";
    const data = {
      username,
      password,
    };
    try {
      const result = await axios.post(API_ROOT, data);
      result.data && setUser(result.data);
    } catch (error) {
      setError(true);
    }
  }
  return { username, password, error, setUsername, setPassword, login };
};
export default useLogin;
