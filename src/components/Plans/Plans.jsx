import React from 'react'
import './Plans.css'
import whitetick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'

export default function Plans() {
  return (
    <div className="plans-container">
        <div className="programs-header">
            <span className='stroke-text'>Ready To Start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>With us</span>
        </div>
        <div className="plans" id='plan'>
            {plansData.map((plan , i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature , i) => (
                            <div className="feature">
                            <img src={whitetick} alt="" />
                            <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See More Benefit = </span>
                    </div>
                    <button className="btn">Join Now</button>
                </div>
            ))}
        </div>
    </div>
  )
}
