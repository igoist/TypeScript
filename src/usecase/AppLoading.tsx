import * as React from 'react';
import { Loading } from '../components/Loading/';

let loading = new Loading({
  text: 'File Uploading'
  // text: '文件上传中'
});

const handleClick = () => {
  loading.loadingRequest();
}

const handleClick2 = () => {
  loading.finishLoadingRequest();
}

export interface AppProps {

};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <button className='btn bounce submit' onClick={ handleClick }>Click</button>
        <button className='btn bounce submit' onClick={ handleClick2 }>Click2</button>
      </div>
    );
  }
}
