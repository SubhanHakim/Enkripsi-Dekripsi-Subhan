import Kriptografi from "./components/Kriptografi";
import KriptoRC4 from "./components/KriptoRC";
import NavbarSimple from "./components/NavbarSimple";

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <KriptoRC4 />
      <Kriptografi />
    </>
  );
}
