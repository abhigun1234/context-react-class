import React from 'react';
import {UserConsumer} from './useContext'
function CompK(props) {
    return (
        <div>
             <UserConsumer>
              {
              (userName)=>{
               return <div>
                   <h1>Component K recived the data</h1>
                   Hello {userName}
                   </div>
              }
              }
          </UserConsumer>
        </div>
    );
}

export default CompK;