import Head from 'next/head'
import axios from "axios";
import Pizzalist from '../components/Pizzalist'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home({pizzas}) {
  return (
    <div className={styles.container}>
      <Slider />
      <Pizzalist pizzas={pizzas} />
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get(`${process.env.URL}/api/products`);
  return{
    props: {
      pizzas: res.data
    }
  }
}
