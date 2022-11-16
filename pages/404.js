import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
  return (
    <div className='container'>
        <Image src={'/images/404.jpg'} alt="" width="700" height="400" style={{objectFit: 'cover'}} className="image404" />
        <div className='text'>
            <p className='title'>Oops!!! The Page you are looking For Cannot be Found</p>
            <button className='button' onClick={()=>router.push('/')}>Go Back to Homepage</button>
        </div>
    </div>
  )
}

export default Index;