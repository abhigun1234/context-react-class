import React,{useContext} from 'react';
import CompG from './CompG';
import {UserConsumer} from './useContext'

function CompF(props) {
    const user=useContext(UserConsumer)
    return (
        <div>
            <h1>Recived data via a hooks</h1>
            {user}
            {/* <CompG></CompG> */}
        </div>
    );
}

export default CompF;