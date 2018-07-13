import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router
} from 'react-router-dom';

import { Menu, Routes } from './router';

const handleMenuBtnClick = () => {
  document.body.classList.toggle('nav-opened');
};

ReactDOM.render(
  <Router>
    <div>
      <Menu />
      <a className='menuBtn' onClick={ handleMenuBtnClick }>
        <del className='bar'></del>
        <del className='bar'></del>
        <del className='bar'></del>
      </a>
      <Routes />
    </div>
  </Router>,
  document.getElementById('app')
);
