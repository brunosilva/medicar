import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { ContainerApp } from "./style";

globalStyles()

export default function App({Component, pageProps}: AppProps) {
  return <ContainerApp><Component {...pageProps} /></ContainerApp>
}
