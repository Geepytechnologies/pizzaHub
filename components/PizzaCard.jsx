import React from 'react'
import styles from "../styles/Pizzacard.module.css"
import Image from 'next/image'
import {TbCurrencyNaira} from 'react-icons/tb'
import Link from 'next/link'

const PizzaCard = ({pizza}) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="300" height="300" style={{objectFit: 'cover'}} />
      </Link>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}><TbCurrencyNaira style={{fontSize: 30}} />{pizza.prices[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard