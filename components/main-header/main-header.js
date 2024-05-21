import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={LogoImg} alt="A plate with food on it" priority />{" "}
          NextLevel Food{" "}
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals"> Browse Meals </Link>
              <Link href="/community"> Foodies Community </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
