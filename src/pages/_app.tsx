import { LoginProvider } from "@/Contexts/LoginContext";
import type { AppProps } from "next/app";
import { useContext } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
  <Component {...pageProps} />
    </LoginProvider>
  );
}
