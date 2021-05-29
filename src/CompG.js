// import React, { Component } from 'react';
// import React,{useContext} from 'react';
// import { Uconsumer } from './useContextone'
// class CompG extends Component {
//    user=useContext(Uconsumer)
//     render() {
//         return (
//             <Uconsumer>
//                 {/* {
//                     (userName) => {
//                         return <div>Hello {userName}</div>
//                     }
//                 } */}
//             </Uconsumer>
//         );
//     }
// }

// export default CompG;
import React, { Component } from 'react';
import  { useContext } from 'react';
import { Uconsumer } from './useContextone'

function CompG(props) {
    const user = useContext(Uconsumer)
    return (
        <div>
            {user}
        </div>
    );
}

export default CompG;