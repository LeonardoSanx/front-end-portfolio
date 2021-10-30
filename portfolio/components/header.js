import headerStyles from "../styles/Header.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className={headerStyles.container}>
      <span className={headerStyles.blur}></span>
      <nav className={headerStyles.navbar}>
        {/* <div className={headerStyles.links}>
          <a
            className={headerStyles.social}
            href="https://github.com/LeonardoSanx"
            target="_blank"
          >
            <AiFillGithub />
          </a>
          <a
            className={headerStyles.social}
            href="https://www.linkedin.com/in/leonardo-sanches-machado-870827191/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a className={headerStyles.social} href="/">
            <FiMail />
          </a>
        </div> */}

        <ul className={headerStyles.navigation}>
          <li className={headerStyles.nav}>
            <a href="#home">Home</a>
          </li>
          <li className={headerStyles.nav}>
            <a href="#about">About</a>
          </li>
          <li className={headerStyles.nav}>
            <a href="#projects">Projects</a>
          </li>
          <li className={headerStyles.nav}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
