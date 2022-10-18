import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Navbar_beforeLogin from "./Navbar_beforeLogin";
import './login.css'

import { connect } from "react-redux";
import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    this.form.validateAll();

    const { dispatch, history } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      dispatch(login(this.state.username, this.state.password))
     
        .then(() => {
          if(this.state.username==="admin"){
            history.push("/profile");
          }
          else{
            history.push("/profile2");
          }
          //history.push("/profile");
          //   window.location.reload();
          console.log("logged in ");
          alert("Successfully logged in");
        })
        .catch(() => {
          this.setState({
            loading: false

          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { isLoggedIn, message } = this.props;

    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }

    return (
      <div>

        <Navbar_beforeLogin/>
        

        <Form
          onSubmit={this.handleLogin}
          ref={(c) => {
            this.form = c;
          }}
        >




          <div className="container-fluid ps-md-0" style={{ marginTop: "0px" }}>
            <div className="row g-0">
              <div className=" d-md-flex col-md-3 col-lg-5 bg-image"style={{ marginLeft: "10px" , marginTop:"105px"}}></div>

              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-6">


                  <div className="container " style={{ marginLeft: "80px" }}>
                    <div className="row"  >
                      <div className="col-md-9 col-lg-12 mx-auto my-container" >
                        <h3 className="login-heading mb-4" >Welcome back!</h3>

                        <div className="form-floating mb-4">
                          <Input type="text" className="form-control" placeholder="Enter your email Id" name="username" value={this.state.username}
                            onChange={this.onChangeUsername} validations={[required]}
                          />
                          {/* <label htmlFor="floatingPassword">Password</label> */}

                        </div>
                        <div className="form-floating mb-3">
                          <Input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password}
                            onChange={this.onChangePassword} validations={[required]} />
                          {/* <label htmlFor="floatingPassword">Password</label> */}
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-lg btn-primary btn-login mb-2" type="submit" disabled={this.state.loading}>
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                          </button>



                          <div className="text-center">
                            {/* <a className="small me-2" href="!#">Forgot password?</a> */}
                            <Link to="/register" style={{ textDecoration: "none" }}><span id="register-here"><i>Register with us?</i></span></Link>
                          </div>
                        </div>
                        {/* <div className="text-center mt-2" style={{color: 'red', minHeight: '25px'}} dangerouslySetInnerHTML={{__html: error}} /> */}
                        {/* <div className="row" style={{minHeight: "30px"}}>
                        {location.state && <span className="text-center ms-2 lead" style={{color: 'blue'}} dangerouslySetInnerHTML={{__html: location.state.message}} />}
                      </div>   */}

                        {message && (
                          <div className="form-group">
                            <div className="alert alert-danger" role="alert">
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
                </div>
                
              </div>
            </div>
          </div>
        </Form>

        {/* <hr class="my-5" /> */}

      </div>

    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default connect(mapStateToProps)(Login);








