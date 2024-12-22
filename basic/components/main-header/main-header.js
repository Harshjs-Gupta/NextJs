import logoImg from "@/assets/logo.png";
import Link from "next/link";
import style from "./main-header.module.css";
import Image from "next/image";
import MainBackground from "./main-background";
import NavLink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>{" "}
            </li>
            <li>
              <NavLink href="/community">Join Community</NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default MainHeader;
