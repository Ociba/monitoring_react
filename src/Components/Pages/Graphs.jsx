import React, { Component } from 'react';

class Graphs extends Component {
    render () {
        return (
            
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-title text-left mt-2 m-l-15">A line graph of complaints sent per month</div>
                            <div className="card-body">
                            <canvas id="chart-graph" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                        <div className="card-title text-left mt-2 m-l-15">A Bar graph of complaints recieved per month</div>
                            <div className="card-body">
                            <canvas id="chart-bars" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-title text-left mt-2 m-l-15">A Pie Chart Showing Users of the System</div>
                            <div className="card-body">
                            <canvas id="chart-pie" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                        <div className="card-title text-left mt-2 m-l-15">Most Vs Least Complaining Company</div>
                            <div className="card-body">
                            <canvas id="chart-bars2" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="card">
                            <div className="card-title text-left mt-2 m-l-15">A Bar graph of complaints recieved per company</div>
                            <div className="card-body">
                            <canvas id="chart-bars3" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                            <div className="card-title text-left mt-2 m-l-15"> 
                                A line Graph Showing Emergency,Pending and Escalated Complaints<br />
                                <button className='btn btn-sm waves-effect waves-light bg-danger text-white m-r-5'>Pending</button>
                                <button className='btn btn-sm waves-effect waves-light bg-success text-white m-r-5'>Emergency</button>
                                <button className=' btn btn-sm waves-effect waves-light bg-info text-white'>Escalation</button>
                            </div>
                            <div className="card-body">
                            <canvas id="chart-graph2" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card">
                        <div className="card-title text-left mt-2 m-l-15"> Bar Graph Showing Pending and Solved Complaints Per Company</div>
                            <div className="card-body">
                            <canvas id="chart-bars4" height="250" style={{width:"100%"}} className="chartjs-demo"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}
export default Graphs;