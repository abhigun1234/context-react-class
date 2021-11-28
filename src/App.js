import logo from './logo.svg';
import './App.css';
import CompC from './CompC';
import {Uprovider} from './useContextone'
import Register from './RegistratioValid'
import { UserProvider } from './useContext';

function App() {
  return (
    <div className="App">
      
     {/* <UserProvider value="jkhiknjknjknjk">
          <CompC></CompC>
     </UserProvider> */}
    <CompC></CompC>
    </div>
  );
}

export default App;
