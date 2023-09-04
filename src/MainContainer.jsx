import React, { Component} from 'react';

import Dashboard from './Components/Pages/Dashboard';
import GovernmentAgencies from './Components/Pages/GovernmentAgencies';
import Companies from './Components/Pages/Companies';
import Staff from './Components/Pages/Staff';
import EmergencyComplaints from './Components/Pages/EmergencyComplaints';
import NormalComplaints from './Components/Pages/NormalComplaints';
import SolvedComplaints from './Components/Pages/SolvedComplaints';
import EscalatedEmergencyComplaints from './Components/Pages/EscalatedEmergencyComplaints';
import EscalatedNormalComplaints from './Components/Pages/EscalatedNormalComplaints';
import EscalatedSolvedComplaints from './Components/Pages/EscalatedSolvedComplaints';
import PublicNormalComplaints from './Components/Pages/PublicNormalComplaints';
import PublicSolvedComplaints from './Components/Pages/PublicSolvedComplaints';
import Contracts from './Components/Pages/Contracts';
import Travellers from './Components/Pages/Travellers';
import DomesticWorkers from './Components/Pages/DomesticWorkers';
import ComplaintEscalation from './Components/Pages/ComplaintEscalation';
import Roles from './Components/Pages/Roles';
import Login from './Components/Pages/Login';



import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Form from './Components/Pages/Form';

class MainContainer extends Component {
    render (){
        return (
            <Router>
                
                
                <div className=''>
                                
                    <Routes>
                        <Route path='/' element ={<Login />} />
                        <Route path='/dashboard' element ={<Dashboard />} />
                        <Route path='/government-agencies' element ={<GovernmentAgencies />} />
                        <Route path='/companies' element ={<Companies />} />
                        <Route path='/staff' element ={<Staff />} />
                        <Route path='/emergency-complaints' element ={<EmergencyComplaints />} />
                        <Route path='/pending-complaints' element ={<NormalComplaints />} />
                        <Route path='/solved-complaints' element ={<SolvedComplaints />} />
                        <Route path='/escalated-emergency-complaints' element ={<EscalatedEmergencyComplaints />} />
                        <Route path='/escalated-pending-complaints' element ={<EscalatedNormalComplaints />} />
                        <Route path='/escaled-solved-complaints' element ={<EscalatedSolvedComplaints />} />
                        <Route path='/public-complaints' element ={<PublicNormalComplaints />} />
                        <Route path='/public-solved-complaints' element ={<PublicSolvedComplaints />} />
                        <Route path='/contracts' element ={<Contracts />} />
                        <Route path='/travellers' element ={<Travellers />} />
                        <Route path='/domestic-workers' element ={<DomesticWorkers />} />
                        <Route path='/complaint-escalation' element ={<ComplaintEscalation />} />
                        <Route path='/roles' element ={<Roles />} />
                        <Route path='/add-stakeholder' element={<Form />} />
                    </Routes>
                </div>
    
            </Router>
        );
    }
}
export default MainContainer;