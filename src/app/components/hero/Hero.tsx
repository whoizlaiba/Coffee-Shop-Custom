import React from "react";
import Image from "next/image";
import style from "./page.module.css";

const Hero: React.FC = () => {
  return (
    <section id={`${style.hero}`} className={`${style.hero}`}>
      <Image
        src={"/coffee.webp"}
        alt="Coffee Cup"
        className={`${style.heroimage}`}
        width={1000}
        height={100}
      />
      <div className={`${style.overlay}`}></div>

      <h2 className={`${style.herotitle}`}>
        Welcome to <br className={`${style.breakmobile}`} />
        <span className={`${style.highlighttext}`}>
          Caffeine Dreams
        </span>
        <br className={`${style.breakmobile}`} /> Cafe
      </h2>

      <p className={`${style.herodescription}`}>
        Your perfect cup of coffee, brewed just for you!
      </p>
    </section>
  );
};

export default Hero;


