import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';

import Smurfs from './Smurfs';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <h1>LOADING</h1>;
    }
    
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to the smurf village!</div>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
