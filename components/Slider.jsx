import React, { useState } from 'react'
import styles from "../styles/Slider.module.css"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"
import Image from 'next/image'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/images/pizzabg1.jpg",
        "/images/pizzabg2.jpg",
        "/images/pizzabg3.jpg",
    ]
    const handleArrow = (direction) =>{
        if(direction === 'left'){
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if(direction === 'right'){
            setIndex(index !== 2 ? index + 1 : 0)
        }
    }
    
  return (
    <div className={styles.container}>
       <BsFillArrowLeftCircleFill onClick={()=>handleArrow('left')} className={styles.arrowleft} />
       <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)` }}>
           {
               images.map((img, index)=>(
                <div key={index} className={styles.imgcontainer}>
                <Image src={img} className={styles.image} alt="" fill={true} style={{objectFit: 'cover'}} placeholder='blur' blurDataURL={img} />
                {index == 0 ? <h2 className={styles.imgtext}><span className={styles.more}>MORE </span>THAN JUST A PIZZA</h2> : index == 1 ? <h2 className={styles.imgtext}><span className={styles.more}>LUNCH </span>SPECIALS</h2> : index == 2 ? <h2 className={styles.imgtext}><span className={styles.more}>PIZZA </span>DONE RIGHT</h2> : null}
         </div>
            ))
           }
       </div>
       <BsFillArrowRightCircleFill onClick={()=>handleArrow('right')} className={styles.arrowright} /> 
    </div>
  )
}

export default Slider