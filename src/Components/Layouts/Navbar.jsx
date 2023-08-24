import React, { Component } from 'react';
import Logo from './logo.png';
class Navbar extends Component {
    render() { 
        return (
            <header className="topbar mb-5" style={{position:'fixed',width:'100%'}}>
            <nav className="navbar top-navbar navbar-expand-md navbar-dark" >
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <img src={Logo} alt="homepage" className="dark-logo" style={{width:'80px',height:'80px'}}/>
                            
                            <img src={Logo} alt="homepage" className="light-logo" style={{width:'80px',height:'80px'}} />
                        </b>
                        <span className="hidden-xs"><span className="font-bold">BAC</span></span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"> <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="icon-menu"></i></a> </li>
                        
                        <li className="nav-item">
                            <form className="app-search d-none d-md-block d-lg-block">
                                <input type="text" className="form-control" placeholder="Search & enter"/>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="ti-email"></i>
                                <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end mailbox animated bounceInDown">
                                <ul>
                                    <li>
                                        <div className="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            <a href="javascript:void(0)">
                                                <div className="btn btn-danger btn-circle text-white"><i className="fa fa-link"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Luanch Admin</h5> <span className="mail-desc">Just see the my new admin!</span> <span className="time">9:30 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="btn btn-success btn-circle text-white"><i className="ti-calendar"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Event today</h5> <span className="mail-desc">Just a reminder that you have event</span> <span className="time">9:10 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="btn btn-info btn-circle text-white"><i className="ti-settings"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Settings</h5> <span className="mail-desc">You can customize this template as you want</span> <span className="time">9:08 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="btn btn-primary btn-circle"><i className="ti-user"></i></div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center link" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="icon-note"></i>
                                <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                            </a>
                            <div className="dropdown-menu mailbox dropdown-menu-end animated bounceInDown" aria-labelledby="2">
                                <ul>
                                    <li>
                                        <div className="drop-title">You have 4 new messages</div>
                                    </li>
                                    <li>
                                        <div className="message-center">
                                            <a href="javascript:void(0)">
                                                <div className="user-img"> <img src={Logo} style={{width:'60px',height:'60px'}} alt="user" className="img-circle"/> <span className="profile-status online pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:30 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="user-img"> <img src={Logo} style={{width:'60px',height:'60px'}} alt="user" className="img-circle"/> <span className="profile-status busy pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Sonu Nigam</h5> <span className="mail-desc">I've sung a song! See you at</span> <span className="time">9:10 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="user-img"> <img src={Logo} style={{width:'60px',height:'60px'}} alt="user" className="img-circle"/> <span className="profile-status away pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Arijit Sinh</h5> <span className="mail-desc">I am a singer!</span> <span className="time">9:08 AM</span> </div>
                                            </a>
                                            <a href="javascript:void(0)">
                                                <div className="user-img"> <img src={Logo} style={{width:'60px',height:'60px'}} alt="user" className="img-circle"/> <span className="profile-status offline pull-right"></span> </div>
                                                <div className="mail-contnet">
                                                    <h5>Pavan kumar</h5> <span className="mail-desc">Just see the my admin!</span> <span className="time">9:02 AM</span> </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a className="nav-link text-center link" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown u-pro">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={Logo} style={{width:'60px',height:'60px'}} alt="user" className=""/> <span className="hidden-md-down">Mark &nbsp;<i className="fa fa-angle-down"></i></span> </a>
                            <div className="dropdown-menu dropdown-menu-end animated flipInY">
                                <a href="pages-login.html" className="dropdown-item"><i className="fa fa-power-off"></i> Logout</a>
                            </div>
                        </li>
                        <li className="nav-item right-side-toggle"> <a className="nav-link  waves-effect waves-light" href="javascript:void(0)"><i className="ti-settings"></i></a></li>
                    </ul>
                </div>
            </nav>
        </header>
        );
    }
}
export default Navbar;