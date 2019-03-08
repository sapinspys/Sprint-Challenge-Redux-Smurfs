import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf
          key={props.smurfs.indexOf(smurf)}
          smurf={smurf} />
      })}
    </div>
  )
}

export default Smurfs;