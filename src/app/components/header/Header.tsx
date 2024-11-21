"use client";
import Link from "next/link";
import { useState } from "react";
import style from "./page.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`${style.header}`}>
      <div  className={`${style.headercontainer}`}>
     
        <h1 className={`${style.logo}`}>Caffeine Dreams</h1>

        <div className={`${style.menutoggle}`}>
          <button onClick={toggleMenu}  className={`${style.menubutton}`} >
            ☰
          </button>
        </div>

        <ul className={`${style.desktopmenu}`}>
          <li className={`${style.menuitem}`}>
            <Link href="/" className={`${style.menulink}`}>
              Home
            </Link>
          </li>
          <li className={`${style.menuitem}`}>
            <Link href="#about" className={`${style.menulink}`}>
              About
            </Link>
          </li>
          <li className={`${style.menuitem}`}>
            <Link href="#menu" className={`${style.menulink}`}>
              Menu
            </Link>
          </li>
          <li className={`${style.menuitem}`}>
            <Link href="#reviews" className={`${style.menulink}`}>
              Reviews
            </Link>
          </li>
          <li className={`${style.menuitem}`}>
            <Link href="#contact" className={`${style.menulink}`}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className={`${style.mobilemenu}`}>
          <ul  className={`${style.mobilemenulist}`}>
            <li  className={`${style.mobilemenuitem}`}>
              <Link href="#home" className={`${style.mobilemenulink}`} >
                Home
              </Link>
            </li>
            <li className={`${style.mobilemenuitem}`}>
              <Link href="#about" className={`${style.mobilemenulink}`}>
                About
              </Link>
            </li>
            <li className={`${style.mobilemenuitem}`}>
              <Link href="#menu" className={`${style.mobilemenulink}`}>
                Menu
              </Link>
            </li>
            <li className={`${style.mobilemenuitem}`}>
              <Link href="#reviews" className={`${style.mobilemenulink}`}>
                Reviews
              </Link>
            </li>
            <li className={`${style.mobilemenuitem}`}>
              <Link href="#contact" className={`${style.mobilemenulink}`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
