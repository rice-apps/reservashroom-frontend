import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from "./rdx/index";
import RoomInputForm from "./components/RoomInputForm";
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
          <RoomInputForm/>

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
