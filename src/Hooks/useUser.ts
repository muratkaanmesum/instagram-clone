import { LoginContext } from '@/Contexts/LoginContext'
import { IUser } from '@/UserInterfaces';
import { useContext } from 'react'

export default function useUser(): IUser {
    const { user } = useContext(LoginContext);
    console.log(user);

    if (!user) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return user;
}
