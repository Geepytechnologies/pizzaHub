import Head from 'next/head'
import axios from "axios";
import Pizzalist from '../components/Pizzalist'
import Slider from '../components/Slider'
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Home({pizzas,admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Slider />
      {admin && <AddButton setClose={setClose} />}
      <Pizzalist pizzas={pizzas} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) =>{
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  return{
    props: {
      pizzas: res.data,
      admin
    }
  }
}
