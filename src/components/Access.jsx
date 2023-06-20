import React from 'react';
import Image from '../images/Image';

const Access = () => {
  return (
    <section className='section-container'>
       <h3>
       Access Clipboard Anywhere
       </h3>
       <p className="section-content text-xl m-20">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <Image name="imageDevices" classes="mx-auto"/>
    </section>
  )
}

export default Access;