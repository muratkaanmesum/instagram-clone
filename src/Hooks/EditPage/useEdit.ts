import { useRef } from "react";

interface IEdit {
    fullNameRef: React.RefObject<HTMLInputElement>;
    usernameRef: React.RefObject<HTMLInputElement>;
    bioRef: React.RefObject<HTMLTextAreaElement>;
    emailRef: React.RefObject<HTMLInputElement>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const useEdit = (): IEdit => {
    const fullNameRef = useRef<HTMLInputElement>(null);
    const usernameRef = useRef<HTMLInputElement>(null);
    const bioRef = useRef<HTMLTextAreaElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fullName = fullNameRef.current?.value;
        const username = usernameRef.current?.value;
        const bio = bioRef.current?.value;
        const email = emailRef.current?.value;
        console.log(fullName, username, bio, email);
    }
    return {
        fullNameRef,
        usernameRef,
        bioRef,
        emailRef,
        handleSubmit
    };
}
export default useEdit;