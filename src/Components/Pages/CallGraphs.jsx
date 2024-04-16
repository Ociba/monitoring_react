import React, { Component } from 'react';
import Graphs from './Graphs'; // Assuming Graphs component is correctly implemented
import { Chart, registerables } from 'chart.js';

// Register necessary chart components
Chart.register(...registerables);

class CallGraphs extends Component {
    render() {
        return (
        <div>
            {/* Your chart canvas elements */}
            <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card">
                <div className="card-title text-left mt-2 m-l-15">A line graph of complaints sent per month</div>
                <div className="card-body">
                    <Graphs type="line" data={[12, 19, 3, 5, 2, 3]} labels={['January', 'February', 'March', 'April', 'May', 'June']} />
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="card">
                <div className="card-title text-left mt-2 m-l-15">A Bar graph of complaints received per month</div>
                <div className="card-body">
                    <Graphs type="bar" data={[12, 19, 3, 5, 2, 3]} 
                    labels={['January', 'February', 'March', 'April', 'May', 'June']}
                    backgroundColor={['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)']} />
                </div>
                </div>
            </div>
            </div>
            {/* Add more Graphs instances for other charts */}
            <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card">
                <div className="card-title text-left mt-2 m-l-15">A Pie Chart Showing Users of the System</div>
                <div className="card-body">
                    <Graphs type="pie" data={[30, 20, 50]} labels={['Admins', 'Moderators', 'Users']} />
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="card">
                <div className="card-title text-left mt-2 m-l-15">A Pie Chart Showing Users of the System</div>
                <div className="card-body">
                    <Graphs type="pie" data={[10, 20, 30, 40, 50]} labels={['A', 'B', 'C', 'D', 'E']} />
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default CallGraphs;
