import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
// import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <ItemListContainer greeting='Bienvenido'/>
   </div>
  );
}

export default App;
