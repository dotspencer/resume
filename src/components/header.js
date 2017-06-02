import React from 'react';

class Header extends React.Component {
  componentWillMount(){
    this.general = this.props.general;
  }

  render(){
    return (
      <div>
        <h1>{this.general.name}</h1>
        <p>{this.general.address}</p>
      </div>
    );
  }
}

export default Header;
