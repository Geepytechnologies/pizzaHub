import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { TbCurrencyNaira } from 'react-icons/tb'
import { useEffect } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useState } from 'react'
import { useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { reset } from '../redux/cartSlice'


const Cart = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart)
  // const dispatch = useDispatch();
  const [showpaypal , setShowpaypal] = useState(false);
  const myamount = cart.total / 700;
// This values are the props in the UI
const amount = myamount.toFixed();
const currency = "USD";
const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

const createOrder = async (myorder)=>{
    try{
       const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/orders`, myorder);
       res.status === 201 && router.push('/orders/'+res.data._id);
       dispatch(reset);
    }catch(err){
      console.log(err);
    }
}
    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                        // Your code here after capture the order
                        const shipping  = details.purchase_units[0].shipping;
                        createOrder({customer: shipping.name.full_name, 
                          address: shipping.address.address_line_1,
                          total: cart.total,
                          method: 1
                        })
                        console.log(details);
                    });
                }}
            />
        </>
    );
}

const Payment = useCallback(()=>(
  <div className={styles.paypal}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AdNVFsw1SIaHp3HWeHF9HjQVwRbu0vOjIvaV-P_F4cEr81U7v3pPIp_riB295RsrmiLXirXdffa85LGX",
                    components: "buttons",
                    currency: "USD"
                }}
            >
				      <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			    </PayPalScriptProvider></div>
))
  return (
    <div className={styles.container}>
       <div className={styles.left}>
        <table className={styles.table}>
          <thead>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          {cart.pizzas.map((pizza, index) => (
          <tr key={index} className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={pizza.img}
                  fill={true}
                  style={{objectFit: 'cover', borderRadius:'50%'}}
                  sizes="200px"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{pizza.title}</span>
            </td>
            <td>
              <span className={styles.extras}>
                {
                  pizza.sauce.map((sauce, index) => (
                    <span key={index} className={styles.sauce}> {sauce.text}, </span>
                  ))
                }
              </span>
            </td>
            <td>
              <span className={styles.price}>{pizza.price}</span>
            </td>
            <td>
              <span className={styles.quantity}>{pizza.quantity}</span>
            </td>
            <td>
              <span className={styles.total}><TbCurrencyNaira style={{fontSize: 30}} />{pizza.price * pizza.quantity}</span>
            </td>
          </tr>
          ))}
          </tbody>
          
        </table>

      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:
              <div className={styles.naira}><TbCurrencyNaira style={{fontSize: 20}} /> {cart.total}
              </div>
            </b>
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:
              <div className={styles.naira}><TbCurrencyNaira style={{fontSize: 20}} /> 0.00
              </div>
            </b>
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:
              <div className={styles.naira}><TbCurrencyNaira style={{fontSize: 20}} /> {cart.total}
              </div>
            </b>
          </div>
          { showpaypal ? (<Payment />) : (
          <button onClick={()=>setShowpaypal(true)} className={styles.button}>CHECKOUT NOW!</button>)}
        </div>
      </div>
    </div>
  )
}

export default Cart