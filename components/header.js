import headerStyles from "../styles/Header.module.css";

const Header = ({ offset }) => {
  return (
    <div className={headerStyles.container}>
      <span className={headerStyles.blur}></span>
      <nav className={headerStyles.navbar}>
        <ul className={headerStyles.navigation}>
          <li className={headerStyles.nav}>
            <a
              href="#home"
              className={offset > 400 ? headerStyles.a : headerStyles.current}
            >
              Home
            </a>
          </li>
          <li className={headerStyles.nav}>
            <a
              href="#about"
              className={
                offset >= 400
                  ? offset <= 2300
                    ? headerStyles.current
                    : headerStyles.a
                  : headerStyles.a
              }
            >
              About
            </a>
          </li>
          <li className={headerStyles.nav}>
            <a
              href="#projects"
              className={
                offset > 2300
                  ? offset < 3400
                    ? headerStyles.current
                    : headerStyles.a
                  : headerStyles.a
              }
            >
              Projects
            </a>
          </li>
          <li className={headerStyles.nav}>
            <a
              href="#contact"
              className={offset >= 3400 ? headerStyles.current : headerStyles.a}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
