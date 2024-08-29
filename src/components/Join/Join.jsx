import React ,{useRef} from 'react'
import emailjs from '@emailjs/browser'
import './Join.css'
const Join = () => {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wch1w4g', 'template_nybqtji', form.current, {
            publicKey: 'Ya96yDiA6CdWLKo-l1',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span> YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user email' placeholder='Enter Your Email' />
                <button className="btn btn-j">Join Now</button>           
            </form>
        </div>
    </div>
  )
}
export default Join
