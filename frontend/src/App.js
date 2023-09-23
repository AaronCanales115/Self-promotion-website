import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/login'
import Signup from './pages/signup'
//import Account from './pages/account';
import Profile from './pages/profile'
import Business from './pages/business';

function App() {
  const {user} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/login'
              element={!user ? <Login/> : <Navigate to='/' />}
            />
            <Route
              path='/signup'
              element={<Signup/>}
            />
            <Route
              path='/profile'
              element={<Profile/>}
            />
            <Route
              path='/business'
              element={<Business/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
