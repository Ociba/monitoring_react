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

    render() {
        const { agencies, searchQuery, filterType } = this.state;

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

        const tableRows = searchedAgencies.map((agency, index) => (
            <tr key={agency.id}>
                <td>{index+1}</td>
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
                                <tbody>
                                    {tableRows}
                                </tbody>
                            </table>
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
