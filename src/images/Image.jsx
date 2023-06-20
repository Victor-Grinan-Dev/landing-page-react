import React from 'react';
import blacklist from './icon-blacklist.svg';
import facebook from './icon-facebook.svg';
import instagram from './icon-instagram.svg';
import preview from './icon-preview.svg';
import text from './icon-text.svg';
import twitter from './icon-twitter.svg';
import google from './logo-google.png';
import hp from './logo-hp.png';
import ibm from './logo-ibm.png';
import microsoft from './logo-microsoft.png';
import vectorGraphics from './logo-vector-graphics.png';
import imageDevices from'./image-devices.png';
import imageComputer from'./image-computer.png';
import logo from './logo.svg'

const images = {
    blacklist:blacklist,
    facebook:facebook,
    instagram:instagram,
    preview:preview,
    text:text,
    twitter:twitter,
    google:google,
    hp:hp,
    ibm:ibm,
    microsoft:microsoft,
    vectorGraphics:vectorGraphics,
    imageDevices:imageDevices,
    imageComputer:imageComputer,
    logo:logo,
}

const Image = (props) => {
    const {name, classes} = props;
  return (
    <img src={images[name]} className={classes} alt="selected img" />
  )
}

export default Image;