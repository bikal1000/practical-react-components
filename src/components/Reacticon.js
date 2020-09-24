import React from 'react';
import { IconContext } from 'react-icons';
import { FaBeer } from 'react-icons/fa';
import { WiDayLightWind } from 'react-icons/wi';
import { IoIosAirplane } from 'react-icons/io';

function Reacticon() {
  return (
    <IconContext.Provider value={{ color: '#000', size: '5rem' }}>
      <h3>
        {' '}
        Lets go for a <FaBeer />?{' '}
      </h3>
      <h2>
        <WiDayLightWind />
      </h2>
      <h2>
        <IoIosAirplane />
      </h2>
    </IconContext.Provider>
  );
}

export default Reacticon;
