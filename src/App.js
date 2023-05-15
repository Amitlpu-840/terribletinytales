import Tcube from './components/Tcube'
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <h1 className="App-title">Terribly Tiny Tales Frontend Assignment</h1>
      </header>
      <Outlet/>
      <footer className="App-footer">
      Submitted by Amit Giri (12008090)
      </footer>
    </div>
  );
}

export default App;
