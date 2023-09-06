import React, { Component} from 'react';

import Dashboard from './Components/Pages/Dashboard';
import GovernmentAgencies from './Components/Pages/GovernmentAgencies';
import Companies from './Components/Pages/Companies';
import SystemUsers from './Components/Pages/SystemUsers';
import CompanyUsers from './Components/Pages/CompanyUsers';
import EmergencyComplaints from './Components/Pages/Complaints/Emergency';
import PersonalComplaints from './Components/Pages/Complaints/Personal';
import PublicComplaints from './Components/Pages/Complaints/Public';
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
                        <Route path='/all-users' element ={<SystemUsers />} />
                        <Route path='/company-users' element ={<CompanyUsers />} />
                        <Route path='/complaints/emergency' element ={<EmergencyComplaints />} />
                        <Route path='/complaints/personal' element ={<PersonalComplaints />} />
                        <Route path='/complaints/public' element ={<PublicComplaints />} />
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