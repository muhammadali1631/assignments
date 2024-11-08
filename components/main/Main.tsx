import React from 'react'
import Image from 'next/image'
import styles from './main.module.css'
import img from '@/images/slider-img.png'
const Main = () => {
  return (
    <div className={styles.container}>
        <div className={styles.info}>
            <h1 >Fast & Secure <br />Web Hosting</h1>
            <p>Anything embarrassing hidden in the middle of text. All the Lorem Ipsuanything embarrassing hidden in the middle of text. All the Lorem Ipsumm</p>
            <div className={styles.buttons}>
                <button className={`${styles.button1} ${styles.button}`}>Read More</button>
                <button className={`${styles.button2} ${styles.button}`}>Contact Us</button>
            </div>
        </div>
        <div>
            <Image className={styles.image} src={img} alt=''/>
        </div>
    </div>
  )
}

export default Main