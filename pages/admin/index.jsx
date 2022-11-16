import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { GiFullPizza } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from "../../styles/Admin.module.css";

const Index = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  const [modal, setModal] = useState(false);
  const [modalid, setModalid] = useState(2);
  console.log(orderList);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_URL}/api/products` + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleModal = (id) => {
   setModalid(id);
   setModal(true);
  }

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/orders` + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="con">
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th className="tableid">Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt=""
                  />
                </td>
                <td className="tableid">{product._id.slice(0, 5)}...</td>
                <td className={styles.titletext}>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th className="total-h">Total</th>
              <th className="method-h">Payment</th>
              <th className="status-h">Status</th>
              <th>Action</th>
              <th className="eye-h">See more</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td className={styles.titletext}>{order.customer}</td>
                <td className="total">${order.total}</td>
                <td className="method">
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td className="status">{status[order.status]}</td>
                <td>
                  <button className={styles.button} onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
                <td className="eye">
                  <AiFillEye style={{fontSize: 20}} onClick={() => handleModal(order._id)}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
    {modal && <div onClick={()=>setModal(false)} className="order-con">
    {orderList.filter((order) => order._id === modalid).map((order, index)=>(
    <div key={index} className="order-modal">
      <div className="order-items">
        <div>
           <h2 className={styles.logo}><GiFullPizza style={{fill: "#b7903c"}} />Pizza Hub</h2>
        </div>
        <p className="detailstitle">More details</p>
        <p>Payment: {order.method === 0 ? <span>cash</span> : <span>paid</span>}</p>
        <p>Order Status: {status[order.status]}</p>
        <p className="totalprice">Total Price : <TbCurrencyNaira style={{marginRight: 2, fontSize: 25}} />{order.total}</p>
      </div>
    </div>
))}
  </div>}
  </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/products`);
  const orderRes = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/orders`);

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Index;