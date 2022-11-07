import React from 'react'
import styles from "../styles/Pizzacard.module.css"
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/images/pizzabg1.jpg" alt="" width="300" height="300" style={{objectFit: 'cover'}} />
        <h1 className={styles.title}>Neapolitan Pizza</h1>
        <span className={styles.price}>$18</span>
        <p className={styles.desc}>Neapolitan pizza has a thin, crispy yet fluffy light crust</p>
    </div>
  )
}

export default PizzaCard