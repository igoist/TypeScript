import * as React from 'react';
import { Confirm } from '../components/Modal/';


const handleClick = () => {
  Confirm({
    title: '温馨提醒',
    content: '请使用微信浏览器打开',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      console.log('onOK');
    },
    onCancel: () => {
      console.log('onCancel');
    },
    extraNode: `<div style='width: 100%; height: 62px; background-color: #67aaff;'></div>`,
    extraFuncOnDidMount: () => {
      console.log('extraFuncOnDidMount');
    }
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
