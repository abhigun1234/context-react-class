import React, { Component } from 'react';
import CompF from './CompF';
import {UserConsumer} from './useContext'

class CompE extends Component {
    render() {
        return (
        //   <UserConsumer>
        //       {
        //       (userName)=>{
        //        return <div>Hello {userName}</div>
        //       }
        //       }
        //   </UserConsumer>
        <CompF></CompF>
        );
    }
}

export default CompE;