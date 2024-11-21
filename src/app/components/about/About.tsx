import React from 'react';
import Image from 'next/image';
import style from "./page.module.css"

const About = () => {
  return (
    <div id="about" className={`${style.aboutsection} `}>
      <div className={`${style.container} `}>
        <h2 className={`${style.sectiontitle} `}>
          About Our Coffee Shop
        </h2>
        <div className={`${style.contentgrid} `}>
          <div className={`${style.textcontent} `}>
            <p className={`${style.paragraph} `}>
              Welcome to our coffee shop, where every cup tells a story. Our mission is to offer more than just a cup of coffee—we aim to create an experience. From our carefully sourced beans to the heartwarming environment, we want to be your go-to spot for that perfect blend of comfort and flavor.
            </p>
            <p className={`${style.paragraph} `}>
              Whether you are here for a quick pick-me-up or to spend time with friends, we ensure every moment spent here is special. Our cozy seating, friendly baristas, and commitment to quality make us a place where memories are made.
            </p>
            <p className={`${style.paragraph} `}>
              Here, you will find a space that feels like an extension of your own home, where the aroma of freshly brewed coffee mingles with the laughter of good company. Our passion for coffee goes beyond just the craft&mdash;it&#39;s about creating a place where connections are made, stories are shared, and every visit feels like a little escape from the hustle of daily life.
            </p>
            <p className={`${style.paragraph} `}>
              Come and experience the magic of freshly brewed coffee, crafted with love, and served with a smile. Join us in celebrating the art of coffee, community, and connection.
            </p>
          </div>

          <div className={`${style.imagecontainer} `}>
            <Image
              src="/aboutpic.jpeg"
              alt="Coffee Shop Interior"
              className={`${style.shopimage} `}
              width={1000}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
