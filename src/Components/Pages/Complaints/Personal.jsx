import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import Rightmodal from '../Rightmodal';
import Footer from '../Footer';
import BASE_URL from '../../apiEndPoints';

class PersonalComplaints extends Component {
    constructor() {
        super();
        this.state = {
            complaints: [], // Initialize an empty array for complaints data
            filteredComplaints: [], // Initialize an empty array for filtered complaints
            statusFilter: 'all', // Initialize status filter with 'all'
            priorityFilter: 'all', // Initialize priority filter with 'all'
            searchQuery: '', // Initialize search query
            currentPage: 1, // Initialize current page
            itemsPerPage: 10, // Number of items per page
        };
    }

    componentDidMount() {
        // Fetch complaints data from the API endpoint
        this.fetchComplaints();
    }

    fetchComplaints = () => {
        // Replace the URL with your actual API endpoint
        fetch(BASE_URL+'/api/v1/complaints/personal/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.detail) {
                    window.location.href = '/';
                }
                this.setState({ complaints: data, filteredComplaints: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleStatusFilterChange = (e) => {
        const statusFilter = e.target.value;
        this.setState({ statusFilter, currentPage: 1 }, this.filterComplaints);
    }

    handlePriorityFilterChange = (e) => {
        const priorityFilter = e.target.value;
        this.setState({ priorityFilter, currentPage: 1 }, this.filterComplaints);
    }

    handleSearchInputChange = (e) => {
        const searchQuery = e.target.value;
        this.setState({ searchQuery, currentPage: 1 }, this.filterComplaints);
    }

    handlePageChange = (newPage) => {
        this.setState({ currentPage: newPage });
    }

    filterComplaints = () => {
        const { complaints, statusFilter, priorityFilter, searchQuery, currentPage, itemsPerPage } = this.state;
    
        const filteredComplaints = complaints.filter((complaint) => {
            // Check status filter
            if (statusFilter !== 'all' && complaint.complaint.status !== statusFilter) {
                return false;
            }
    
            // Check priority filter
            if (priorityFilter !== 'all' && complaint.complaint.priority !== priorityFilter) {
                return false;
            }
    
            // Check search query in Complainer's name and Bleached Clause title
            const complainerName = complaint.complaint.traveller.contact.full_name.toLowerCase();
            if (
                (searchQuery && !complainerName.includes(searchQuery.toLowerCase()))
            ) {
                return false;
            }
    
            return true;
        });
    
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const itemsToDisplay = filteredComplaints.slice(startIndex, endIndex);
    
        this.setState({ filteredComplaints: itemsToDisplay });
    }

    removeUnderScore(documentType) {
        return documentType.split('_').map((part) => part.charAt(0).toLocaleUpperCase() + part.slice(1)).join(' ');
    }

    render() {
        const { filteredComplaints, statusFilter, priorityFilter, searchQuery, currentPage, itemsPerPage, complaints } = this.state;

        const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Personal Complaints" breadcrumbs={['Home', 'Personal Complaints']}/>
                        <div className="col-12">
                            <div className='d-flex justify-content-between mb-3'>
                                <div className="mb-3">
                                    <label>Status Filter:</label>
                                    <select className="form-control" value={statusFilter} onChange={this.handleStatusFilterChange}>
                                        <option value="all">All</option>
                                        <option value="pending">Pending</option>
                                        <option value="solved">Solved</option>
                                        <option value="escalated">Escalated</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Priority Filter:</label>
                                    <select className="form-control" value={priorityFilter} onChange={this.handlePriorityFilterChange}>
                                        <option value="all">All</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label>Search By Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={this.handleSearchInputChange}
                                    />
                                </div>
                            </div>
                            <table className='table table-striped'>
                                <thead className='table-info'>
                                    <tr>
                                        <th>#</th>
                                        <th>Complainer</th>
                                        <th>Complaint Message</th>
                                        <th>Status</th>
                                        <th>Priority</th>
                                        <th>Travel Visa</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredComplaints.map((complaint, index) => (
                                        <tr key={complaint.id}>
                                            <td>{index+1}</td>
                                            <td>{complaint.complaint.traveller.contact.full_name}</td>
                                            <td>{complaint.message}</td>
                                            <td>
                                                {complaint.complaint.status === 'pending' && (
                                                    <span className="badge badge-warning text-white">{complaint.complaint.status}</span>
                                                )}
                                                {complaint.complaint.status === 'solved' && (
                                                    <span className="badge badge-success">{complaint.complaint.status}</span>
                                                )}
                                                {complaint.complaint.status === 'escalated' && (
                                                    <span className="badge badge-danger">{complaint.complaint.status}</span>
                                                )}
                                            </td>
                                            <td>
                                                {complaint.complaint.priority === 'low' && (
                                                    <span className="badge badge-primary">{complaint.complaint.priority}</span>
                                                )}
                                                {complaint.complaint.priority === 'high' && (
                                                    <span className="badge badge-danger">{complaint.complaint.priority}</span>
                                                )}
                                                {complaint.complaint.priority === 'medium' && (
                                                    <span className="badge badge-warning">{complaint.complaint.priority}</span>
                                                )}
                                            </td>
                                            <td>
                                                {complaint.complaint.traveller.travel_visa === 'domestic_worker' ? (
                                                    <span className="badge badge-primary">
                                                        {this.removeUnderScore(complaint.complaint.traveller.travel_visa)}
                                                    </span>
                                                ) : complaint.complaint.traveller.travel_visa === 'student_visa' ? (
                                                    <span className="badge badge-warning text-white">
                                                        {this.removeUnderScore(complaint.complaint.traveller.travel_visa)}
                                                    </span>
                                                ) : (
                                                    <span className="badge badge-info">
                                                        {this.removeUnderScore(complaint.complaint.traveller.travel_visa)}
                                                    </span>
                                                )}
                                            </td>
                                            <td>
                                                <button className='btn btn-info btn-sm'>View More</button> &nbsp;
                                                <button className='btn btn-primary btn-sm'>Trace</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-between">
                                <p>Showing {filteredComplaints.length} of {complaints.length} complaints</p>
                                <nav>
                                    <ul className="pagination">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => this.handlePageChange(currentPage - 1)}>Previous</button>
                                        </li>
                                        {Array.from({ length: totalPages }).map((_, index) => (
                                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                                <button className="page-link" onClick={() => this.handlePageChange(index + 1)}>{index + 1}</button>
                                            </li>
                                        ))}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button className="page-link" onClick={() => this.handlePageChange(currentPage + 1)}>Next</button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <Rightmodal />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default PersonalComplaints;
