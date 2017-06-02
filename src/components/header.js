import React from 'react';

class Header extends React.Component {
  componentWillMount(){
    this.general = this.props.info.general;
  }

  render(){
    return (
      <div>
        <h1>{this.general.name}</h1>
      </div>
    );
  }
}

export default Header;
