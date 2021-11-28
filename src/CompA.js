import React, { Component } from 'react';
import {UserConsumer} from './useContext'
class CompA extends Component {
    render() {
        return (
            <UserConsumer>
                {
                (userName)=>{
                 return <div>Hello {userName}</div>
                }
                }
            </UserConsumer>
          // <CompF></CompF>
          );
    }
}

export default CompA;