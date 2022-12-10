import React from 'react'
import data from "../Data/data"

const Card = () => {
  return (
    <ul className='card'>
      {data.map((e , idx) => {return (
            <div className='content' key={idx}>
          <h2>{ e.icon}</h2>
              <h4>{e.h2}</h4>
              <p>{e.p}</p>
              <button>{e.bt} <img src={e.span}/></button>
            </div>)})}
    </ul>
  )
}

export default Card