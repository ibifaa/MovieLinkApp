import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import {Movie} from './pages/Movie';

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/movie' element={<Movie/>} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
