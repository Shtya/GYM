import {React } from 'react'
import Logo from '../../assets/logo.png'
import bars from  '../../assets/bars.png'
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
  const func = function () {
    let icon = document.querySelector(".Nav .gear")
    let ul = document.querySelector(".Nav ul")
    let a = document.querySelectorAll(".Nav a")
    console.log(a)
    icon.onclick = function () {
      ul.classList.contains("active") ? ul.classList.remove("active") : ul.classList.add("active")
    }
  }
  useEffect(_ => func(), [])
  

  return (
    <div className='Nav'>
      <img src={Logo} alt="" />
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/Program"> Programs</Link></li>
        <li><Link to="/Why"> Why Us</Link></li>
        <li><Link to="/Plans"> Plans</Link></li>
        <li><Link to="/Testimonials"> Testimonials</Link></li>
      </ul>
      <img
        src={bars}
        className="gear" />
    </div>
  )
}

export default Nav