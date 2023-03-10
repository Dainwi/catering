import React, { useState } from "react";
import styles from "../styles/Nav.module.css";
import { FaEquals, FaMixer } from "react-icons/fa";
const Nav = () => {
  const [active, setActive] = useState("true");

  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src={"/logo.png"} />
      <ul>
        <li
          className={active ? styles.closeNav : styles.li}
          onClick={() => setActive(!active)}
        >
          <FaMixer className={styles.closeIcon} />
          <a className={styles.a} href="/">
            Home
          </a>
          <a className={styles.a} href="#about">
            About
          </a>
          <a className={styles.a} href="#menu">
            Menu
          </a>
          <a className={styles.a} href="#contact">
            Contact Us
          </a>
        </li>
      </ul>
      <FaEquals
        className={styles.menuIcon}
        onClick={() => setActive(!active)}
      />
    </nav>
  );
};

export default Nav;
