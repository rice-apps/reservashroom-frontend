import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from "./rdx/index";

import Page from './components/Page';
import Landing from "./components/Landing";

class App extends Component {

  constructor(state, props) {
    super(state, props);
    this.state = {

    };
  }

  render() {
    return (
        <Landing/>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
export default App = connect(mapStateToProps)(App);
