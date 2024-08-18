"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavigationMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navigation-menu-wrapper">
      <div className="navigation-menu-container">
        <Link href="/" className="navigation-img-link">
          <Image src="/images/logo.png" alt="logo" fill />
        </Link>

        <div className="navigation-menu-container-right">
          <Link
            href="/sign-up"
            className="navigation-link"
            onClick={toggleShowMenu}
          >
            Get Started
          </Link>
          <div className="menu-humburger" onClick={toggleShowMenu}>
            <div
              className={`menu-humburger-line menu-humburger-line-1 ${
                showMenu ? "menu-humburger-line-1-show" : ""
              }`}
            ></div>
            <div
              className={`menu-humburger-line menu-humburger-line-2 ${
                showMenu ? "menu-humburger-line-2-show" : ""
              }`}
            ></div>
            <div
              className={`menu-humburger-line menu-humburger-line-3 ${
                showMenu ? "menu-humburger-line-3-show" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div className={`menu ${showMenu ? "show" : ""}`}>
        <Link
          href="/#Features"
          className="navigation-link"
          onClick={toggleShowMenu}
        >
          Features
        </Link>
        <Link
          href="/#UseCase"
          className="navigation-link"
          onClick={toggleShowMenu}
        >
          Use Case
        </Link>
        <Link
          href="/#Pricing"
          className="navigation-link"
          onClick={toggleShowMenu}
        >
          Pricing
        </Link>
        <Link href="/blog" className="navigation-link" onClick={toggleShowMenu}>
          Blogs
        </Link>
        <Link
          href="/#ContactUs"
          className="navigation-link"
          onClick={toggleShowMenu}
        >
          Contact Us
        </Link>
        <Link
          href="/sign-up"
          className="navigation-link"
          onClick={toggleShowMenu}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
