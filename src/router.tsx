import * as React from 'react';

import {
  Route,
  Link
} from 'react-router-dom';

import AppHello from './usecase/AppHello';
import AppLoading from './usecase/AppLoading';
import AppSpin from './usecase/AppSpin';
import AppModal from './usecase/AppModal';
import AppMessage from './usecase/AppMessage';
import AppUtil from './usecase/AppUtil';

// const currentUrl = '/~egoist/Apps/TS/dist/';
const currentUrl = '/';

const routerArr = [
  {
    path: currentUrl,
    title: 'Home',
    component: AppModal
  },
  {
    path: currentUrl + 'message',
    title: 'Components: Message',
    component: AppMessage
  },
  {
    path: currentUrl + 'loading',
    title: 'Components: Loading',
    component: AppLoading
  },
  {
    path: currentUrl + 'spin',
    title: 'Components: Spin',
    component: AppSpin
  },
  {
    path: currentUrl + 'log',
    title: 'Util: log',
    component: AppUtil
  },
  {
    path: currentUrl + 'b',
    title: 'Hello: Rendering with React',
    component: AppHello
  }
];

export default class Menu extends React.Component {
  render() {
    let rows = [];

    for (let i = 0; i < routerArr.length; i++) {
      let item = routerArr[i];
      rows.push(
        <li key={ i.toString() }>
          <Link to={ item.path }>
            { item.title }
          </Link>
        </li>
      );
    }

    return (
      <>
        <ul className='siteMenu'>
          { rows }
        </ul>
      </>
    );
  }
}

class Routes extends React.Component {
  render() {
    let rows = [];

    for (let i = 0; i < routerArr.length; i++) {
      let item = routerArr[i];
      if (item.path === currentUrl) {
        rows.push(<Route key={ i.toString() } exact path={ item.path } component={ item.component } />);
      } else {
        rows.push(<Route key={ i.toString() } path={ item.path } component={ item.component } />);
      }
    }

    return (
      <>
        { rows }
      </>
    );
  }
}

export { Menu, Routes }
