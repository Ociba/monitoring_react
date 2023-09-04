import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        const { pageName, breadcrumbs } = this.props;

        return (
            <div className="row page-titles mt-10">
                <div className="col-md-5 align-self-center">
                    <h4 className="text-themecolor">{pageName}</h4>
                </div>
                <div className="col-md-7 align-self-center text-end">
                    <div className="d-flex justify-content-end align-items-center">
                        <ol className="breadcrumb justify-content-end">
                            {breadcrumbs.map((breadcrumb, index) => (
                                <li key={index} className="breadcrumb-item">{breadcrumb}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breadcrumb;
