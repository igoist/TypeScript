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

let loading02: Loading;

const openLoading02 = () => {
  if (!loading02) {
    loading02 = new Loading({
      target: document.querySelector('.loading-target'),
      text: 'loading02',
      type: 2
    });
  }
  loading02.loadingRequest();
}

const closeLoading02 = () => {
  loading02.finishLoadingRequest();
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
        <div>
          <button className='btn bounce submit' onClick={ openLoading02 }>OpenSpin02</button>
          <button className='btn bounce submit' onClick={ closeLoading02 }>CloseSpin02</button>
        </div>

        <div className='loading-target' style={{ position: 'relative',  width: '100%', height: '200px', backgroundColor: '#333' }}></div>
      </div>
    );
  }
}
