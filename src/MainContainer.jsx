import React, { Component} from 'react';

import Navbar from './Components/Layouts/Navbar';
import Sidebar from './Components/Layouts/Sidebar';
import Breadcrumb from './Components/Layouts/Breadcrumb';
import Footer from './Components/Layouts/Footer';
import Rightmodal from './Components/Layouts/Rightmodal';


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
                                    {/* <Route path='/invoice' element ={<Invoice />} /> */}
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