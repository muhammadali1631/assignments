import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./service.module.css";
import s1 from "@/images/services/s1.png";
import s2 from "@/images/services/s2.png";
import s3 from "@/images/services/s3.png";
import s4 from "@/images/services/s4.png";
import s5 from "@/images/services/s5.png";
import s6 from "@/images/services/s6.png";

import Link from "next/link";

type servicesDataType ={
    image:StaticImageData,
    title: string,
    des: string,
    link: string,
}

const servicesData:servicesDataType[] = [
  {
    image: s1,
    title: "Shared Hosting",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
  {
    image: s2,
    title: "Dedicated Hosting",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
  {
    image: s3,
    title: "Cloud Hosting",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
  {
    image: s4,
    title: "VPS Hosting",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
  {
    image: s5,
    title: "Wordpress Hosting",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
  {
    image: s6,
    title: "Domain Name",
    des: "Generators on the Internet tend to repeat predefined chunks as necessary",
    link: "/",
  },
];
const Service = () => {
  return (
    <div className={styles.services} id="service">
      <h1 className={styles.heading}>Our Services</h1>
      <div className={styles.boxes}>
        {servicesData.map((item, index) => (
          <div key={index} className={styles.box}>
            <div className={styles.image}>
              <Image width={45} src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p className={styles.para}>{item.des}</p>
            <Link href={item.link} className={styles.link}>Read More </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
