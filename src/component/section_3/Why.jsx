import React from 'react'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import adidas from "../../assets/adidas.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/tick.png"


const Why = () => {
  return (
    <div className='Why' id='Why'>
      <div className="Why-left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="Why-right">
        <h2>Some Reasons</h2>
        <h3><span>Why</span> <span>Choose us ? </span></h3>
        <ul>
          <li>OVER 140+ EXPERT COACHS</li>
          <li>TRAIN SMARTER AND FASTER THAN BEFORE</li>
          <li>1 FREE PROGRAM FOR NEW MEMBER</li>
          <li>RELIABLE PARTNERS</li>
        </ul>
        <p>our partnes</p>
        <div className="box">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Why