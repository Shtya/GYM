import React from 'react'
import calories from '../../assets/calories.png'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
const Landing = () => {
  return (
    <div className='Landing'>
      <div className="blur" ></div>
      <div className="box-left">
        <div className="progress">the Best Fitness Club in The Town <span></span></div>
        <h2 className='shap'><span>Shape</span> Your <br/> Ideal Body</h2>
        <p>in here we will help you to Shape and build your ideal body and live up your life to fullest</p>
        <div className="box1">
          <div className="content">
          <h3>+140 <span>Expert coaches</span></h3>
          <h3>+978 <span>Members</span></h3>
          <h3>+50 <span> Fitness Programs</span></h3>
          </div>
          <div className="calories">
            <img src={calories} alt="" />
            <h2>Caiorles burned <span>220 Kcal</span></h2>
          </div>
        </div>
      </div>
      <div className="box-right">
        <div className="box-img">
        <img className='img' src={hero_image} alt="" />
        <img className='img1' src= {hero_image_back} alt="" />
        </div>
        <div className="box">
          <img src={Heart} alt="" />
          <h2>Heart Rate</h2>
          <p>116 bpm</p>
        </div> 
      </div>
      
    </div>
  )
}

export default Landing