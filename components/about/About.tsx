import Image from "next/image";
import React from "react";
import styles from './about.module.css'
import img from '@/images/about-img.png'
const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles['about-info']}>
        <h2>About Us</h2>
        <p>
          Words which don&apos;t look even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks
        </p>
        <button className={styles.button}>Read More</button>
      </div>
      <div className={styles.image}>
        <Image className={styles.image} src={img} alt="About"/>
      </div>
    </div>
  );
};

export default About;
