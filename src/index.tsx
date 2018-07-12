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

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to={ currentUrl }>
            Home
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'message' }>
            Components: Message
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'util' }>
            Util: log
          </Link>
        </li>
        <li>
          <Link to={ currentUrl + 'b' }>
            Hello: Rendering with React
          </Link>
        </li>
      </ul>
      <Route exact path={ currentUrl } component={ AppModal } />
      <Route path={ currentUrl + 'message' } component={ AppMessage } />
      <Route path={ currentUrl + 'util' } component={ AppUtil } />
      <Route path={ currentUrl + 'b' } component={ AppHello } />
    </div>
  </Router>,
  document.getElementById('app')
);
