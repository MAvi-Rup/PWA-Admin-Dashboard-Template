import './App.css'
// import MainDash from './components/MainDash/MainDash';
// import RightSide from './components/RigtSide/RightSide';
// import Sidebar from './components/Sidebar';

import Signin from './components/Login/Signin';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import RequireAuth from './components/Others/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FarmerRegistrationForm from './components/FieldTechnitian/FarmerRegistrationForm';
import FTDashboard from './components/FieldTechnitian/FTDashboard';
import FTTransportPermit from './components/FieldTechnitian/FTTransportPermit';
import FTLoanSaction from './components/FieldTechnitian/FTLoanSanction';

function App() {
  return (
    <div>

      <Routes>
        <Route path='/dashboard' element={<RequireAuth><FTDashboard /></RequireAuth>}>
          <Route index element={<Home />}></Route>
          <Route path='reg-farmers' element={<FarmerRegistrationForm />}></Route>
          <Route path='transport-permit' element={<FTTransportPermit />}></Route>
          <Route path='loan' element={<FTLoanSaction />}></Route>
        </Route>
        <Route path='/' element={<Signin />}></Route>

      </Routes>


      <ToastContainer />

    </div>
  );
}

export default App;
