import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return (
            <header className="topbar mb-5" style={{position:'fixed',width:'100%'}}>
            <nav className="navbar top-navbar navbar-expand-md navbar-dark" >
                <div className="navbar-header">
                    <a className="navbar-brand" href="#!">
                        <span className="hidden-xs"><span className="font-bold">Monitoring</span></span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"> <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark" href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                        <li className="nav-item"> <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i className="icon-menu"></i></a> </li>
                        
                    </ul>
                    <ul className="navbar-nav my-lg-0">s
                        <li className="nav-item dropdown u-pro">
                            <a className="nav-link dropdown-toggle waves-effect waves-dark profile-pic" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="hidden-md-down" style={{textTransform:'uppercase'}}>Mark &nbsp;<i className="ti-angle-down"></i></span> </a>
                            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id="2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="skew-shake-y"> <i className="ti-bell"></i></span>
                                    <div className="notify"> <span className="heartbit" ></span> <span className="point" style={{backgroundColor:'#FF0000', border:'#FF0000'}}></span> </div>
                                </a>
                            <div className="dropdown-menu dropdown-menu-end animated flipInY">
                                <a href="#!" className="dropdown-item"><i className="ti-lock"></i> Logout</a>
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