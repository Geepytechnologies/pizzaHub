import Image from 'next/image'
import React from 'react'
import styles from "../styles/Cart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { TbCurrencyNaira } from 'react-icons/tb'

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
       <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Ingredients</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
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
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default Cart