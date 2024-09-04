import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './style/stylepresentazione.css'


class Presentazione extends Component {
  render(){    
    const margineTop = {
        marginTop: this.props.marginTop
      };      

    return(
        <div className='carte presentazione' style={margineTop}>
            <h1 className='titML'>ML GIARDINI</h1>
            <p className='sonoML'>Sono Mattia Landi, giardiniere di Firenze, mi occupo di realizzazione e manutenzione di giardini, per privati e condomini.
                Sono specializzato nella potatura ed abbattimento di piante e alberi, anche di grandi dimensioni, facendo uso di strumentazioni professionali, implementando la tecnica del Tree Climbing.
                Svolgo la mia attività a Firenze e provincia, ma sono disponibile a valutare interventi anche in altre zone geografiche.
            </p>
            <h3 className='servML'>SERVIZI<div className='freccia'>→</div></h3>
        </div>
    )
  }
}

export default Presentazione;
