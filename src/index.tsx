import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppHello from './usecase/AppHello';
import AppModal from './usecase/AppModal';
import AppMessage from './usecase/AppMessage';
import AppUtil from './usecase/AppUtil';

const currentUrl = '/~egoist/Apps/TS/dist/';

const handleMenuBtnClick = () => {
  document.body.classList.toggle('nav-opened');
};

ReactDOM.render(
  <Router>
    <div>
      <ul className='siteMenu'>
        <li>
          <Link to={ currentUrl }>
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'message' }>
            <button>Components: Message</button>
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'util' }>
            <button>Util: log</button>
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'b' }>
            <button>Hello: Rendering with React</button>
          </Link>
        </li>
      </ul>
      <a className='menuBtn' onClick={ handleMenuBtnClick }>
        <del className='bar'></del>
        <del className='bar'></del>
        <del className='bar'></del>
      </a>
      <Route exact path={ currentUrl } component={ AppModal } />
      <Route path={ currentUrl + 'message' } component={ AppMessage } />
      <Route path={ currentUrl + 'util' } component={ AppUtil } />
      <Route path={ currentUrl + 'b' } component={ AppHello } />
    </div>
  </Router>,
  document.getElementById('app')
);
