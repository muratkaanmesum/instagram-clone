import axios from "axios";
import { useEffect, useState } from "react";

const useLogin = () => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState(null);
    useEffect(() => {
       async () =>  await getLoggedInUser();
    }, [])
    
    const API_URL = "http://localhost:7023/api/User/getUserById";
    async function getLoggedInUser() {
        const user = await axios.get(API_URL + "?id=2");     
        console.log(user);
           
        setUser(user.data);
        setLogin(true);
    }
    return { login, user };
}
export default useLogin;