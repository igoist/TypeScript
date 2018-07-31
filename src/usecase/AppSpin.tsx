import * as React from 'react';
import { Spin } from '../components/Spin';

let rows: any[] = [];

for (let i = 0; i < 3; i++) {
  let spin = new Spin({
    text: `Loading ...`, // Spin demo ${ i }
    type: i
  });
  let div = document.createElement('div');
  div.appendChild(spin.render());
  rows.push(
    <div
      className='item-wrap-spin'
      key={ i.toString() }
    >
      <div
        className='item-inner-spin'
        dangerouslySetInnerHTML={{ __html: spin.renderToString() }}>
      </div>
    </div>
  );
}

export interface AppProps {
};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        { rows }
      </div>
    );
  }
}
