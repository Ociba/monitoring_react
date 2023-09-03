import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';

class Contracts extends Component {
    constructor() {
        super();
        this.state = {
            contracts: [],
            filteredContracts: [],
            searchFilter: '',
            statusFilter: 'all', // Default filter
            currentPage: 1,
            contractsPerPage: 10,
        };
    }

    componentDidMount() {
        // Fetch contract data from the API endpoint
        fetch('http://localhost:8000/api/v1/contracts/', {
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
                this.setState({ contracts: data, filteredContracts: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleFilterChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value }, this.filterContracts);
    };

    filterContracts = () => {
        const { contracts, searchFilter, statusFilter } = this.state;

        const filteredContracts = contracts.filter((contract) => {
            const statusMatch = statusFilter === 'all' || contract.status.toLowerCase() === statusFilter;
            const searchMatch =
                contract.domestic_worker.traveller.user.first_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                contract.domestic_worker.traveller.user.last_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                contract.domestic_worker.local_company.contact.full_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                contract.domestic_worker.foreign_company.contact.full_name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                contract.start_date.toLowerCase().includes(searchFilter.toLowerCase());

            return statusMatch && searchMatch;
        });

        this.setState({ filteredContracts });
    };

    handleStatusFilterChange = (e) => {
        const { value } = e.target;
        this.setState({ statusFilter: value }, this.filterContracts);
    };

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    render() {
        const {
            filteredContracts,
            searchFilter,
            statusFilter,
            currentPage,
            contractsPerPage,
        } = this.state;

        // Calculate pagination values
        const indexOfLastContract = currentPage * contractsPerPage;
        const indexOfFirstContract = indexOfLastContract - contractsPerPage;
        const currentContracts = filteredContracts.slice(indexOfFirstContract, indexOfLastContract);

        // Pagination logic
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredContracts.length / contractsPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className='page-wrapper' style={{ marginBottom: '50px' }}>
                    <div className='container-fluid' style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName='Contracts' breadcrumbs={['Home', 'Contracts']} />

                        <div className=''>
                            {/* Filter and Search Inputs */}
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <label>Search:</label>
                                    <input
                                        type="text"
                                        name="searchFilter"
                                        className='form-control'
                                        value={searchFilter}
                                        onChange={this.handleFilterChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Filter by Status:</label>
                                    <select name="statusFilter" 
                                        className='form-control' value={statusFilter} onChange={this.handleStatusFilterChange}>
                                        <option value="all">All</option>
                                        <option value="running">Running</option>
                                        <option value="expired">Expired</option>
                                        <option value="terminated">Terminated</option>
                                    </select>
                                </div>
                            </div>
                            {/* Filter and Search Inputs End */}

                            <table className="table table-striped">
                                <thead className="table-info">
                                    <tr>
                                        <th>DW Names</th>
                                        <th>Local Company</th>
                                        <th>Foreign Company</th>
                                        <th>Start</th>
                                        <th>Status</th>
                                        <th>Incomer</th>
                                        <th>Consent Letter</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentContracts.map((contract) => (
                                        <tr key={contract.id}>
                                            <td>
                                                {contract.domestic_worker.traveller.user.first_name}{' '}
                                                {contract.domestic_worker.traveller.user.last_name}
                                            </td>
                                            <td>{contract.domestic_worker.local_company.contact.full_name}</td>
                                            <td>{contract.domestic_worker.foreign_company.contact.full_name}</td>
                                            <td>{contract.start_date}</td>
                                            <td>
                                                {contract.status === 'running' && (
                                                    <span className="badge badge-success">{contract.status}</span>
                                                )}
                                                {contract.status === 'expired' && (
                                                    <span className="badge badge-warning text-white">{contract.status}</span>
                                                )}
                                                {contract.status === 'terminated' && (
                                                    <span className="badge badge-danger">{contract.status}</span>
                                                )}
                                            </td>
                                            <td>
                                                <a href={contract.incomer.file} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i> View Document
                                                </a>
                                            </td>
                                            <td>
                                                <a href={contract.consent_letter.file} target="_blank" rel="noopener noreferrer">
                                                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i> View Document
                                                </a>
                                            </td>
                                            <td>
                                                <button className='btn btn-info btn-sm'>View More</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    Showing {indexOfFirstContract + 1} to {Math.min(indexOfLastContract, filteredContracts.length)} of {filteredContracts.length} elements
                                </div>
                                <ul className="pagination">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => this.handlePageChange(currentPage - 1)}>
                                            Previous
                                        </button>
                                    </li>
                                    {pageNumbers.map((number) => (
                                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                            <button className="page-link" onClick={() => this.handlePageChange(number)}>
                                                {number}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === Math.ceil(filteredContracts.length / contractsPerPage) ? 'disabled' : ''}`}>
                                        <button className="page-link" onClick={() => this.handlePageChange(currentPage + 1)}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
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

export default Contracts;
