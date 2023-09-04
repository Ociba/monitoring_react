import React, { Component } from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Breadcrumb from './Breadcrumb'
import Rightmodal from './Rightmodal'
import Footer from './Footer'
import BASE_URL from '../apiEndPoints';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            UsersList: [],
            searchInput: '', // Use a single search input
            activeFilter: 'all', // Default filter is 'all'
            currentPage: 1,
            itemsPerPage: 10,
            filteredList: [], // Initialize as an empty array
        };
    }

    componentDidMount() {
        // Fetch Users data from the API endpoint
        fetch(BASE_URL + '/api/v1/companies/users/', {
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
                this.setState({ UsersList: data, filteredList: data }); // Populate filteredList here
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleFilterChange = (e) => {
        const filter = e.target.value;
        this.setState({ activeFilter: filter }, this.applyFilters);
    }

    handleSearchInputChange = (e) => {
        this.setState({ searchInput: e.target.value }, this.applyFilters);
    }

    applyFilters = () => {
        const { UsersList, activeFilter, searchInput } = this.state;

        // Filter by active status
        const filteredByStatus = UsersList.filter((Users) => {
            if (activeFilter === 'all') return true;
            return activeFilter === 'active' ? Users.user.is_active : !Users.user.is_active;
        });

        // Filter by name and company
        const filteredByNameAndCompany = filteredByStatus.filter((Users) =>
            Users.user.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            Users.company.contact.full_name.toLowerCase().includes(searchInput.toLowerCase())
        );

        this.setState({ filteredList: filteredByNameAndCompany });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    render() {
        const { filteredList, currentPage, itemsPerPage } = this.state;

        // Pagination calculations
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(filteredList.length / itemsPerPage);

        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div class="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div class="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Users" breadcrumbs={['Home', 'Users']} />

                        <div className=''>
                            <div className="d-flex justify-content-between mb-3">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder="Search by name or company..."
                                        value={this.state.searchInput}
                                        onChange={this.handleSearchInputChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <select className='form-control' onChange={this.handleFilterChange} value={this.state.activeFilter}>
                                        <option value="all">All</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <table className="table table-striped">
                                <thead className="table-info">
                                    <tr>
                                        <th>Names</th>
                                        <th>Company Name</th>
                                        <th>Date Joined</th>
                                        <th>Last Login</th>
                                        <th>Account Status</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((Users) => (
                                        <tr key={Users.id}>
                                            <td>
                                                {Users.user.first_name} {Users.user.last_name}
                                            </td>
                                            <td>{Users.company.contact.full_name}</td>
                                            <td>{new Date(Users.user.date_joined).toLocaleDateString()}</td>
                                            <td>{Users.user.last_login || 'N/A'}</td>
                                            <td>
                                                {Users.user.is_active ? (
                                                    <span className="badge badge-success">Active</span>
                                                ) : (
                                                    <span className="badge badge-danger">Inactive</span>
                                                )}
                                            </td>
                                            <td><button className="btn btn-info btn-sm">View More</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pagination">
                                <button
                                    onClick={() => this.handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="btn btn-sm btn-primary"
                                >
                                    Previous
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => this.handlePageChange(i + 1)}
                                        className={currentPage === i + 1 ? 'active' : ''}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => this.handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="btn btn-sm btn-primary"
                                >
                                    Next
                                </button>
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

export default Users;
