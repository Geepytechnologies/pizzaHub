import React, { useState } from 'react'
import styles from "../styles/Slider.module.css"
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill} from "react-icons/bs"
import Image from 'next/image'

const Slider = () => {
    const [index, setIndex] = useState(0);
    const images = [
        "/images/featuredcopy.png",
        "/images/featured2copy.png",
        "/images/featured3copy.png",
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
                <Image src={img} className={styles.image} alt="PizzaImage" fill={true} style={{objectFit: 'contain'}} placeholder='blur' blurDataURL={img} />
         </div>
            ))
           }
       </div>
       <BsFillArrowRightCircleFill onClick={()=>handleArrow('right')} className={styles.arrowright} /> 
    </div>
  )
}

export default Slider