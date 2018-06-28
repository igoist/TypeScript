import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AppHello from './componentsUsecase/AppHello';
import AppModal from './componentsUsecase/AppModal';

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
          <Link to={ currentUrl + 'b' }>
            Rendering with React
          </Link>
        </li>
      </ul>
      <Route exact path={ currentUrl } component={ AppModal } />
      <Route path={ currentUrl + 'b' } component={ AppHello } />
    </div>
  </Router>,
  document.getElementById('app')
);
