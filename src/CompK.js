import React from 'react';
import {UserConsumer} from './useContext'
function CompK(props) {
    return (
        <div>
             <UserConsumer>
              {
              (userName)=>{
               return <div>Hello {userName}</div>
              }
              }
          </UserConsumer>
        </div>
    );
}

export default CompK;