import React,{useState}  from 'react'
import './Testomonial.css'
import rightArrow from '../../assets/rightArrow.png'
import leftArrow from '../../assets/leftArrow.png'
import { testimonialsData } from '../../data/testimonialsData'
const Testmonials = () => {
    const[ selected , setSelected] = useState(0);
    const tLength=testimonialsData.length;
  return (
    <div className="Testomonials" id='testimonials'>
        <div className="left-t">
            <span>Testomonials</span>
            <span className='stroke-text'>What They</span>
            <span>Say about us</span>
            <span>{testimonialsData[selected].review}</span>
            <span>
            <span style={{color:'orange'}}>{testimonialsData[selected].name}</span>
            {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img onClick={()=>{
                    selected===0
                    ? setSelected(tLength - 1)
                    : setSelected((prev)=> prev - 1); 
                }}
                 src={leftArrow} alt="" />
                <img 
                onClick={()=>{
                    selected===tLength-1
                    ? setSelected(0)
                    : setSelected((prev)=> prev + 1);
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testmonials
