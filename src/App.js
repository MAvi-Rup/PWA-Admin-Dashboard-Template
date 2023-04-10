import './App.css'
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RigtSide/RightSide';
// import Sidebar from './components/Sidebar';

import Signin from './components/Login/Signin';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RequireAuth from './components/Others/RequireAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
 
        <Routes>
          <Route path='/dashboard' element={<RequireAuth><Home /></RequireAuth>}>
          </Route>
          <Route path='/' element={<Signin />}></Route>

        </Routes>


        <ToastContainer />

    </div>
  );
}

export default App;
