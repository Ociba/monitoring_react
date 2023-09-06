import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (
        <aside className="left-sidebar" style={{ position: "fixed" }}>
            <div className="scroll-sidebar">
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                <li>
                    {" "}
                    <Link className="waves-effect waves-dark" to="/dashboard">
                    <i className="ti-home"></i>
                    <span className="hide-menu">Dashboard</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link
                    className="waves-effect waves-dark"
                    to="/government-agencies"
                    >
                    <i className="ti-anchor"></i>
                    <span className="hide-menu">Gov't Agencies</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link
                    className="waves-effect waves-dark"
                    to="/companies"
                    >
                    <i className="ti-anchor"></i>
                    <span className="hide-menu">Companies</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <a
                    className="has-arrow waves-effect waves-dark"
                    href="javascript:void(0)"
                    aria-expanded="false"
                    >
                    <i className="ti-user"></i>
                    <span className="hide-menu">Users</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                    <li>
                        <Link to="/company-users">Company</Link>
                    </li>
                    <li>
                        <Link to="/all-users">System</Link>
                    </li>
                    </ul>
                </li>
                <li>
                    {" "}
                    <a
                    className="has-arrow waves-effect waves-dark"
                    href="javascript:void(0)"
                    aria-expanded="false"
                    >
                    <i className="ti-announcement"></i>
                    <span className="hide-menu">Complaints</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                    <li>
                        <Link to="/complaints/personal">Personal</Link>
                    </li>
                    <li>
                        <Link to="/complaints/public">Public</Link>
                    </li>
                    <li>
                        <Link to="/complaints/emergency">Emergency</Link>
                    </li>
                    </ul>
                </li>
                <li>
                    {" "}
                    <Link
                    className="waves-effect waves-dark"
                    to="/contracts"
                    >
                    <i className="ti-id-badge"></i>
                    <span className="hide-menu">Contracts</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link
                    className="waves-effect waves-dark"
                    to="/travellers"
                    >
                    <i className="ti-id-badge"></i>
                    <span className="hide-menu">Travellers</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <Link
                    className="waves-effect waves-dark"
                    to="/domestic-workers"
                    >
                    <i className="ti-id-badge"></i>
                    <span className="hide-menu">Domestic Workers</span>
                    </Link>
                </li>
                <li>
                    {" "}
                    <a
                    className="has-arrow waves-effect waves-dark"
                    href="javascript:void(0)"
                    aria-expanded="false"
                    >
                    <i className="ti-settings"></i>
                    <span className="hide-menu">Setting</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                    <li>
                        <Link to="/complaint-escalation">Complaint Escalation</Link>
                    </li>
                    <li>
                        <Link to="/roles">Roles</Link>
                    </li>
                    <li>
                        <Link to="/stakeholders-permissions">
                        Stakeholders Permissions
                        </Link>
                    </li>
                    </ul>
                </li>
                </ul>
            </nav>
            </div>
        </aside>
        );
    }
}
export default Sidebar;
