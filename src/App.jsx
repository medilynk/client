
import { useAuthContext } from './hooks/useAuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Layout from './Layout';
import Landing from './pages/Landing';
import Admin from './pages/Admin';
import Doctor from './pages/Doctor';
import Staff from './pages/Staff';

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
        <Route path='/admin' element={user && user.type==='admin'? <><Layout/><Admin/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/doctor' element={user && user.type==='doctor'? <><Layout/><Doctor/></> : <div> Not Found or You do not have permission.</div>}/>
        <Route path='/staff' element={user && user.type==='staff'? <><Layout/><Staff/></> : <div> Not Found or You do not have permission.</div>}/>
        
       
        <Route path="*" element={<div> Not Found or You do not have permission.</div>}/>

      </Routes>
    </Router>
  );
}

export default App;
