import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';
import BASE_URL from '../apiEndPoints';

class SystemUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: [], // Initialize an empty array for users' data
            searchInput: '', // Initialize the search input
            currentPage: 1, // Initialize the current page
            itemsPerPage: 10, // Set items per page to 10
        };
    }

    componentDidMount() {
        // Fetch users' data from the API endpoint
        this.fetchUsers();
    }

    fetchUsers = () => {
        fetch(BASE_URL + '/api/v1/users/', {
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
                this.setState({ users: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleSearchInputChange = (e) => {
        this.setState({ searchInput: e.target.value });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    render() {
        const { users, searchInput, currentPage, itemsPerPage } = this.state;

        // Filter users by search input
        const filteredUsers = users.filter((user) =>
            user.username.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.email.toLowerCase().includes(searchInput.toLowerCase())
        );

        // Pagination calculations
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
        const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="System Users" breadcrumbs={['Home', 'All Users']} />                        <div className=''>
                        <div className="d-flex justify-content-between mb-3">
                            <div className="mb-3">
                                <input
                                    className='form-control'
                                    type="text"
                                    placeholder="Search by username"
                                    value={searchInput}
                                    onChange={this.handleSearchInputChange}
                                />
                            </div>
                            </div>
                            <table className="table table-striped">
                                <thead className="table-info">
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Full Names</th>
                                        <th>Account Status</th>
                                        <th>Last Login</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.map((user, index) => (
                                        <tr key={index}>
                                            <td>{user.username}</td>
                                            <td>{user.email == "" ? user.username:user.email}</td>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.first_name} {user.last_name}</td>
                                            <td>
                                                {user.is_active ? (
                                                    <span className="badge badge-success">Active</span>
                                                ) : (
                                                    <span className="badge badge-danger">Inactive</span>
                                                )}
                                            </td>
                                            <td>{user.last_login == null ? "Never Logged In": new Date(user.last_login).toLocaleDateString()}</td>
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
                                &nbsp;
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

export default SystemUsers;
