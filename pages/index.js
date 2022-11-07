import Head from 'next/head'
import Image from 'next/image'
import Pizzalist from '../components/Pizzalist'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Slider />
      <Pizzalist />
    </div>
  )
}
