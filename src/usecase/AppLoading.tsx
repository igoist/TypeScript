import * as React from 'react';
import { Loading } from '../components/Loading/';

let loading = new Loading({
  text: 'File Uploading',
  type: 0
});

const handleClick = () => {
  loading.loadingRequest();
}

const handleClick2 = () => {
  loading.finishLoadingRequest();
}

const loading01 = new Loading({
  text: 'loading01',
  type: 1
});

const openLoading01 = () => {
  loading01.loadingRequest();
}

const closeLoading01 = () => {
  loading01.finishLoadingRequest();
}

export interface AppProps {

};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <div>
          <button className='btn bounce submit' onClick={ handleClick }>OpenSpin00</button>
          <button className='btn bounce submit' onClick={ handleClick2 }>CloseSpin00</button>
        </div>
        <div>
          <button className='btn bounce submit' onClick={ openLoading01 }>OpenSpin01</button>
          <button className='btn bounce submit' onClick={ closeLoading01 }>CloseSpin01</button>
        </div>
      </div>
    );
  }
}
