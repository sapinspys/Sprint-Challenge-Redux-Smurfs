import React from 'react';

import Smurf from './Smurf';

const CardsContainer = {
  width: '500px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}

const Smurfs = props => {
  return (
    <div style={CardsContainer}>
      {props.smurfs.map(smurf => {
        return <Smurf
          key={smurf.id}
          smurf={smurf} />
      })}
    </div>
  )
}

export default Smurfs;