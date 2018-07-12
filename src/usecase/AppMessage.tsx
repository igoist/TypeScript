import * as React from 'react';
import { Message, showMessage } from '../components/Message/';


const handleClick = () => {
  let message = new Message({
    content: 'Message 消息提示',
    duration: 6000,
    type: 'warning'
  });

  message.render();
  message.componentDidMount();
}

const handleClick2 = () => {
  showMessage({
    content: 'Message 消息提示',
    // duration: 2000,
    type: 'error'
  });
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
