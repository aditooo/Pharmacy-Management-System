import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import Navbar_beforeLogin from "./Navbar_beforeLogin";
import './login.css'

import { connect } from "react-redux";
import { register } from "../actions/auth";
import { toBeDisabled } from "@testing-library/jest-dom";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const name = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The name must be between 3 and 20 characters.
      </div>
    );
  }
};
const phNo = (value) => {
  if (value.length != 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The phone Numbder must of 10 digits.
      </div>
    );
  }
};

const doctor_password = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangename = this.onChangename.bind(this);
    this.onChangephNo = this.onChangephNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangedoctor_password = this.onChangedoctor_password.bind(this);

    this.state = {
      name: "",
      phNo: "",
      email: "",
      doctor_password: "",
      successful: false,
    };
  }

  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangephNo(e) {
    this.setState({
      phNo: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangedoctor_password(e) {
    this.setState({
      doctor_password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      this.props
        .dispatch(
          register(
            this.state.name,
            this.state.phNo,
            this.state.email,
            this.state.doctor_password
          )
        )
        .then(() => {
          this.setState({
            successful: true,
            
          });
         // history.push("/login");
          alert("Registered successfully, Login to continue");
          console.log("Registered successfully");
          this.props.history.push("/login");
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
    }
  }

  render() {
    const { message } = this.props;

    return (
      <div>
        <Navbar_beforeLogin />       

        <Form
          onSubmit={this.handleRegister}
          ref={(c) => {
            this.form = c;
          }}
        >
         
        <div className="container-fluid ps-md-0" style={{ marginTop: "50px", marginBottom:"50px" }}>         
            
            
            
      
        

        <div className="col-md-6 bg-image" style={{ marginLeft: "30px" }}>
          <div className="col-md-12 card bg-light text-dark" style={{ marginLeft: "650px" }} >
            <h1>
              <center>User Registration </center>
            </h1>

              {!this.state.successful && (
                <div>
                  <div className="form-group">
                    <Input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangename}
                      validations={[required, name]}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      type="tel"
                      className="form-control"
                      name="phNo"
                      value={this.state.phNo}
                      onChange={this.onChangephNo}
                      validations={[required, phNo]}
                      placeholder="Enter your Phone Number"
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      validations={[required, email]}
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      type="doctor_password"
                      className="form-control"
                      name="doctor_password"
                      value={this.state.doctor_password}
                      onChange={this.onChangedoctor_password}
                      validations={[required, doctor_password]}
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="form-group">
                    <button className="btn btn-dark btn-block">Sign Up</button>
                    <h2></h2>
                    <p>
                      <i>
                        <h6>
                          Already Have an Account ?{" "}
                          <Link to="/login" className="formFieldLink">
                            Sign In
                          </Link>
                        </h6>
                      </i>
                    </p>
                  </div>
                  {/* <p className="mt-3">Already Have an Account <a href="login.components.js">Sign In</a></p> */}
                </div>
              )}

              {message && (
                <div className="form-group">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <CheckButton
                style={{ display: "none" }}
                ref={(c) => {
                  this.checkBtn = c;
                }}
              />
            
          </div>
        </div>
      </div>
      </Form>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { message } = state.message;
  return {
    message,
  };
}

export default connect(mapStateToProps)(Register);
