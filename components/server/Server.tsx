import React from "react";
import styles from "./server.module.css";
import img from "@/images/server-img.jpg";
import Image from "next/image";

const Server = () => {
  return (
    <div className={styles.server}>
      <div>
        <Image className={styles.image} src={img} alt="Server" />
      </div>
      <div className={styles['server-info']}>
        <h3>Let us manage your server</h3>
        <p>
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore
        </p>
        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
};

export default Server;
