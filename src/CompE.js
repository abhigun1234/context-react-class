import React, { Component } from 'react';
import CompF from './CompF';
import CompK from './CompK';

import {UserConsumer} from './useContext'

class CompE extends Component {
    render() {
        return (
            <div>    <h1>Recived data in component E</h1>      <UserConsumer>
              {
              (userName)=>{
               return <div>Hello {userName}</div>
              }
              }
          </UserConsumer>
          <CompK></CompK>
          <CompF></CompF>
          </div>

         
        );
    }
}

export default CompE;