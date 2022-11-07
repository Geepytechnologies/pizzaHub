import React from 'react'
import styles from '../styles/Navbar.module.css'
import {BsTelephone} from "react-icons/bs"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className={styles.container}>
       <div className={styles.bar}>
        <div className={styles.barLeft}>
            <BsTelephone className={styles.telephone} />
        </div>
        <div className={styles.textcon}>
          <div className={styles.order}>Order Now</div>
          <div className={styles.number}>01 762 4368</div>
        </div>
       </div>
       <div className={styles.bar}>
         <ul className={styles.list}>
            <li className={styles.listitem}>Home</li>
            <li className={styles.listitem}>Menu</li>
            <p className={styles.logo}>Pizza Hub</p>
            <li className={styles.listitem}>Contact</li>
            <li className={styles.listitem}>Blog</li>
         </ul>
        </div>
       <div className={styles.bar}>
        <div className={styles.cart}>
            <AiOutlineShoppingCart className={styles.cartlogo} />
            <div className={styles.cartnum}>2</div>
        </div>
        </div>
    </div>
  )
}

export default Navbar