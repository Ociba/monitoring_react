import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';

class Companies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [], // Initialize an empty array to store fetched data
            searchQuery: '',
            filterType: 'all', // Initial filter is set to 'all'
            sortBy: '', // Initial sorting column is empty
            sortOrder: 'asc', // Initial sorting order is ascending
            currentPage: 1, // Initial page number
            itemsPerPage: 10, // Number of items to display per page
        };
    }

    componentDidMount() {
        // Fetch data from the API
        fetch('http://localhost:8000/api/v1/companies', {
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
                this.setState({ companies: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    getStatusColor(status) {
        switch (status) {
            case 'active':
                return 'success';
            case 'inactive':
                return 'warning';
            case 'blacklisted':
                return 'danger';
            default:
                return '';
        }
    }

    handleSearchInputChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    handleFilterChange = (event) => {
        this.setState({ filterType: event.target.value });
    };

    handleSort = (column) => {
        // If the column is already sorted by, reverse the sorting order
        const sortOrder = this.state.sortBy === column && this.state.sortOrder === 'asc' ? 'desc' : 'asc';

        this.setState({ sortBy: column, sortOrder });
    };

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };

    render() {
        const { companies, searchQuery, filterType, sortBy, sortOrder, currentPage, itemsPerPage } = this.state;

        // Filter companies based on the filterType
        const filteredCompanies = companies.filter((company) => {
            if (filterType === 'all') {
                return true;
            }
            return company.type === filterType;
        });

        // Filter companies based on the search query
        const searchedCompanies = filteredCompanies.filter(
            (company) =>
                company.contact.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                company.registration_number.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Sort companies based on the selected column and sorting order
        const sortedCompanies = [...searchedCompanies].sort((a, b) => {
            const columnA = a[sortBy];
            const columnB = b[sortBy];
            const order = sortOrder === 'asc' ? 1 : -1;

            return columnA < columnB ? -order : columnA > columnB ? order : 0;
        });

        // Calculate pagination variables
        const totalPages = Math.ceil(sortedCompanies.length / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentCompanies = sortedCompanies.slice(startIndex, endIndex);

        const tableRows = currentCompanies.map((company, index) => (
            <tr key={company.id}>
                <td>{index + 1}</td>
                <td>{company.contact.full_name}</td>
                <td>{company.email ? company.email.address : 'N/A'}</td>
                <td>{company.registration_number}</td>
                <td className='text-capitalize'>
                    {company.addresses.city} ({company.addresses.country})
                </td>
                <td>
                    <span className={`badge badge-${company.type === 'local' ? 'primary' : 'info'}`}>
                        {company.type}
                    </span>
                </td>
                <td>
                    <span className={`badge badge-${this.getStatusColor(company.status)}`}>
                        {company.status}
                    </span>
                </td>
                <td>
                    <button className='btn btn-info btn-sm'>View More</button>
                </td>
            </tr>
        ));

        // Define icons for sorting
        const sortIcon = (column) => {
            if (sortBy === column) {
                return sortOrder === 'asc' ? <i className='fas fa-sort-up'></i> : <i className='fas fa-sort-down'></i>;
            } else {
                return null;
            }
        };

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
                        <Breadcrumb />
                        <div className=''>
                            <div className='d-flex justify-content-between mb-3'>
                                <div className='form-inline'>
                                    <input
                                        type='text'
                                        placeholder='Search by name or reg'
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
                                        <option value='all'>All Companies</option>
                                        <option value='local'>Local Companies</option>
                                        <option value='foreign'>Foreign Companies</option>
                                        {/* Add more options for other types */}
                                    </select>
                                </div>
                            </div>
                            <table className='table table-striped'>
                                <thead>
                                    <tr className='table-info'>
                                        <th>#</th>
                                        <th onClick={() => this.handleSort('contact.full_name')}>
                                            Name {sortIcon('contact.full_name')}
                                        </th>
                                        <th>Email</th>
                                        <th onClick={() => this.handleSort('registration_number')}>
                                            Registration Number {sortIcon('registration_number')}
                                        </th>
                                        <th>Country</th>
                                        <th>Type</th>
                                        <th>Status</th>
                                        <th>Options</th>
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
                                <div className='pagination-info mt-2 ml-2 mb-2'>
                                    Page {currentPage} of {totalPages}, Showing {startIndex + 1}-{endIndex} of {sortedCompanies.length} items
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

export default Companies;
