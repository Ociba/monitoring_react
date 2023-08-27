import React, { Component } from 'react';

class Login extends Component {
    render () {
        return (
            <React.Fragment><body class="skin-default card-no-border">
            <section id="wrapper">
            <div className="login-register">
            <div className="login-box card">
                <div className="card-body">
                    <form className="form-horizontal form-material" id="loginform" action="#">
                        <h3 className="text-center m-b-20">Sign In</h3>
                        <div className="form-group ">
                            <div className="col-xs-12">
                                <input className="form-control" type="text" required="" placeholder="Username" /> </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <input className="form-control" type="password" required="" placeholder="Password" /> </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="d-flex no-block align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                        <label className="form-check-label" for="customCheck1">Remember me</label>
                                    </div> 
                                    <div className="ms-auto">
                                        <a href="javascript:void(0)" id="to-recover" className="text-muted"><i className="fas fa-lock m-r-5"></i> Forgot pwd?</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <div className="col-xs-12 p-b-20">
                                <button className="btn w-100 btn-lg btn-info btn-square text-white" type="submit">Log In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
                
        </section>
        </body>
        </React.Fragment>
        );
    }
}
export default Login;