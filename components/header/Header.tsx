'use client'
import Link from 'next/link'
import styles from './header.module.css'
import './header.css'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [attr, setAttr] = useState<string>('block')
  const [attr2, setAttr2] = useState<string>('none')

  const handleOpen = () =>{
    setAttr(isOpen? 'block' : 'none')
    setAttr2(isOpen? 'none' : 'block')
    setIsOpen(!isOpen)
  }
  return (
    <div>
    <div className={styles.container}>
        <h1 className={styles.logo}>HOSTIT</h1>
        <ul className={styles.nav}>
            <Link href={'/'}> <li>HOME</li> </Link>
            <Link href={'#about'}> <li>ABOUT</li> </Link>
            <Link href={'#service'}> <li>SERVICES</li> </Link>
            <Link href={'#pricing'}> <li>PRICING</li> </Link>
            <Link href={'#contact'}> <li>CONTACT US</li> </Link>
        </ul>
        <IoMdMenu className={`${styles.menu} ${attr}`}  onClick={handleOpen}/>
        <RxCross2 className={`${styles.cross} ${attr2}`}  onClick={handleOpen}/>

    </div>
    <nav className={`${attr2}`}>
      <Link href={''}> <li>HOME</li> </Link>
      <Link href={'#about'}> <li>ABOUT</li> </Link>
      <Link href={'#service'}> <li>SERVICES</li> </Link>
      <Link href={'#pricing'}> <li>PRICING</li> </Link>
      <Link href={'#contact'}> <li>CONTACT US</li> </Link>
    </nav>
    </div>
  )
}

export default Header