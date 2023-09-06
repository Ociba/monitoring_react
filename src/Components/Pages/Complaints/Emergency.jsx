import React, { Component } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Breadcrumb from '../Breadcrumb';
import Rightmodal from '../Rightmodal';
import Footer from '../Footer';

class EmergencyComplaints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoStream: null, // Store the video stream URL
        };
    }

    componentDidMount() {
        // Establish a WebSocket connection to receive video frames
        const socket = new WebSocket('ws://localhost:8000/ws/video/'); // Update the WebSocket URL
        socket.onmessage = (event) => {
            // Update the video stream URL when receiving new video frames
            this.setState({ videoStream: URL.createObjectURL(event.data) });
        };
    }

    render() {
        const { videoStream } = this.state;

        return (
            <div id='main-wrapper'>
                <Navbar />
                <Sidebar />
                <div className="page-wrapper" style={{ marginBottom: '50px' }}>
                    <div className="container-fluid" style={{ marginTop: '80px' }}>
                        <Breadcrumb pageName="Emergency Complaints" breadcrumbs={['Home', 'Emergency Complaints']} />
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Complainer</th>
                                                    <th>Status</th>
                                                    <th>Complaint File</th>
                                                    <th>Options</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td>
                                                        {/* Display the live video stream */}
                                                        {videoStream && (
                                                            <video
                                                                src={videoStream}
                                                                controls
                                                                autoPlay
                                                                style={{ width: '100%', maxWidth: '300px' }}
                                                            />
                                                        )}
                                                    </td>
                                                    <td>
                                                        <a href='#' className='btn waves-effect waves-light btn-info btn-sm'>View more</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

export default EmergencyComplaints;
