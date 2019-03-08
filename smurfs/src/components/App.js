import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import AddForm from './AddForm';
import Smurfs from './Smurfs';

import { Spinner } from 'reactstrap';

// INLINE STYLES
const loading = {
  textAlign: 'center',
  marginTop: '150px',
}

const AppContainer = {
  textAlign: 'center',
  paddingTop: '25px',
}

const Titles = {
  boxShadow: '0 0 10px black',
  background: 'darkslateblue',
  color: 'white',
  padding: '10px 0',
  width: '500px',
  borderRadius: '5px',
  margin: '0 auto',
  marginBottom: '25px',
}

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <header style={loading}>
          <Spinner style={loading} color='light' />
        </header>
      )
    }

    return (
      <div style={AppContainer}>
        <h1 style={Titles}>SMURFS! 2.0 W/ Redux</h1>
        <div style={Titles}>Welcome to the smurf village!</div>
        <AddForm />
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
