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
import Staff from './Components/Pages/Staff';
import EmergencyComplaints from './Components/Pages/EmergencyComplaints';
import NormalComplaints from './Components/Pages/NormalComplaints';
import SolvedComplaints from './Components/Pages/SolvedComplaints';
import EscalatedEmergencyComplaints from './Components/Pages/EscalatedEmergencyComplaints';
import EscalatedNormalComplaints from './Components/Pages/EscalatedNormalComplaints';
import EscalatedSolvedComplaints from './Components/Pages/EscalatedSolvedComplaints';
import PublicNormalComplaints from './Components/Pages/PublicNormalComplaints';
import PublicSolvedComplaints from './Components/Pages/PublicSolvedComplaints';
import OngoingContracts from './Components/Pages/OngoingContracts';
import ExpiredContracts from './Components/Pages/ExpiredContracts';
import TerminatedContracts from './Components/Pages/TerminatedContracts';
import UgandansAbroadThroughLaborExport from './Components/Pages/UgandansAbroadThroughLaborExport';
import OtherUgandansAbroad from './Components/Pages/OtherUgandansAbroad';
import ComplaintEscalation from './Components/Pages/ComplaintEscalation';
import Roles from './Components/Pages/Roles';
import StakeholdersPermissions from './Components/Pages/StakeholdersPermissions';
import VerifiedUgandans from './Components/Pages/VerifiedUgandans';



import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './Components/Pages/Form';

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
                                    <Route path='/staff' element ={<Staff />} />
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
                                    <Route path='/through-labor-export' element ={<UgandansAbroadThroughLaborExport />} />
                                    <Route path='/other-ugandans' element ={<OtherUgandansAbroad />} />
                                    <Route path='/complaint-escalation' element ={<ComplaintEscalation />} />
                                    <Route path='/roles' element ={<Roles />} />
                                    <Route path='/stakeholders-permissions' element ={<StakeholdersPermissions />} />
                                    <Route path='/scanned-ugandans' element={<VerifiedUgandans />} />
                                    <Route path='/add-stakeholder' element={<Form />} />
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