import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import Rightmodal from './Rightmodal'
import Footer from './Footer'

class EscalatedEmergencyComplaints extends Component {
    render () {
        return (
            <div id='main-wrapper'>
                    <Navbar />
                    <Sidebar />
                    <div class="page-wrapper"  style={{marginBottom:'50px'}}>
                        <div class="container-fluid" style={{marginTop:'80px'}}>
                        <Breadcrumb/>
                        <div id='main-wrapper'>
                    <Navbar />
                    <Sidebar />
                    <div class="page-wrapper"  style={{marginBottom:'50px'}}>
                        <div class="container-fluid" style={{marginTop:'80px'}}>
                        <Breadcrumb/>
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title"> Emergency Emergency Complaints</h4>
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Category</th>
                                                <th>Size</th>
                                                <th>Bedrooms</th>
                                                <th>Batherooms</th>
                                                <th>Garage</th>
                                                <th>Location</th>
                                                <th>Status</th>
                                                <th>Price</th>
                                                <th>Date</th>
                                                <th>Option</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                    <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        <a href='#' className='btn waves-effect waves-light btn-info btn-sm'>Edit</a>
                                                    </td>
                                                    </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 text-right mb-2">
                                            <button className="btn btn-sm btn-primary mb-2 text-white">Add Accomodation</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Rightmodal />
                        </div>
                    </div>
                    <Footer />
                    </div>
                        <Rightmodal />
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
export default EscalatedEmergencyComplaints;