import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/navbar';
import Banner from './components/banner';
import Presentazione from './components/presentazione';

import Footer from './components/footer';
import Cards2 from './components/cards2';
import ContactsCard from './components/contactscard';
import ContactsDir from './components/contactsdir';

import leaf from './components/imgs/spring_leaf_plant_nature_leaves_garden_environment_icon_133207.png';
import plant from './components/imgs/spring_sprout_plant_garden_growth_leaves_seedling_icon_133206.png';
import flower from './components/imgs/spring_plant_flower_leaves_garden_nature_pot_icon_133218.png';
import tree from './components/imgs/spring_tree_plant_garden_nature_wood_forest_icon_133217.png';
import g1 from './components/imgs/g1.jpg';
import g2 from './components/imgs/g2.jpg';
import g3 from './components/imgs/g3.jpg';

import t1 from './components/imgs/t1.jpg';
import t2 from './components/imgs/t2.jpg';
import t3 from './components/imgs/t3.jpg';

import p1 from './components/imgs/p1.jpg';
import p2 from './components/imgs/p2.jpg';
import p3 from './components/imgs/p3.jpg';

import f1 from './components/imgs/f1.jpg';
import f2 from './components/imgs/f2.jpg';
import f3 from './components/imgs/f3.jpg';

class App extends Component {

render(){ 

  //  CARD RESPONSIVE
var mediaQueryMobile = window.matchMedia("(max-width: 576px)")
var mediaQueryDesktop = window.matchMedia("(min-width: 768px)")

var responsiveMobile='';

function cardResponsive(mediaQueryMobile, mediaQueryDesktop){
  if(mediaQueryMobile.matches){
    // se mobile
    responsiveMobile= '300px';
  }
  // se desktop
  else if(mediaQueryDesktop.matches){
    responsiveMobile= '700px';
  }
}
 cardResponsive(mediaQueryMobile, mediaQueryDesktop);


  return(
    <>
    <Navbar/>
    <Banner/>
    <Presentazione
    marginTop={responsiveMobile}
    />
    <Cards2
    immagine={leaf}
    titolo='Giardini'
    descrizione='Ti aiutiamo a gestire lo spazio, a scegliere la pianta più adatta alla tua idea nel rispetto dell’ecosistema circostante'
    bsname='#giardini'
    idname='giardini'
    sfondoDinamico='#2C380B'
    carosello1={g1}
    carosello2={g2}
    carosello3={g3}
    TitoloCards='Giardini impeccabili, estetica curata.'
    DescrizioneCards='I vostri giardini curati con passione e precisione, dove ogni dettaglio riflette l’amore per la natura e il design.'
    />
    <Cards2
    immagine={tree}
    titolo='Tree Climbing'
    descrizione='Ti aiutiamo a gestire lo spazio, a scegliere la pianta più adatta alla tua idea nel rispetto dell’ecosistema circostante'
    bsname='#tree'
    idname='tree'
    sfondoDinamico='#36450D'
    carosello1={t1}
    carosello2={t2}
    carosello3={t3}
    TitoloCards='Tree climbing professionale, servizio specializzato.'
    DescrizioneCards='Emozionanti avventure sospese tra gli alberi con il tree climbing, una esperienza unica per avvicinarsi alla natura.'
    />
    <Cards2
    immagine={plant}
    titolo='Piante'
    descrizione='Ti aiutiamo a gestire lo spazio, a scegliere la pianta più adatta alla tua idea nel rispetto dell’ecosistema circostante'
    bsname='#piante'
    idname='piante'
    sfondoDinamico='#3D4E0F'
    carosello1={p1}
    carosello2={p2}
    carosello3={p3}
    TitoloCards='Piante rigogliose, salute garantita.'
    DescrizioneCards='Piante rigogliose e vitali, coccolate con cure specializzate per garantire la loro salute e vitalità.'
    />
    <Cards2
    immagine={flower}
    titolo='Fiori'
    descrizione='Ti aiutiamo a gestire lo spazio, a scegliere la pianta più adatta alla tua idea nel rispetto dell’ecosistema circostante'
    bsname='#fiori'
    idname='fiori'
    sfondoDinamico='#435610'
    carosello1={f1}
    carosello2={f2}
    carosello3={f3}
    TitoloCards='Fiori colorati, profumi incantevoli.'
    DescrizioneCards='Fiori che incantano con la loro bellezza e profumi delicati, donando un tocco di colore e allegria al tuo giardino.'
    />
    {/* <ContactsCard/> */}
    <ContactsDir/>
    <Footer/>
    </>
  );
}
}

export default App;
