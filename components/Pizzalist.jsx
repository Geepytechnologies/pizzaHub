import React from 'react'
import styles from "../styles/Pizzalist.module.css";
import PizzaCard from './PizzaCard';

const Pizzalist = ({pizzas}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best Pizza in Town</h1>
        <p className={styles.desc}>PizzaHub is one of Africa&apos;s finest when it comes to giving you a good Pizza Treat. Located in the popular city of Lagos, Nigeria.</p>
        <div className={styles.wrapper}>
          {pizzas.map((pizza)=>(
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))
          }
        </div>
    </div>
  )
}

export default Pizzalist