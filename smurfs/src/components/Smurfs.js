import React from 'react';

import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf
          key={smurf.id}
          smurf={smurf} />
      })}
    </div>
  )
}

export default Smurfs;