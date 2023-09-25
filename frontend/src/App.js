import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

//pages and components
import Home from './pages/home'
import Navbar from './components/navbar'
import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'
import Business from './pages/business';
import Explore from './pages/explore';
import BusinessView from './pages/businessView';

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
              element={!user ? <Signup/> : <Navigate to='/' />}
            />
            <Route
              path='/profile'
              element={<Profile/>}
            />
            <Route
              path='/business'
              element={<Business/>}
            />
            <Route
              path='/explore'
              element={<Explore/>}
            />
            <Route
              path='/explore/view/:id'
              element={<BusinessView/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
