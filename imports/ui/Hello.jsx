import React, { Component } from 'react';
import {connect} from "react-redux";

class Hello extends Component {

  render() {

    return (
      <div>
        <h1>Hello {this.props.log.kullanici}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {

  return state;
}

export default connect(mapStateToProps)(Hello);