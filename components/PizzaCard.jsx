import React from 'react'
import styles from "../styles/Pizzacard.module.css"
import Image from 'next/image'
import {TbCurrencyNaira} from 'react-icons/tb'
import Link from 'next/link'
import { useRouter } from 'next/router'

const PizzaCard = ({pizza}) => {
  const router = useRouter();
  return (
    <div onClick={()=>router.push(`/product/${pizza._id}`)} className={styles.container}>
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="250" height="250" style={{objectFit: 'cover'}} className={styles.pizzaimage} />
      </Link>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}><TbCurrencyNaira style={{fontSize: 30}} />{pizza.prices[0]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
    </div>
  )
}

export default PizzaCard