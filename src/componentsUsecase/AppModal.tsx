import * as React from 'react';
import { Confirm } from '../components/Modal/';



const handleClick = () => {
  Confirm({
    title: '温馨提醒',
    content: '请使用微信浏览器打开',
    okText: '关闭',
  });
}

export interface AppProps {

};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <button className='btn bounce submit' onClick={ handleClick }>Click</button>
      </div>
    );
  }
}
