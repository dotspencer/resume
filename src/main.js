import React from 'react';
import ReactDOM from 'react-dom';

import styles from './common.scss';

class App extends React.Component {
  render(){
    return (
      <h1>Smith</h1>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
