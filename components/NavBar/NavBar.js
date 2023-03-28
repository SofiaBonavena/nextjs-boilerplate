import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav
    className={`navbar is-black is-fixed-top ${styles['container']}`}
    role="navigation"
    aria-label="main navigation"
  >
    <div className={`navbar-brand ${styles['containerdiv']}`}>
      <Link href="/">
        <a className={`navbar-item ${styles['containerimg']}`}>
          <Image
            className={`${styles['img']}`}
            src="/assets/logo.svg"
            alt="Bulma: a modern CSS framework based on Flexbox"
            width={124}
            height={40}
          />
        </a>
      </Link>
      <div
        className={`navbar-burger ${styles['containermenu']}`}
        data-target="navbarBasicExample"
      >
        <span className={`${styles['menu']}`}></span>
        <span className={`${styles['menu']}`}></span>
        <span className={`${styles['menu']}`}></span>
      </div>
    </div>
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end pr-6">
        <Link href="/disenio">
          <a className="navbar-item has-text-weight-bold">Diseño</a>
        </Link>
        <Link href="/programacion">
          <a className="navbar-item has-text-weight-bold">Programación</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default NavBar;
