import React from 'react'
import Plan from '../Data/DataPlans'
const Plans = () => {

  return (
    <div className='Plans'>
      <div className="stroke"><span>Ready to start</span><span>Your journey</span><span> Now Withus</span></div>
      <div className="boxs">
        <div className="blur"></div>
        {Plan.map((e , idx) => {
          return (
            <div className="box" key={idx}>
              <i className={e.i}></i>
              <h2>{e.h2}</h2>
              <p>{e.number}</p>
              <ul>
                <li>{ e.li_1}</li>
                <li>{ e.li_2}</li>
                <li>{ e.li_3}</li>
              </ul>
              <div className={`e${idx + 1} blur`}></div>

              <div className="more">{e.more}</div>
              <button>{ e.button}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans