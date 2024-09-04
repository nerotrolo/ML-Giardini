import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style/stylebanner.css'
import mlbanner from './videos/mlbanner.mp4';
import { Container } from 'react-bootstrap';

class Banner extends Component {
  render(){    
    return(
        <div id="" className="video-fiore">
          <div id="liveAlertPlaceholder"></div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <video autoPlay muted loop><source src={mlbanner} type="video/mp4"></source></video>
            </div>
            <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
          </div>
        </div>
      );
    }
}

export default Banner;
