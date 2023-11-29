import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLogin} from "./page/MainLogin.jsx";
import {LoginForm} from "./page/LoginForm.jsx";
import {AdminDashboard} from "./page/adminDashboard/AdminDashboard.jsx";
import {AddNotice} from "./components/adminDashboard/AddNotice.jsx";
import {NashaLogin} from "./page/NashaLogin.jsx";
import {NashaAdminDashboard} from "./page/adminDashboard/NashaAdminDashBoard.jsx";

const App =()=>{
  return (
      <>
        <BrowserRouter>
          <Routes>
                <Route path="/" element={<MainLogin/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/nashalogin" element={<NashaLogin/>}/>
                <Route path="/admin/:dashboard" element={<AdminDashboard/>}/>
              <Route path="/nasha/admin/:dashboard" element={<NashaAdminDashboard/>}/>
            {/*<Route path="" element={}/>*/}
            {/*<Route path="" element={}/>*/}

          </Routes>

        </BrowserRouter>
      </>
  )
}


  


export default App
