import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <Link to="/" className="header item">
            <img src={logo} className="app-logo" alt="logo"/>
            Label.ai
          </Link>
          <Link to="/label" className="item">Live Demo</Link>
          <Link to="/label" className="item">Download</Link>
          <div className="ui simple dropdown item">
            New Project <i className="dropdown icon"/>
            <div className="menu">
            <Link to="/label" className="item">Classification</Link>
            <Link to="/label" className="item">Segmentation</Link>
              {/* <div className="divider"/>
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon"/>
                Sub Menu
                <div className="menu">
                  <Link className="item">Link Item 1</Link>
                  <Link className="item">Link Item 2</Link>
                </div>
              </div>
              <Link className="item">Link Item</Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
