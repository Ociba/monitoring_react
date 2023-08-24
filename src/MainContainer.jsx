import React, { Component} from 'react';

import Navbar from './Components/Layouts/Navbar';
import Sidebar from './Components/Layouts/Sidebar';
import Breadcrumb from './Components/Layouts/Breadcrumb';
import Footer from './Components/Layouts/Footer';
import Rightmodal from './Components/Layouts/Rightmodal';
import Dashboard from './Components/Pages/Dashboard';
import Stakeholders from './Components/Pages/Stakeholders';
import GovernmentAgencies from './Components/Pages/GovernmentAgencies';
import LocalCompanies from './Components/Pages/LocalCompanies';
import CompaniesAbroad from './Components/Pages/CompaniesAbroad';
import EmergencyComplaints from './Components/Pages/EmergencyComplaints';
import NormalComplaints from './Components/Pages/NormalComplaints';
import SolvedComplaints from './Components/Pages/SolvedComplaints';
import EscalatedEmergencyComplaints from './Components/Pages/EscalatedEmergencyComplaints';
import EscalatedNormalComplaints from './Components/Pages/EscalatedNormalComplaints';
import EscalatedSolvedComplaints from './Components/Pages/EscalatedSolvedComplaints';
import PublicNormalComplaints from './Components/Pages/PublicNormalComplaints';
import PublicSolvedComplaints from './Components/Pages/PublicSolvedComplaints';


import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class MainContainer extends Component {
    render (){
        return (
            <Router>
                <div id='main-wrapper'>
                    <Navbar />
                    <Sidebar />
                    <div class="page-wrapper"  style={{marginBottom:'50px'}}>
                        <div class="container-fluid" style={{marginTop:'80px'}}>
                        <Breadcrumb/>
                            <div className=''>
                                <Routes>
                                    <Route path='/my-dashboard' element ={<Dashboard />} />
                                    <Route path='/stake-holders' element ={<Stakeholders />} />
                                    <Route path='/government-agencies' element ={<GovernmentAgencies />} />
                                    <Route path='/local-companies' element ={<LocalCompanies />} />
                                    <Route path='/abroad-companies' element ={<CompaniesAbroad />} />
                                    <Route path='/emergency-complaints' element ={<EmergencyComplaints />} />
                                    <Route path='/pending-complaints' element ={<NormalComplaints />} />
                                    <Route path='/solved-complaints' element ={<SolvedComplaints />} />
                                    <Route path='/escalated-emergency-complaints' element ={<EscalatedEmergencyComplaints />} />
                                    <Route path='/escalated-pending-complaints' element ={<EscalatedNormalComplaints />} />
                                    <Route path='/escaled-solved-complaints' element ={<EscalatedSolvedComplaints />} />
                                    <Route path='/public-complaints' element ={<PublicNormalComplaints />} />
                                    <Route path='/public-solved-complaints' element ={<PublicSolvedComplaints />} />
                                    <Route path='/on-going-contracts' element ={<OngoingContracts />} />
                                    <Route path='/expired-contracts' element ={<ExpiredContracts />} />
                                    <Route path='/terminated-contracts' element ={<TerminatedContracts />} />
                                </Routes>
                            </div>
                        <Rightmodal />
                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}
export default MainContainer;