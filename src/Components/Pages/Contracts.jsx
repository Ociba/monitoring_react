import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import Rightmodal from './Rightmodal'
import Footer from './Footer'

class Contracts extends Component {
    render () {
        return (
            <div id='main-wrapper'>
                    <Navbar />
                    <Sidebar />
                    <div class="page-wrapper"  style={{marginBottom:'50px'}}>
                        <div class="container-fluid" style={{marginTop:'80px'}}>
                        <Breadcrumb pageName="Contracts" breadcrumbs={['Home', 'Contracts']}/>
            <div className=''>
                Testing Ongoing Contracts
            </div>
            
            <Rightmodal />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
export default Contracts;