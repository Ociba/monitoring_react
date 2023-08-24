import React, { Component } from 'react';
class Breadcrumb extends Component {
    state = {  } 
    render() { 
        return (
            <div className="row page-titles mt-10">
            <div className="col-md-5 align-self-center">
                <h4 className="text-themecolor">Dashboard</h4>
            </div>
            <div className="col-md-7 align-self-center text-end">
                <div className="d-flex justify-content-end align-items-center">
                    <ol className="breadcrumb justify-content-end">
                        <li className="breadcrumb-item"><a href="/dashboard">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                </div>
            </div>
        </div>
        );
    }
}
export default Breadcrumb;