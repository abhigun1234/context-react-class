import logo from './logo.svg';
import './App.css';
import CompC from './CompC';
import {Uprovider} from './useContextone'
import Register from './RegistratioValid'
function App() {
  return (
    <div className="App">
      <Uprovider value="12334">
        <CompC></CompC>
      </Uprovider>
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
