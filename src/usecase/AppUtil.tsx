import * as React from 'react';
import { Confirm } from '../components/Modal/';
import { log } from '../util/';

const { l } = log;


const handleClick = () => {
  Confirm({
    title: '温馨提醒',
    content: '请使用微信浏览器打开',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      l({
        title: 'Modal',
        text: 'onOK',
        textColor: 'green',
      });
    },
    onCancel: () => {
      l({
        title: 'Modal',
        text: 'onCancel',
        textColor: 'pink',
      });
    },
    extraNode: `<div style='width: 100%; height: 62px; background-color: #67aaff;'></div>`,
    extraFuncOnDidMount: () => {
      l({
        title: 'Modal',
        // titleBg: '',
        // titleColor: '#149cec',
        // titleColor: 'green',
        text: 'extraFuncOnDidMount',
        // textBg: '#333',
        // textColor: '#f00',
      });
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
