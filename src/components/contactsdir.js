import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/stylecontactsdir.css'

import wa from './imgs/whatsapp-logo_icon-icons.com_57054.png'
import tel from './imgs/phone.png'
import email from './imgs/email.png'

class ContactsDir extends Component {
  
  render(){ 
    return(
        <div className='ContactsDir' id='contacts'>
            <h1 className='contattaci'>CONTATTACI PER UN PREVENTIVO</h1>
           <div className="row meno">
            <div className="col-sm-4 mb-3 mb-sm-0">
                <div>
                    <a href="https://api.whatsapp.com/send?phone=3349249900" className='row carta-icons'>
                        <div className='col-5'>
                            <img className='icons-contacts centra' src={wa}></img>
                        </div>
                        <div className='col-7'>
                            <p className='descr-icona-cont '><u>Scrivimi su WhatsApp</u></p>
                        </div>
                    </a>
                </div>
            </div>
        
            <div className="col-sm-4">
               <div>
                    <a href="tel:+393349249900" className='row carta-icons'>
                        <div className='col-5'>
                            <img className='icons-contacts centra' src={tel}></img>
                        </div>
                        <div className='col-7'>
                            <p className='descr-icona-cont '><u>+39 3349249900</u></p>
                        </div>
                    </a>
                </div>
                    
                
            </div>
            <div className="col-sm-4">
                <div>
                    <a href="mailto:mattialandigiardini@gmail.com" className='row carta-icons'>
                        <div className='col-5'>
                            <img className='icons-contacts centra' src={email}></img>
                        </div>
                        <div className='col-7'>
                            <p className='descr-icona-cont '><u>Contattami per email</u></p>
                        </div>
                    </a>
                </div>
                    
                
            </div>
           </div>
       </div>
    )
    }
}

export default ContactsDir;
