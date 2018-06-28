import * as React from 'react';
import { Hello } from '../components/Hello';

export interface AppProps {

};

export default class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div>
        <Hello compiler='ts-loader' framework='what?' />
        <Hello compiler='ts-loader' framework='what?' />
      </div>
    );
  }
}
