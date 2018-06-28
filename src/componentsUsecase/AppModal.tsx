import * as React from 'react';
import Modal from '../components/Modal/';

let modal = new Modal({
  title: 'test!!'
});

const handleClick = () => {
  modal.render();
}

export interface AppProps {

};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <button onClick={ handleClick }>Click</button>
      </div>
    );
  }
}
