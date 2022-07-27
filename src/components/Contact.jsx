
import { contact } from '../data';

import '../styles/contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
        <div className='contact-div1'>
            <div className='contact-div2'>
                <h1 className='contact-h1'> Contact </h1>
                <h2 className='contact-h2'>Contact me</h2>
                <p className='contact-p'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro ad iste, atque harum reiciendis, voluptate, in cum esse consequatur explicabo unde repellat eaque perferendis sunt corporis commodi inventore eius!
                </p>
            </div>

            <div className='contact-div3'>
                <div className='contact-div4'>
                    {contact.map((item, index) => {
                        const { icon, title, subtitle, description} = item;
                        return (<div key={index} className='contact-item'>
                            <div className='contact-item-icon'> {icon} </div>
                            <div className='contact-item-info'>
                                <h4 className='contact-info-title'> {title} </h4>
                                <p className='contact-info-subtitle'> {subtitle} </p>
                                <p className='contact-info-desc'>{description} </p>
                            </div>
                        </div>
                        );
                    })}
                </div>

                {/* <form className='contact-form'>
                    <div className='form-div1'>
                        <input className='form-input' type='text' placeholder='Your name'/>
                        <input className='form-input' type='text' placeholder='Your email'/>
                    </div>
                    <input className='form-input-sub' type='text' placeholder='Subject'/>
                    <textarea className='form-textarea' placeholder='Your message'></textarea>
                    <button className='form-btn'>Send message</button>
                </form> */}

            </div>

        </div>
    </section>
  )
}

export default Contact;