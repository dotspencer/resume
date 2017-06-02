import React from 'react';
import ReactDOM from 'react-dom';

import styles from './common.scss';
import Header from './components/header';
import Courses from './components/courses';

var info = require('./data/info.json');

class App extends React.Component {
  render(){
    return (
      <div>
        <Header general={info.general}/>
        <Courses courses={info.courses}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
