import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

import testData from '../Data/dataTestimonials'
const Testimonials = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_83azjxs', 'template_54mo2tt', form.current, 'NuQnsm_o-JAeio3Uv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const form = useRef()
  const [data, setdata] = useState(0)
  const length = testData.length
  return (
    <>
    <div className='Testimonials'>
      <div className="box1">
      <h2>Testimonials</h2>
      <div className="stroke">
        <span>What They</span> <br/><span> Say about us</span>
      </div>
      <p>{testData[data].review }</p>
      <div className="end"><span>{testData[data].name}</span><span>- {testData[data].status }</span></div>
      </div>
      <div className="box2">
        <div className="cover"><img src={testData[data].image} alt="" /></div>
        <div className="icon">
          <i
            onClick={() => {
              data === 0
              ? setdata(length - 1)
              : setdata(e => e -1)
            }}
            className="fa-solid fa-circle-chevron-left left"></i>
          <i
            onClick={() => {
              data === length -1
              ? setdata(0)
              : setdata(e => e + 1)
            }}
            className="fa-solid fa-circle-chevron-right right"></i>
        </div>
      </div>
    </div>
        <div className="Message">
        <span className="top"></span>
        <div className="start">
          <div className="text">
          <div className="stroke">
            <span>READY TO</span>
            <span>
              LEVEL UP <br />
              YOUR BODY
            </span>
            <span>WITH US?</span>
          </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="box">
            <input type="text" name="user-email" placeholder="Welcome" />
            <input type="submit" value="Message Me" />
          </form>
        </div>
      </div>
      </>
  )
}

export default Testimonials