import Head from 'next/head'
import axios from "axios";
import Pizzalist from '../components/Pizzalist'
import Slider from '../components/Slider'
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home({pizzas}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Slider />
      {<AddButton setClose={setClose} />}
      <Pizzalist pizzas={pizzas} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  return{
    props: {
      pizzas: res.data
    }
  }
}
