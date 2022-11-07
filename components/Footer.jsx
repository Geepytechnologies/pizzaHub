import Image from 'next/image';
import React from 'react'
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/images/bgpizza.jpg" alt="dinner table" style={{objectFit: 'cover'}} fill={true} />
      </div>
      <div className={styles.item}>
        <div className={styles.itemcard}>
          <h2 className={styles.motto}>
          It's not just pizza, it's an experience
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
          WORKING HOURS
          </h1>
          <p className={styles.text}>MONDAY UNTIL FRIDAY <br /> 8:00 - 20:00</p>
          <p className={styles.text}>SATURDAY - SUNDAY <br /> 8:00 - 20:00</p>
        </div>
      </div>
    </div>
  )
}

export default Footer