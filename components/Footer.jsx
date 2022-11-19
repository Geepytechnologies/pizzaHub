import Image from 'next/image';
import React from 'react'
import { GiFullPizza } from 'react-icons/gi';
import styles from "../styles/Footer.module.css";
import { useRouter } from 'next/router';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Image src="/images/bgpizza.jpg" alt="dinner table" style={{objectFit: 'cover'}} fill={true} />
      </div>
      <div className={styles.item}>
        <div className={styles.itemcardlogo}>
          <h2 onClick={()=>router.push('/')} className={styles.logo}><GiFullPizza style={{fill: "#b7903c"}} /></h2>
          <h2 className={styles.motto}>
          It&apos;s not just pizza, it&apos;s an experience
          </h2>
        </div>
        <div className={styles.itemcard}>
          <h1 className={styles.title}>
          Our Branches
          </h1>
          <p className={styles.text}>Victoria Island, <br/> Lagos <br /> (+234) 361-4444</p>
          <p className={styles.text}>Ikeja, <br/> Lagos <br /> (+234) 415-6192</p>
          <p className={styles.text}>Lekki Phase One, <br/> Lagos <br /> (+234) 361-2222</p>
        </div>
        <div className={styles.itemcard}>
          <h1 className={styles.title}>
          Working Hours
          </h1>
          <p className={styles.text}>Monday Until Friday <br /> 8:00 - 20:00</p>
          <p className={styles.text}>Saturday - Sunday <br /> 8:00 - 20:00</p>
        </div>
      </div>
    </div>
      <div className={styles.watermark}>
        <p className={styles.watertext}>Made with <AiFillHeart className={styles.waterlogo}/> By Geepy</p>
      </div>
    </div>
  )
}

export default Footer