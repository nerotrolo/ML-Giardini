import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/stylecontactscard.css'
import logo from './imgs/verde senza s.png';

class ContactsCard extends Component {
  
  render(){ 
  
    return(
      <form method="post" action='/contacts.php' id='contacts' >
        <div className='container contacts' >
          <h1 className='contattaci'>CONTATTACI PER UN PREVENTIVO</h1>

          <div className='row align-items-center rowcontacts'>
          <div className="mb-3 col-xl-4 col-xs-2 xsMod"></div>
          <div className="mb-3 col-xl-2 col-xs-4">
            <input type="email" className="form-control" id="nome" placeholder='NOME'></input>
          </div>
          <div className="mb-3 col-xl-2 col-xs-4">
            <input type="tel" className="form-control" id="cognome" placeholder='COGNOME'></input>
          </div>
          <div className="mb-3 col-xl-4 col-xs-2"></div>
          </div>

          <div className='row align-items-center rowcontacts'>
          <div className="mb-3 col-xl-4 col-xs-2 xsMod"></div>
          <div className="mb-3 col-xl-2 col-xs-4">
            <input type="email" className="form-control" id="email" placeholder='EMAIL'></input>
          </div>
          <div className="mb-3 col-xl-2 col-xs-4">
            <input type="tel" className="form-control" id="tel" placeholder='CELLULARE'></input>
          </div>
          <div className="mb-3 col-xl-4 col-xs-2"></div>
          </div>

          <div className='row align-items-center rowcontacts'>
          <div className="mb-3 col-xl-4 col-xs-2 xsMod"></div>
          <div className="mb-3 col-xl-2 col-xs-2">
            <input type="comune" className="form-control" id="comune" placeholder='COMUNE'></input>
          </div>
          <div className="mb-3 col-xl-2 col-xs-2">
            <input type="citta" className="form-control" id="citta" placeholder='CITTA'></input>
          </div>
          <div className="mb-3 col-xl-4 col-xs-2"></div>
          </div>

          <div class="row g-3 align-items-center rowcontacts">
          <div className="mb-3 col-xl-4 col-xs-2 xsMod"></div>
            <div className="mb-3 col-xl-4 col-xs-2">
              <textarea class="form-control" id="msg" rows="3" placeholder='MESSAGGIO'></textarea>
            </div>
            <div className="mb-3 col-xl-4 col-xs-2 xsMod"></div>
          </div>

          <div class="col-auto">
          <input className='btn' type="submit" value="INVIA" id="liveAlertBtn"></input>
          </div>
        </div>
      </form>
      );
    }
}

export default ContactsCard;
