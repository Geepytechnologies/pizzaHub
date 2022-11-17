import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    const mystyle = {
      position: "relative",
      width: "100%",
      height: "400px"
    }
    const title = {
        paddingLeft: 10
    }
  return (
    <div className='container'>
        <div style={{...mystyle}}>
        <Image src={'/images/404.jpg'} alt="" fill={true} style={{objectFit: 'cover'}} className="image404" />
        </div>
        <div className='text'>
            <p className='title'>Oops!!! The Page you are looking For Cannot be Found</p>
            <button className='button' onClick={()=>router.push('/')}>Go Back to Homepage</button>
        </div>
    </div>
  )
}

export default Index;