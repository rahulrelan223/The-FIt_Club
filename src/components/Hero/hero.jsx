import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import{motion} from'framer-motion'
const Hero = () => {
    const transition={type:'spring', duration:3}
  return (
    <div className="hero" id='hero'>
        <div className="blur blur-h"></div>
        <div className="left-h">
            <Header />
            <div className="the-best-ad">
                <motion className="div"
                    initial={{left:'238px'}}
                    whileinview={{left:'8px'}}
                    transition={{...transition,type:'tween'}}
                    >
                </motion>
                <span>The Best Fitness Club in Town</span>
            </div>
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>SHAPE </span>
                    <span>YOUR</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In Here We r Bodyhelp you to Shape your Body!! </span>
                </div>
            </div>
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>+900</span>
                    <span>Members</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness Programs</span>
                </div>
                
                </div>
                <div className="hero-button">
                    <buttons className="btn">Get Started</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}
             className="heart-rate">
                <img src={heart} alt=''/>
                <span>Heart Rate</span>
                <span>116 BPM</span>
            </motion.div>
            <img src={hero_image} alt='' className='hero-image'/>
            <img src={hero_image_back} alt='' className='hero-image-back'/>
            <motion.div
            initial={{right:'45rem'}}
            whileInView={{right:'35rem'}}
            transition={transition} className="calories">
                <img src={Calories} alt="" className='Calories'/>
                <span>Calories Burned</span><span>220kcal</span>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero
