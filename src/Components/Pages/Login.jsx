import React, { Component } from 'react';
import BASE_URL from '../apiEndPoints';
import Background from './image1.jpg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value, error: '' });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        try {
            const response = await fetch(BASE_URL+'/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.access)
                localStorage.setItem('access_token',data.access_token)
                localStorage.setItem('refresh_token',data.refresh_token)
                window.location.href = "/dashboard"
                // Handle successful login (e.g., store token and navigate to a new page)
            } else {
                this.setState({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Error:', error);
            this.setState({ error: 'An error occurred' });
        }
    }

    render() {
        const { username, password, error } = this.state;

        return (
            <React.Fragment>
                <body className="skin-default card-no-border">
                    <section id="wrapper">
                        <div className="login-register" style={{backgroundImage: `url(${Background})`, height: "1000px", backgroundRepeat: "no-repeat"}}>
                            <div className="login-box card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material" id="loginform" onSubmit={this.handleFormSubmit}>
                                        <h3 className="text-center m-b-20">Sign In</h3>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <input className="form-control" type="text" name="username" value={username} onChange={this.handleInputChange} required placeholder="Username" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12">
                                                <input className="form-control" type="password" name="password" value={password} onChange={this.handleInputChange} required placeholder="Password" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <div className="d-flex no-block align-items-center">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label" htmlFor="customCheck1">Remember me</label>
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
                                        {error && <p className="text-danger">{error}</p>}
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
