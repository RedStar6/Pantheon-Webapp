import { ArrowLeftOutlined } from '@mui/icons-material'
import React from 'react'
import Images from '../../Images'
import ImageSlide from './ImageSlide'

const Hero = () => {
    const [imageArray,setImageArray] = React.useState(Images)
    console.log(imageArray)
    const [image,setImage] = React.useState(imageArray[0])

    const handleNextSlider = () => {
        //Find the current image index
        let currentImageIndex = imageArray.findIndex((current) =>  current === image)
        //Check if the current image index is the last image in the array:
        // if yes assign -1 or keep the current image index
        let imageIndex = currentImageIndex === (imageArray.length -1) 
        ? -1 : currentImageIndex
        
        //updating the current image to the next image in the Array
        setImage(imageArray[imageIndex + 1])
    }
    const handlePrevSlider = () => {
        //Find the current image index
        let currentImageIndex = imageArray.findIndex((current) =>  current === image)
        //Check if the current image index is the first image in the array:
        // if yes assign -1 or keep the current image index
        let imageIndex = currentImageIndex === 0 
        ? 3 : currentImageIndex
        
        //updating the current image to the next image in the Array
        setImage(imageArray[imageIndex - 1])
    }
    const handleClick = (id) => {
      setImage(imageArray[id-1])
    }
    
  return (
    <div>
      <div className='h-[500px] w-full relative'>
        <span onClick={handlePrevSlider} className=' h-full w-[10rem]  absolute z-[1] grid place-content-center top-0 left-0 blur-md hover:bg-black opacity-30 cursor-pointer'><ArrowLeftOutlined></ArrowLeftOutlined></span>
        <ImageSlide image={image} desc='just a description' />
        <span onClick={handleNextSlider} className=' h-full w-[10rem] bg-transparent absolute z-[1] grid place-content-center right-0 top-0 blur-md hover:bg-black opacity-30  cursor-pointer'><ArrowLeftOutlined></ArrowLeftOutlined></span>
      </div>
      <div className='flex w-full h-fit justify-center py-6'>
        <div className=' w-12 h-5 flex flex-row justify-between'>
            <div onClick={() => handleClick(1)}className='bg-white w-3 h-3 rounded-md cursor-pointer'></div>
            <div onClick={() => handleClick(2)}className='bg-white w-3 h-3 rounded-md cursor-pointer'></div>
            <div onClick={() => handleClick(3)}className='bg-white w-3 h-3 rounded-md cursor-pointer'></div>
        </div>
    </div>
    </div>
  )
}

export default Hero