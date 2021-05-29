import React,{useContext} from 'react';
import CompG from './CompG';
import {UserConsumer} from './useContext'

function CompF(props) {
    const user=useContext(UserConsumer)
    return (
        <div>
            {/* {user} */}
            <CompG></CompG>
        </div>
    );
}

export default CompF;