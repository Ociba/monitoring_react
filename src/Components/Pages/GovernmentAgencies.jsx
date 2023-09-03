import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';

class GovernmentAgencies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agencies: [], // Initialize an empty array to store fetched data
            searchQuery: '',
            filterType: 'all', // Initial filter is set to 'all'
            currentPage: 1, // Initial page number
            itemsPerPage: 10, // Number of items to display per page
        };
    }

    componentDidMount() {
        // Fetch data from the API
        fetch('http://localhost:8000/api/v1/government_bodies/', {
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
                this.setState({ agencies: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleSearchInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleFilterChange = (event) => {
        this.setState({ filterType: event.target.value });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { agencies, searchQuery, filterType, currentPage, itemsPerPage } = this.state;

        // Filter agencies based on the filterType
        const filteredAgencies = agencies.filter((agency) => {
            if (filterType === 'all') {
                return true;
            }
            return agency.type === filterType;
        });

        // Filter agencies based on the search query
        const searchedAgencies = filteredAgencies.filter((agency) =>
            agency.contact.full_name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Calculate pagination variables
        const totalPages = Math.ceil(searchedAgencies.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentAgencies = searchedAgencies.slice(startIndex, endIndex);

        const tableRows = currentAgencies.map((agency, index) => (
            <tr key={agency.id}>
                <td>{index + 1}</td>
                <td>{agency.contact.full_name}</td>
                <td>
                    <span className={`badge badge-${agency.type === 'ministry' ? 'primary' : 'info'}`}>
                        {agency.type}
                    </span>
                </td>
                <td>{agency.email.address}</td>
                <td>{agency.phones[index]?.number}</td>
                <td>{agency.addresses.city}</td>
                <td>
                    <button className='btn btn-info btn-sm'>View More</button>
                </td>
            </tr>
        ));

        // Generate pagination buttons
        const paginationButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            paginationButtons.push(
                <button
                    key={i}
                    className={`btn ${i === currentPage ? 'btn-primary' : 'btn-light'}`}
                    onClick={() => this.handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className='page-wrapper' style={{ marginBottom: '50px' }}>
                    <div className='container-fluid' style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Government Agencies" breadcrumbs={['Home', 'Government Agencies']}/>
                        <div className=''>
                            <div className='d-flex justify-content-between mb-3'>
                                <div className='form-inline'>
                                    <input
                                        type='text'
                                        placeholder='Search by name'
                                        value={searchQuery}
                                        onChange={this.handleSearchInputChange}
                                        className='form-control'
                                    />
                                </div>
                                <div className='form-inline'>
                                    <select
                                        onChange={this.handleFilterChange}
                                        value={filterType}
                                        className='form-control ml-2'
                                    >
                                        <option value='all'>All Agencies</option>
                                        <option value='ministry'>Ministry</option>
                                        <option value='embassy'>Embassy</option>
                                    </select>
                                </div>
                            </div>
                            <table className='table table-striped'>
                                <thead>
                                    <tr className='table-info'>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>City</th>
                                        <th>Options</th> {/* Options column header */}
                                    </tr>
                                </thead>
                                <tbody>{tableRows}</tbody>
                            </table>
                            <div className='pagination'>
                                <button
                                    className='btn btn-light'
                                    onClick={() => this.handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                {paginationButtons}
                                <button
                                    className='btn btn-light'
                                    onClick={() => this.handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    Next
                                </button>
                                <div className='pagination-info mt-2 ml-3 mb-2'>
                                    Page {currentPage} of {totalPages}, Showing {startIndex + 1}-{endIndex} of {searchedAgencies.length} items
                                </div>
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

export default GovernmentAgencies;
