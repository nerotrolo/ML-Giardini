import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/carousel';
import './style/stylecards2.css'
import leaf from './imgs/spring_leaf_plant_nature_leaves_garden_environment_icon_133207.png';
import plant from './imgs/spring_sprout_plant_garden_growth_leaves_seedling_icon_133206.png';
import flower from './imgs/spring_plant_flower_leaves_garden_nature_pot_icon_133218.png';
import tree from './imgs/spring_tree_plant_garden_nature_wood_forest_icon_133217.png';
import logo from './imgs/verde senza s.png';

class Cards2 extends Component {
  render(){    
    const sfondoStyle = {
        backgroundColor: this.props.sfondoDinamico
      };

      const margineTop = {
        marginTop: this.props.marginTop
      };      


    return(
            <div className='carte' style={margineTop} data-bs-toggle="collapse" data-bs-target={this.props.bsname}>
              <div className='container cont1' style={sfondoStyle}>
                    <div className='row'>
                        
                            <div className='col-8 corpoCard'>
                                <div className='image' data-bs-toggle="collapse" data-bs-target={this.props.bsname}><img src={this.props.immagine} className='card-img-top'></img></div>
                                <div className='descr'>
                                    <h1 className='titCard' data-bs-toggle="collapse" data-bs-target={this.props.bsname}>{this.props.titolo}</h1>
                                    <p className='txtCard'>{this.props.DescrizioneCards}</p>
                                </div>
                                
                            </div>
                        <div className='col-2 spazio'></div>
                    </div>
            </div>
            <div className='container cont2' style={sfondoStyle}>
                <div className="collapse" id={this.props.idname}>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className='row'>
                        <div className='col-1 '></div>
                            <div className='col-xl-4 col-xs-12 testocarosello'>
                                <div className='row'>
                                    <h2 className='h2Card'>{this.props.TitoloCards}</h2>
                                </div>
                                <div className='row'>
                                    <p className='pCard'>{this.props.DescrizioneCards}</p>
                                </div>
                            </div>
                            <div className='col-xl-6 col-xs-12 '>
                            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner caroselloargomenti">
                                    <div className="carousel-item active">
                                    <img src={this.props.carosello1} className="d-block w-100 ciao"></img>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={this.props.carosello2} className="d-block w-100 ciao"></img>
                                    </div>
                                    <div className="carousel-item">
                                    <img src={this.props.carosello3} className="d-block w-100 ciao"></img>
                                    </div>
                                 </div>
                            </div>
                            </div>
                            <div className='col-1 '></div>
                        </div>
                       
                        </div>
                </div>
            </div>
        </div>
        
      );
    }
}

export default Cards2;
