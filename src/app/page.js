import Kriptografi from "./components/Kriptografi";
import KriptoRC4 from "./components/KriptoRC";
import NavbarSimple from "./components/NavbarSimple";
import RSAWithKeys from "./components/RSA";


export default function Home() {
  return (
    <>
      <NavbarSimple />
      <RSAWithKeys/>
    </>
  );
}
