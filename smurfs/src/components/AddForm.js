import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

import { Button, Form, Label, Input } from 'reactstrap';

// INLINE STYLING
const formStyles = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '350px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 10px white',
}

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        };
    }
  
    handleChange = e => {
      this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.addSmurf(this.state);

      this.setState({
        name: '',
        age: '',
        height: '',
      })
    }
  
    render() {
      return (
        <Form onSubmit={this.handleSubmit} style={formStyles}>
          <Label style={{color:'gray', fontSize: '1.4rem'}}>Add a Friend</Label>
          <Label style={{color:'red', fontSize: '0.8rem'}}>{this.props.error}</Label>
          <Label>
            Name:
            <Input type="text" 
              value={this.state.name} 
              onChange={this.handleChange} 
              name='name' />
          </Label>
          <Label>
            Age:
            <Input type="text" 
              value={this.state.age} 
              onChange={this.handleChange} 
              name='age' />
          </Label>
          <Label>
            Height:
            <Input type="text" 
              value={this.state.height} 
              onChange={this.handleChange} 
              name='height' />
          </Label>
          <Button color='primary' 
            block>
              Submit
          </Button>
        </Form>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      addingSmurf: state.addingSmurf,
      error: state.error,
    }
  }
  
  export default connect(mapStateToProps, { addSmurf })(AddForm);