import React from 'react';
import ReactDOM from 'react-dom';

import styles from './common.scss';
import Header from './components/header';

class App extends React.Component {
  componentDidMount(){
    var info = require(__dirname + '/data/info.json');
    console.log(info);
  }

  render(){
    return (
      <div>
        <Header name={5 + 5}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
