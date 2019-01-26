import React, { Component, PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import store from "./rdx/index";

import ThirtyMinIntervalColumn from './components/UserTimeTable/ThirtyMinIntervalColumn';
import RoomInputForm from "./components/RoomInputForm";
import DayOfTheWeekGrid from "./components/UserTimeTable/DayOfTheWeekGrid";

class App extends Component {

  constructor(state, props) {
    super(state, props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <ThirtyMinIntervalColumn/>
          <DayOfTheWeekGrid/>
          <RoomInputForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};
export default App = connect(mapStateToProps)(App);
