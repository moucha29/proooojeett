import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import AddCar from './Components/AddCar';
import CarsLists from './Pages/CarsLists';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>}  />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/addCar' element={<AddCar/>} />
        <Route path='/cars' element={<CarsLists/>} />

      </Routes>
    </Router>
  );
}

export default App;
