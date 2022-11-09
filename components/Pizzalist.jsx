import React from 'react'
import styles from "../styles/Pizzalist.module.css";
import PizzaCard from './PizzaCard';

const Pizzalist = ({pizzas}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Best Pizza in Town</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti quam non aut magnam in odio quidem consequuntur repellendus nihil.</p>
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