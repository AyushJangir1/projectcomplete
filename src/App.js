import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Homepage';
import People from './Pages/People/People';
import HostelDetails from "./Pages/HostelDetails/HostelDetails";
import HostelRules from "./Pages/HostelRules/HostelRules";
import SignInPage from './Pages/SignInPage/SignInPage';
import StudentDashboard from "./Pages/StudentDashboard/StudentDashboard";
import FAQs from "./Pages/StudentDashboard/FAQs";
import HelpDesk from "./Pages/StudentDashboard/HelpDesk";
import HostelForm from "./Pages/StudentDashboard/HostelForm";
import MessAndLodging from "./Pages/StudentDashboard/MessAndLodging";
import Account from "./Pages/StudentDashboard/Account";
import PreviouslyRaisedQueries from "./Pages/StudentDashboard/PreviouslyRaisedQueries";
import Createaccount from "./Pages/Createaccount/createaccount";
import AdministrationDashboard from "./Pages/AdministrationDashboard/AdministrationDashboard";
import AdministrationFaqs from "./Pages/AdministrationDashboard/AdministrationFaqs";
import AdministrationMessAndLodging from "./Pages/AdministrationDashboard/AdministrationMessAndLodging";
import AdministrationAccount from "./Pages/AdministrationDashboard/AdministrationAccount";
import AdministrationHostelForm from "./Pages/AdministrationDashboard/AdministrationHostelForm";
import AdministrationHelpDesk from "./Pages/AdministrationDashboard/AdministrationHelpDesk";
// import Joyride from 'react-joyride';

function App(props) {
  const [loading, isLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const get=(value1,value2)=>{
    setLoginStatus(value1);
    setRegisterStatus(value2);
    console.log(value1);
  };
  
  return (
    <div onLoad={() => isLoading(false)}>
      <BrowserRouter>
        <Header value1={loginStatus} value2={registerStatus}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/people" element={<People />} />
          <Route path="/hostel-details" element={<HostelDetails />} />
          <Route path="/hostel-rules" element={<HostelRules />} />
          <Route path='/sign-in-page' element={<SignInPage getdata={get}/>} />
          <Route path="/studentDashboard" element={<StudentDashboard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/helpDesk" element={<HelpDesk />} />
          <Route path="/hostelForm" element={<HostelForm />} />
          <Route path="/messAndLodging" element={<MessAndLodging />} />
          <Route path="/account" element={<Account />} />
          <Route path="/previouslyRaisedQueries" element={<PreviouslyRaisedQueries />} />
          <Route path="/createaccount" element={<Createaccount />} /> 
          <Route path="/administratorDashboard" element={<AdministrationDashboard />} />
          <Route path="/administratorFaqs" element={<AdministrationFaqs />} />
          <Route path="/administratorMessAndLodging" element={<AdministrationMessAndLodging />} />
          <Route path="/administratorAccount" element={<AdministrationAccount />} />
          <Route path="/administratorHostelForm" element={<AdministrationHostelForm />} />
          <Route path="/administratorHelpDesk" element={<AdministrationHelpDesk />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
