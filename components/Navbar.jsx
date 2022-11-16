import React, { useRef } from 'react'
import styles from '../styles/Navbar.module.css'
import {BsTelephone} from "react-icons/bs"
import {AiOutlineCloseCircle, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from "react-redux"

const Navbar = () => {
  const router = useRouter()
  const open = useRef();
  const close = useRef();
  const menu = useRef();

  const openmenu = ()=>{
    open.current.style.display = "none";
    menu.current.style.maxHeight = "200px";
    close.current.style.display = "flex";
  }
  const closemenu = ()=>{
    open.current.style.display = "flex";
    menu.current.style.maxHeight = "0px";
    close.current.style.display = "none";
  }
  const quantity = useSelector(state => state.cart.cartquantity)
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.bar}>
          <div className={styles.barLeft}>
              <BsTelephone className={styles.telephone} />
          </div>
          <div className={styles.textcon}>
            <div className={styles.order}>Order Now</div>
            <div className={styles.number}>+234 702 436 8614</div>
          </div>
        </div>
        <div className={styles.bar}>
          <ul className={styles.list}>
              <li onClick={()=>router.push('/')} className={styles.listitem}>Home</li>
              <li className={styles.listitem}>Menu</li>
              <p onClick={()=>router.push('/')} className={styles.logo}>Pizza Hub</p>
              <li className={styles.listitem}>Contact</li>
              <li className={styles.listitem}>Blog</li>
          </ul>
        </div>
          <Link href={'/cart'} passHref>
          <div className={styles.bar}>
            <div className={styles.cart}>
                <AiOutlineShoppingCart className={styles.cartlogo} />
                <div className={styles.cartnum}>{quantity}</div>
            </div>
          </div>
          </Link>
          <div className={styles.menu}>
            <div onClick={openmenu} ref={open} className={styles.menulogo}>
              <AiOutlineMenu  />
            </div>
            <div onClick={closemenu} ref={close} className={styles.closelogo}>
              <AiOutlineCloseCircle  />
            </div>
          </div>
      </div>
      <div ref={menu} className={styles.sidenav}>
          <ul className={styles.list2}>
              <Link href={'/'}><li className={styles.listitem}>Home</li></Link>
              <li className={styles.listitem}>Menu</li>
              <li className={styles.listitem}>Contact</li>
              <li className={styles.listitem}>Blog</li>
          </ul>
      </div>
    </div>
  )
}

export default Navbar