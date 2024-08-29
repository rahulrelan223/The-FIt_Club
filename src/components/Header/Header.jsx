import React ,{useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
const Header = () => {
  const [menuOpened,setMenuOpened] = useState(false);
  return (
    <div className='header'><img src={Logo} alt="" className='logo'/>
    <ul className='header-menu'>
        <li ><Link onClick={()=>setMenuOpened(false)}
        to='home'
        span={true}
        smooth={true}>Home</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)}
        to='program'
        span={true}
        smooth={true}>Program</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)}
        to='why-us'
        span={true}
        smooth={true}>Why Us</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)}
        to='plan'
        span={true}
        smooth={true}>Plan</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)}
        to='testimonials'
        span={true}
        smooth={true}>Testomonials</Link></li>
    </ul></div>
  )
}

export default Header
