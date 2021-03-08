import {useState} from 'react'; 
imoport './Pies.css';

import Auth from './components/Pies/Pies';
import Pies from './components'

const Pies = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Name of Pie</th>
          <th>Base of Pie</th>
          <th>Crust</th>
          <th>Bake Time</th>
          <th>Servings</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        /* this will be where we display the info fetched from the server */}     
      </tbody>
    </table>
  );
};

export default Pies;