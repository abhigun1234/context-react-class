import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fullName: "",
            dob: ""
        }
    }
    onEmailChange = (event) => {
        console.log("data", event.target.value)
        this.setState({ email: event.target.value })
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <h1>Register</h1>
                    <div className="form-group form-row">
                        <label className="col-lg-4">Email</label>
                        <div className="col-lg-8">
                            <input id="email" type="text" onChange={this.onEmailChange}></input>
                            {this.state.email}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;