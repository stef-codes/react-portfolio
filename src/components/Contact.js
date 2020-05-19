import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Let’s<br></br>
                <span className='amazing-color'>build!</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'>Shout out to <a href="http://chetanverma.com/">Chetan Verma</a> for the design ❤</span>
        </div>);
    }
}
 
export default Contact;