import React from 'react';
import style from "./page.module.css";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={`${style.footer}`}>
      <div className={`${style.footercontainer}`}>
        <p className={`${style.footertext} ${style.footerlocation}`}>
          Visit Us: 123 Coffee Street, Karachi City
        </p>
        <p className={`${style.footertext} ${style.footeremail}`}>
          Email: caffeinedreams@gmail.com
        </p>
        <p className={`${style.footertext} ${style.footercopy}`}>
          &copy;2024 Caffeine Dreams. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
