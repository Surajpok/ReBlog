import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Write from './pages/Write';
import Single from './pages/Single';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './style.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/write' element={<Write />} />
            <Route path='/post/:id' element={<Single />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
