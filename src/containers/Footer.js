import React, {Component} from 'react';
import logo from '../logo.svg';

class Footer extends Component {
  render() {
    return (
      <div className="ui inverted vertical footer segment">
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">Features</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Classification</a>
                <a href="#" className="item">Object Detection</a>
                <a href="#" className="item">Segmentation</a>
                <a href="#" className="item">NLP and Text</a>
              </div>
            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Solutions</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">Pricing</a>
                <a href="#" className="item">Downloads</a>
                <a href="#" className="item">Web version</a>
                <a href="#" className="item">Live Demo</a>
              </div>
            </div>
            <div className="three wide column">
               <h4 className="ui inverted header">Company</h4>
              <div className="ui inverted link list">
                <a href="#" className="item">About us</a>
                <a href="#" className="item">Careers</a>
                <a href="#" className="item">Contact us</a>
              </div> 
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Try our live demo!</h4>
              <p>Classify 20,000 cats and dogs in 5 minutes.</p>
            </div>
          </div>
          <div className="ui inverted section divider"/>
          <img src={logo} className="ui centered mini image" alt="logo"/>
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="#">Site Map</a>
            <a className="item" href="#">Contact Us</a>
            <a className="item" href="#">Terms and Conditions</a>
            <a className="item" href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
