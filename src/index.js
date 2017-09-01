import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeApp from './containers/Home/HomeApp';
import Header from './containers/Header';
import Footer from './containers/Footer';

ReactDOM.render(
  <BrowserRouter>
    <div className="app">
      {/* <Header/> */}
        <Route exact path="/" component={HomeApp}/>
      {/* <Footer/> */}
    </div>
  </BrowserRouter>,
document.getElementById('root')
);