import React from 'react';

class Course extends React.Component {
  render(){
    return (
      <div className="course">
        <p>{this.props.id} - {this.props.title}</p>
        <div className="tags">
          {this.props.tags.map((t)=>(
            <div className="tag" key={t}>{t}</div>
          ))}
        </div>
      </div>
    );
  }
}

class Header extends React.Component {
  componentWillMount(){
    this.courses = this.props.courses;
  }

  render(){
    return (
      <div>
        <h3>Courses</h3>
        {this.courses.map((c)=>(
          <Course key={c.id} id={c.id} title={c.title} tags={c.tags} />
        ))}
      </div>
    );
  }
}

export default Header;
