import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import Rightmodal from './Rightmodal';
import Footer from './Footer';
import BASE_URL from '../apiEndPoints';

class DomesticWorkers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domesticWorkers: [],
            searchInput: '',
            filteredWorkers: [],
            currentPage: 1,
            workersPerPage: 10, // Adjust the number of workers per page
        };
    }

    componentDidMount() {
        // Fetch data from the API
        fetch(BASE_URL+'/api/v1/travellers/dw/', {
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
                this.setState({ domesticWorkers: data, filteredWorkers: data });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    handleSearchChange = (e) => {
        const searchInput = e.target.value;
        const { domesticWorkers } = this.state;

        // Filter workers based on search input
        const filteredWorkers = domesticWorkers.filter((worker) =>
            worker.traveller.contact.full_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            worker.local_company.contact.full_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            worker.foreign_company.contact.full_name.toLowerCase().includes(searchInput.toLowerCase())
        );

        this.setState({ searchInput, filteredWorkers, currentPage: 1 });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    renderDomesticWorkersTable() {
        const { filteredWorkers, currentPage, workersPerPage } = this.state;
        const indexOfLastWorker = currentPage * workersPerPage;
        const indexOfFirstWorker = indexOfLastWorker - workersPerPage;
        const currentWorkers = filteredWorkers.slice(indexOfFirstWorker, indexOfLastWorker);

        const totalPages = Math.ceil(filteredWorkers.length / workersPerPage);

        return (
            <div>
                <div className="d-flex justify-content-between">
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="Search by name or company..."
                            className='form-control'
                            value={this.state.searchInput}
                            onChange={this.handleSearchChange}
                        />
                    </div>
                </div>
                <table className="table table-striped">
                    <thead className="table-info">
                        <tr>
                            <th>#</th>
                            <th>Names</th>
                            <th>Education Level</th>
                            <th>Local Company</th>
                            <th>Foreign Company</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentWorkers.map((worker, index) => (
                            <tr key={worker.id}>
                                <td>{index + 1}</td>
                                <td>{worker.traveller.contact.full_name}</td>
                                <td>{worker.traveller.education_level.toUpperCase()}</td>
                                <td>{worker.local_company.contact.full_name}</td>
                                <td>{worker.foreign_company.contact.full_name}</td>
                                <td>
                                    <button className='btn btn-info btn-sm'>View More</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <button
                        onClick={() => this.handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`btn btn-sm btn-primary ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        Previous
                    </button>
                    &nbsp;
                    {/* {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => this.handlePageChange(i + 1)}
                            className={`btn btn-sm ${currentPage === i + 1 ? 'active btn-primary' : 'btn-light'}`}
                        >
                            {i + 1}
                        </button>
                    ))} */}
                    <button
                        onClick={() => this.handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`btn btn-sm btn-primary ${currentPage === totalPages ? 'disabled' : ''}`}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Domestic Workers" breadcrumbs={['Home', 'Domestic Workers']}/>
                        <div className="">
                            {this.renderDomesticWorkersTable()}
                        </div>
                        <Rightmodal />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DomesticWorkers;
