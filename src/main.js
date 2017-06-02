import React from 'react';
import ReactDOM from 'react-dom';

import styles from './common.scss';
import Header from './components/header';

var info = require('./data/info.json');

class App extends React.Component {
  render(){
    return (
      <div>
        <Header info={info}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
