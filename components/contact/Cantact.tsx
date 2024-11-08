import React from 'react'
import styles from './contact.module.css'
const Cantact = () => {
  return (
    <div className={styles.contact} id='contact'>
        <h1>Get In Touch</h1>
        <div className={styles.container}>
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="text" placeholder='Your Phone' />
        <textarea placeholder='Message'></textarea>
        <button className={styles.button}>SEND</button>
        </div>
    </div>
  )
}

export default Cantact