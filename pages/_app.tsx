import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

globalStyles()

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/new" element={<NewAppointment/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<Login/>}/>
      </Routes> */}
      <Component {...pageProps} />
    </>
  )
}
