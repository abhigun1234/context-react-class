import React, { Component } from 'react';
import CompD from './CompD';
import { UserProvider } from './useContext';
class CompC extends Component {
    render() {
        return (
            <div>
                <UserProvider value="raju">
                    <CompD></CompD>
                </UserProvider>
            </div>
        );
    }
}

export default CompC;