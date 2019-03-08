import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurfs
          key={smurfs.indexOf(smurf)}
          smurf={smurf} />
      })}
    </div>
  )
}

export default Smurfs;