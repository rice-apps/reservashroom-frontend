import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from "./rdx/index";

import Page from './components/Page';

class App extends Component {

  constructor(state, props) {
    super(state, props);
    this.state = {

    };
  }

  render() {
    return (
        <Page/>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
export default App = connect(mapStateToProps)(App);
