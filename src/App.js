import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from "./rdx/index";

////////////////////////////////////////////////////////////////////////////////
class App extends Component {

  constructor(state, props) {
    super(state, props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          Empty App
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////
const mapStateToProps = state => {
  return {
  };
};
export default App = connect(mapStateToProps)(App);

////////////////////////////////////////////////////////////////////////////////
