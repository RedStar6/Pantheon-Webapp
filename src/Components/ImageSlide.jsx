import React from 'react'

const ImageSlide = (props) => {
  return (
    <div className='h-full w-full brightness-70 blur-[2px]'>
        <img className='block w-full h-full object-cover'src={props.image} alt={props.desc} />
    </div>
  )
}

export default ImageSlide