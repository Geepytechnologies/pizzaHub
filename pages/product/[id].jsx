import Image from 'next/image'
import React, { useState } from 'react'
import styles from "../../styles/Product.module.css"
import {GiFullPizza} from "react-icons/gi"
import axios from "axios"
import { TbCurrencyNaira } from 'react-icons/tb'
import { useDispatch} from "react-redux"
import { addPizza } from '../../redux/cartSlice'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

const Product = ({pizza}) => {
    const [toast, setToast] = useState(false);
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [extrasauce, setExtrasauce] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();


    const changePrice = (number)=>{
        setPrice(price + number);
    }

    const handleChange = (e, sauce)=>{
        const checked = e.target.checked;
        if (checked){
          changePrice(sauce.price)
          setExtrasauce((prev)=> [...prev, sauce])
        }else{
            changePrice(-sauce.price)
            setExtrasauce(extrasauce.filter((item)=> sauce._id !== item._id))
        }
    }
    const handleSize = (sizeindex)=>{
       const difference = pizza.prices[sizeindex] - pizza.prices[size];
       setSize(sizeindex);
       changePrice(difference);
    }
    const handlecart = ()=>{
       dispatch(addPizza({...pizza, extrasauce, quantity, price}));
       setToast(true);
    }
  return (
    <>
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgcontainer}>
                <Image src={pizza.img} alt="" fill={true} style={{objectFit:'cover'}}  className={styles.image}  />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}><TbCurrencyNaira style={{fontSize: 30}} />{price}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose your Pizza size</h3>
            <div className={styles.sizes}>
                <div onClick={()=>handleSize(0)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>small</span>
                </div>
                <div onClick={()=>handleSize(1)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>Medium</span>
                </div>
                <div onClick={()=>handleSize(2)} className={styles.size}>
                  <GiFullPizza className={styles.icon} />
                  <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose Sauce</h3>
            <div className={styles.types}>
                {
                    pizza.sauce.map((sauce, index)=>(
                        <div key={index} className={styles.option}>
                            <input type="checkbox" id={sauce.text} name={sauce.text} className={styles.checkbox} onChange={(e)=>handleChange(e, sauce)} />
                            <label htmlFor={sauce.text}>{sauce.text}</label>
                        </div>
                    ))
                }
            </div>
                <div className={styles.add}>
                   <input type="number" defaultValue={1} className={styles.quantity} onChange={(e)=>setQuantity(e.target.value)} />
                   <button onClick={handlecart} className={styles.button}>
                    Add to cart
                   </button>
                </div>
        </div>
    </div>
        {/* toast */}
        {toast && <div className='wrapper fade-in'><div className='toast'>
          <AiFillCheckCircle className='toast-icon' style={{marginLeft: "10px"}} />
          <div className='toasttext'>Your Item has been added to the cart</div>
          <AiFillCloseCircle onClick={()=>setToast(false)} className='toast-icon' style={{cursor: "pointer"}} />
        </div></div>}
    </>
  )
}

export const getServerSideProps = async ({params}) =>{
    const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products/${params.id}`);
    return{
      props: {
        pizza: res.data
      }
    }
  }

export default Product