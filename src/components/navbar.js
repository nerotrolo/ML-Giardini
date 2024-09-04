import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/stylenavbar.css'
import logo from './imgs/verde senza s.png';


class Navbar extends Component {
  scrollContacts = () => {
    const contactsElement = document.getElementById('contacts');
    if (contactsElement) {
      contactsElement.scrollIntoView();
    }
  };

  scrollHome = () => {
    const homeElement = document.getElementById('videoFiore');
    if (homeElement) {
      homeElement.scrollIntoView();
    }
  };

  render(){    
    return(
          <nav className="navbar fixed-top navtot">
            <div className="container-fluid">
              <img src={logo} alt="Logo" className='logo' onClick={this.scrollHome}></img>
            </div>
            <div className='btn-contatti'> 
              <button type="button" className="btn btn-dark"  onClick={this.scrollContacts}>CONTATTA</button>
            </div>
          </nav>
      );
    }
}

export default Navbar;

