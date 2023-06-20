import React from 'react';
import Image from '../images/Image';

const References = () => {
  return (
    <section className='section-container my-20'>      
      <div
    className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
  >

    <Image name="google"/>
    <Image name="ibm"/>
    <Image name="microsoft"/>
    <Image name="hp"/>
    <Image name="vectorGraphics"/>

  </div></section>
  )
}

export default References;