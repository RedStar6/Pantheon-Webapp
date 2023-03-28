import React from 'react'
import Images from '../../Images'

const Hero = () => {
    const [imageArray,setImageArray] = React.useState(Images)
    console.log(imageArray)
    const [image,setImage] = React.useState(imageArray[0])

    const handleClick = () => {
        let currentImageIndex = (imageArray.findIndex((current) =>  current === image)) === (imageArray.length -1) 
        ? -1 : 
        imageArray.findIndex((current) =>  current === image)

        setImage(imageArray[currentImageIndex + 1])
    }
    
  return (
    <div className='relative'>
        <img src={image} onClick={handleClick}/>
        <div className=' w-12 h-5 flex flex-row justify-between absolute top-2'>
            <div className='bg-white w-3 h-3 rounded-md'></div>
            <div className='bg-white w-3 h-3 rounded-md'></div>
            <div className='bg-white w-3 h-3 rounded-md'></div>
        </div>
    </div>
  )
}

export default Hero