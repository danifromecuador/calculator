// App.js
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Calculator />
      <Quote />
    </div>
  );
}

export default App;
