import React from 'react';

import { connect } from 'react-redux';
import { updateSmurf, deleteSmurf } from '../actions';

import { Card, 
  Button, 
  Dropdown, 
  DropdownMenu, 
  DropdownToggle,
  Form,
  Label,
  Input } from 'reactstrap';

// INLINE STYLING
const card = {
  width: '240px',
  marginBottom: '20px',
  background: 'whitesmoke',
  border: 'none',
  boxShadow: '0 0 10px white',
  maxHeight: '240px',
}

const cardTitle = {
  paddingBottom: '5px', 
  borderBottom: '1px solid silver', 
  background: 'steelblue',
  padding: '10px 0',
  color: 'whitesmoke',
}

const formStyles = {
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '300px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 19px black',
}

const buttonContainer = {
  display: 'flex',
  justifyContent: 'space-evenly',
}

const button = {
  width: '100px',
  marginBottom: '10px',
}

const dropdownMenu = {
  background: 'rgba(200,200,200,0)',
  border: 'none',
}

class Smurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      name: '',
      age: '',
      height: '',
    }
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit(id) {
    return e => {
      e.preventDefault();

      const stateCopy = {...this.state};
      delete stateCopy.dropdownOpen;
      
      this.props.updateSmurf(id, stateCopy)
  
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen,
        name: '',
        age: '',
        height: '',
      }));
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
      name: this.props.smurf.name,
      age: this.props.smurf.age,
      height: this.props.smurf.height,
    }));
  }

  render() {
    return (
      <Card style={card}>
        <h3 style={cardTitle}>{this.props.smurf.name}</h3>
        <p><strong>Age</strong>:<br />{this.props.smurf.age}</p>
        <p><strong>Height</strong>:<br />{this.props.smurf.height}</p>
        <div style={buttonContainer}>
          <Dropdown isOpen={this.state.dropdownOpen} 
            toggle={() => this.toggle()} >
            <DropdownToggle 
              style={button}
              color='warning' 
              caret >
              Edit
            </DropdownToggle>
            <DropdownMenu style={dropdownMenu}>
              <Form onSubmit={this.handleSubmit(this.props.smurf.id)}
                style={formStyles} >
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
            </DropdownMenu>
          </Dropdown>
          <Button color='danger'
            style={button} 
            onClick={() => this.props.deleteSmurf(this.props.smurf.id)} >
              Delete
          </Button>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    updatingSmurf: state.updatingSmurf,
    error: state.error,
  }
}

export default connect(mapStateToProps, { updateSmurf, deleteSmurf })(Smurf);
