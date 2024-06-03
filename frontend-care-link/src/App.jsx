


import './App.css'
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar-component"
import UserAuthForm from './pages/userAuthForm.page';
import { createContext, useEffect, useState } from 'react';
import { lookInSession } from './common/session';
import HomePage from './pages/Home-page';
import PatientDashboard from './pages/patient-dashboard.page';
import ContactUs from './pages/contactUs-page';
import About from './pages/About-page';
import HowToUse from './pages/how-to-use-page';
import Privacy from './pages/privacy-page';
import TermsConditions from './pages/terms&conditions-page';
import DoctorDashboard from './pages/doctor-dasboard.page';
import PageNotFound from './pages/404-page';
import Payment from './pages/payment.page';






export const UserContext = createContext({})



const App = () => {

  const [userAuth, setUserAuth]  = useState({});

  useEffect(() => {
      let userInSession = lookInSession("user")

      userInSession ? setUserAuth(JSON.parse(userInSession))  : setUserAuth({  access_token : null })
  },[])

  return (
      <UserContext.Provider value={{userAuth, setUserAuth}}>
                    <Routes>
                        <Route exact element ={ <Navbar/>}>
                             <Route path='/' element ={<HomePage/>}/>
                            <Route path='/patient-dashboard.page' element={<PatientDashboard/>}/>
                            <Route path='/doctor-dashboard.page' element={<DoctorDashboard/>}/>
                            <Route path='/payment.page' element={<Payment/>}/>
                            <Route path="/signin" element={<UserAuthForm type='sign-in'/>}/>
                            <Route path="/signup" element={<UserAuthForm type='sign-up'/>}/>
                           <Route path='/contactUs-page' element={<ContactUs/>}/>
                           <Route path='/About-page' element={<About/>}/>
                           <Route path ="/how-to-use-page" element={<HowToUse/>}/>
                           <Route path='/privacy-page' element={<Privacy/>}/>
                           <Route path='terms&conditions-page' element={<TermsConditions/>}/>
                           <Route path='*' element={<PageNotFound/>}/>

                        </Route>
                     
                    </Routes>

        </UserContext.Provider>
  )
}

export default App;