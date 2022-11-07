import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../styles/Product.module.css"
import {GiFullPizza} from "react-icons/gi"

const Product = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id:1,
        img: "/images/pizza.png",
        name: "Neapolitan Pizza",
        price: [10.00, 20.00,30.00],
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgcontainer}>
                <Image src="/images/bgpizza.jpg" alt="" fill={true} style={{objectFit:'cover'}} />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>${pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose your Pizza size</h3>
            <div className={styles.sizes}>
                <div onClick={()=>setSize(0)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>small</span>
                </div>
                <div onClick={()=>setSize(1)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>Medium</span>
                </div>
                <div onClick={()=>setSize(2)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose type</h3>
            <div className={styles.types}>
                <div className={styles.option}>
                    <input type="checkbox" id="tomato" name="tomato" className={styles.checkbox} />
                    <label htmlFor='tomato'>Tomato Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="pepper" name="pepper" className={styles.checkbox} />
                    <label htmlFor='pepper'>Pepper Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="pasta" name="pasta" className={styles.checkbox} />
                    <label htmlFor='pasta'>Pasta Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="salsa" name="salsa" className={styles.checkbox} />
                    <label htmlFor='salsa'>Salsa</label>
                </div>
            </div>
                <div className={styles.add}>
                   <input type="number" defaultValue={1} className={styles.quantity} />
                   <button className={styles.button}>
                    Add to cart
                   </button>
                </div>
        </div>
    </div>
  )
}

export default Product