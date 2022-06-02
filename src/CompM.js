import React,{useContext} from 'react';
import {UserConsumer} from './useContext'
 function CompM(props) {
      const userData=useContext(UserConsumer)
    return (
        <div>
            <h1>recived data from component C</h1>
            {userData}
        </div>
    );
}

export default CompM;