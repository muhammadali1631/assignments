import React from "react";
import styles from "./footer.module.css";
import { FaPhoneAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles.address}>
          <h3>Address</h3>
          <p className={styles.para}>
            <FaLocationDot />
            Location
          </p>
          <p className={styles.para}>
            <FaPhoneAlt /> Call : +01 123455678990
          </p>
          <p className={styles.para}>
            <IoMail />
            mail@domain.com
          </p>
          <div className={styles["socail-links"]}>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <LuInstagram />
          </div>
        </div>
        <div className={styles.links}>
          <h3>Links</h3>
          <Link href={"/"}><TbArrowBigRightLineFilled style={{ color: "#ff4646" }} />Home</Link>
          <Link href={"#about"}><TbArrowBigRightLineFilled style={{ color: "#ff4646" }} />About</Link>
          <Link href={"#service"}><TbArrowBigRightLineFilled style={{ color: "#ff4646" }} />Services</Link>
          <Link href={"#pricing"}><TbArrowBigRightLineFilled style={{ color: "#ff4646" }} />Pricing</Link>
          <Link href={"#contact"}><TbArrowBigRightLineFilled style={{ color: "#ff4646" }} />Contact Us</Link>
        </div>
        <div className={styles.info}>
          <h3>Info</h3>
          <p>
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
          </p>
        </div>
        <div className={styles.subscribe}>
            <h3>Subscribe</h3>
            <input type="text" placeholder="Enter Email" />
            <button className={styles.button}>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
