import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Sidebar extends Component {
    render() { 
        return (
            <aside className="left-sidebar" style={{position:'fixed'}}>
                    <div className="scroll-sidebar">
                        <nav className="sidebar-nav">
                            <ul id="sidebarnav">
                                <li> <Link className="waves-effect waves-dark" to="/my-dashboard"><i className="ti-home"></i><span className="hide-menu">Dashboard</span></Link></li>
                                <li> <Link className="waves-effect waves-dark" to="/stake-holders"><i className="ti-id-badge"></i><span className="hide-menu">Stakeholders</span></Link></li>
                                <li> <Link className="waves-effect waves-dark" to="/government-agencies"><i className="ti-anchor"></i><span className="hide-menu">Government Agencies</span></Link></li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-layout-grid2"></i><span className="hide-menu">Companies </span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/local-companies">Local Companies</Link></li>
                                        <li><Link to="/abroad-companies">Companies Abroad</Link></li>
                                    </ul>
                                </li>
                                <li> <Link className="waves-effect waves-dark" to="/staff"><i className="ti-user"></i><span className="hide-menu">Staff</span></Link></li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-announcement"></i><span className="hide-menu">Complaints</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/emergency-complaints">Emergency</Link></li>
                                        <li><Link to="/pending-complaints">Normal</Link></li>
                                        <li><Link to="/solved-complaints">Solved</Link></li>
                                    </ul>
                                </li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-alarm-clock"></i><span className="hide-menu">Escalated Complaints</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/escalated-emergency-complaints">Emergency</Link></li>
                                        <li><Link to="/escalated-pending-complaints">Normal</Link></li>
                                        <li><Link to="/escaled-solved-complaints">Solved</Link></li>
                                    </ul>
                                </li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-microphone"></i><span className="hide-menu">Public Complaints</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/public-complaints">Normal</Link></li>
                                        <li><Link to="/public-solved-complaints">Solved</Link></li>
                                    </ul>
                                </li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-marker-alt"></i><span className="hide-menu">Contracts</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/on-going-contracts">Ongoing</Link></li>
                                        <li><Link to="/expired-contracts">Expired</Link></li>
                                        <li><Link to="/terminated-contracts">Terminated</Link></li>
                                    </ul>
                                </li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-world"></i><span className="hide-menu">Ugandans Abroad</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/through-labor-export">Through Labor Export</Link></li>
                                        <li><Link to="/other-ugandans">Other Ugandans</Link></li>
                                        <li><Link to="/escaled-solved-complaints">Solved</Link></li>
                                    </ul>
                                </li>
                                <li> <Link className="waves-effect waves-dark" to="/scanned-ugandans"><i className="ti-id-badge"></i><span className="hide-menu">Verified Ugandans</span></Link></li>
                                <li> <a className="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i className="ti-settings"></i><span className="hide-menu">Setting</span></a>
                                    <ul aria-expanded="false" className="collapse">
                                        <li><Link to="/complaint-escalation">Complaint Escalation</Link></li>
                                        <li><Link to="/roles">Roles</Link></li>
                                        <li><Link to="/stakeholders-permissions">Stakeholders Permissions</Link></li>
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