import logo from './logo.svg';
import './App.css';
import Tabla from './components/tabla';
import {contextprovider} from './context/context';
import Tabla2 from './components/tabla2';

function App() {
  return (
    <contextprovider>
    <div className="App">
     <Tabla/>
     <Tabla2/>
    </div>
    </contextprovider>
  );
}

export default App;
