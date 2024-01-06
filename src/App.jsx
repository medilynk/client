
import { useAuthContext } from './hooks/useAuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from './Layout';
import Landing from './pages/Landing';
import Admin from './pages/Admin/Admin';
import Doctor from './pages/Doctor';
import Staff from './pages/Staff/Staff';
import AddShift from './pages/Admin/AddShift';
import GetShifts from './pages/Admin/GetShifts';
import AddDepartment from './pages/Admin/AddDepartment';
import CreateStaff from './pages/Admin/CreateStaff';
import GetStaff from './pages/Admin/GetStaff';
import CreateDoctor from './pages/Admin/CreateDoctor';
import GetDoctors from './pages/Admin/GetDoctors';
import SigninPage from './pages/SigninPage';
import CreatePatient from './pages/Staff/CreatePatient';
import GetPatients from './pages/Staff/GetPatients';
import CreateAppointment from './pages/Staff/CreateAppointment';
import GetAppointments from './pages/Staff/GetAppoinments'
function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout />
              <Landing />
            </>
          }
        />
        <Route path='/signin' element={<><Layout/><SigninPage/></>}/>
        <Route path='/admin' element={user && user.type==='admin'? <><Layout/><Admin/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/doctor' element={user && user.type==='doctor'? <><Layout/><Doctor/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff' element={user && user.type==='staff'? <><Layout/><Staff/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/add-shift' element={user && user.type==='admin'? <><Layout/><AddShift/></> : <div> Not Found or You do not have permission.</div>}/>       
        <Route path='/admin/get-shift' element={user && user.type==='admin'? <><Layout/><GetShifts/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/create-department' element={user && user.type==='admin'? <><Layout/><AddDepartment/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/create-staff' element={user && user.type==='admin'? <><Layout/><CreateStaff/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/get-staff' element={user && user.type==='admin'? <><Layout/><GetStaff/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/create-doctor' element={user && user.type==='admin'? <><Layout/><CreateDoctor/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/admin/get-doctor' element={user && user.type==='admin'? <><Layout/><GetDoctors/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff/create-patient' element={user && user.type==='staff'? <><Layout/><CreatePatient/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff/get-patients' element={user && user.type==='staff'? <><Layout/><GetPatients/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff/create-appointment' element={user && user.type==='staff'? <><Layout/><CreateAppointment/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff/get-appointments' element={user && user.type==='staff'? <><Layout/><GetAppointments/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>

      </Routes>
    </Router>
  );
}

export default App;
