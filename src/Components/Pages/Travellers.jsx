import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';
import BASE_URL from '../apiEndPoints';

class Travellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            travellers: [],
            filteredTravellers: [],
            searchQuery: '',
            filterType: 'all',
            filterVisaType: 'all',
            currentPage: 1,
            itemsPerPage: 10,
        };
    }

    componentDidMount() {
        fetch(BASE_URL+'/api/v1/travellers/', {
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
                this.setState({ travellers: data, filteredTravellers: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleFilterChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, this.filterTravellers);
    };

    handleSearchChange = (event) => {
        const value = event.target.value;
        this.setState({ searchQuery: value }, this.filterTravellers);
    };

    filterTravellers() {
        const { travellers, filterType, searchQuery, filterVisaType } = this.state;

        const filteredTravellers = travellers.filter((traveller) => {
            // Filter by travel type
            const filterTypeMatch = filterType === 'all' || traveller.travel_type === filterType;

            // Filter by Visa Type
            const filterVisaTypeMatch = filterVisaType === 'all' || traveller.travel_visa === filterVisaType;

            // Filter by search query (name and document number)
            const fullName = traveller.contact.full_name.toLowerCase();
            const documentNumber = traveller.document_number.toLowerCase();
            const query = searchQuery.toLowerCase();

            return filterTypeMatch && filterVisaTypeMatch && (fullName.includes(query) || documentNumber.includes(query));
        });

        this.setState({ filteredTravellers });
    }

    removeUnderScore(documentType) {
        return documentType.split('_').map((part) => part.charAt(0).toLocaleUpperCase() + part.slice(1)).join(' ');
    }

    changePage(newPage) {
        this.setState({ currentPage: newPage });
    }

    renderTable() {
        const { filteredTravellers, filterType, searchQuery, filterVisaType, currentPage, itemsPerPage } = this.state;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentTravellers = filteredTravellers.slice(startIndex, endIndex);

        return (
            <div>
                <div className="d-flex justify-content-between mb-3">
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Name or Doc Number" value={searchQuery} onChange={this.handleSearchChange} />
                    </div>
                    <div className="mb-3">
                        <select name="filterVisaType" value={filterVisaType} onChange={this.handleFilterChange} className="form-control">
                            <option value="all">All Visa Types</option>
                            <option value="domestic_worker">Domestic Worker Visa</option>
                            <option value="student_visa">Student Visa</option>
                            <option value="other">Other Visa</option>
                        </select>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead className="table-info">
                        <tr>
                            <th>#</th>
                            <th>Names</th>
                            <th>Parent</th>
                            <th>Next Of Kin</th>
                            <th>Document Type</th>
                            <th>Document Number</th>
                            <th>Visa Type</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTravellers.map((traveller, index) => (
                            <tr key={traveller.id}>
                                <td>{startIndex + index + 1}</td>
                                <td>{traveller.contact.full_name}</td>
                                <td>{traveller.parent.full_name}</td>
                                <td>{traveller.next_of_kin.full_name}</td>
                                <td>
                                    {traveller.document_type === 'national_id' ? (
                                        <span className="badge badge-primary">
                                            {this.removeUnderScore(traveller.document_type)}
                                        </span>
                                    ) : (
                                        <span className="badge badge-info">
                                            {this.removeUnderScore(traveller.document_type)}
                                        </span>
                                    )}
                                </td>
                                <td>{traveller.document_number}</td>
                                <td>
                                    {traveller.travel_visa === 'domestic_worker' ? (
                                        <span className="badge badge-primary">
                                            {this.removeUnderScore(traveller.travel_visa)}
                                        </span>
                                    ) : traveller.travel_visa === 'student_visa' ? (
                                        <span className="badge badge-warning text-white">
                                            {this.removeUnderScore(traveller.travel_visa)}
                                        </span>
                                    ) : (
                                        <span className="badge badge-info">
                                            {this.removeUnderScore(traveller.travel_visa)}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    <button className="btn btn-info btn-sm">View More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    renderPagination() {
        const { filteredTravellers, currentPage, itemsPerPage } = this.state;
        const totalPages = Math.ceil(filteredTravellers.length / itemsPerPage);

        return (
            <div className="pagination mb-2">
                <button className='btn btn-primary' onClick={() => this.changePage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                &nbsp;
                <button className='btn btn-primary' onClick={() => this.changePage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>

                <span className='mt-2 ml-2 mb-2'>{`Page ${currentPage} of ${totalPages}`}</span>
            </div>
        );
    }

    render() {
        return (
            <div id="main-wrapper">
                <Navbar />
                <Sidebar />
                <div className="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Travellers" breadcrumbs={['Home', 'Travellers']}/>
                        <div className="">
                            {this.renderTable()}
                            {this.renderPagination()}
                        </div>
                        <Rightmodal />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Travellers;
