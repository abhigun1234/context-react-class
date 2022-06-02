import React,{useContext} from 'react';
import CompG from './CompG';
import CompM from './CompM';
import {UserConsumer} from './useContext'

function CompF(props) {
    const user=useContext(UserConsumer)
    return (
        <div>
            <h1>Recived data via a hooks compont F</h1>
            {user}
            {/* <CompG></CompG> */}
            <CompM></CompM>
        </div>
    );
}

export default CompF;