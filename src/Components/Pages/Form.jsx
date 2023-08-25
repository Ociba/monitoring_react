import React, { Component } from "react";

class Form extends Component {
render () {
return (
<React.Fragment>
    <div className="row">
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div class="card">
                        <div class="card-body">
                            <form action="#">
                                <div className="form-group">
                                    <label className="form-label">Stakeholder Name</label>
                                    <input type="text" className="form-control" placeholder="Stakeholder Name" />
                                    <label className="form-label">Agency</label>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" class="form-check-input"/>
                                        <label className="form-check-label m-l-5" for="customRadio1"> Company</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" class="form-check-input" />
                                        <label className="form-check-label m-l-5" for="customRadio2"> Government</label>
                                    </div>
                                    Administrator Account<br />
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" />
                                    <label className="form-label">Password</label>
                                    <input type="text" className="form-control" />
                                    <label className="form-label">Confirm Password</label>
                                    <input type="text" className="form-control" />
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary btn-sm waves-effect waves-light mt-2">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
</React.Fragment>
);
}
}
export default Form;