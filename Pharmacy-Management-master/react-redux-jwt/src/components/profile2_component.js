import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import CreateDrugComponent from "./createdrugs";

import Landingpage from "./Landingpage";
import Navbar from "./Navbar2";

class Profile extends Component {

 
  render() {
/*
    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }*/

    return (

      <div>
       <Navbar/>
        <Landingpage/>

        {/*<CreateDrugComponent/>
        <h1>Welcome to XYZ Pharmacy Management</h1>
        {/*<p>
          <strong>Id:</strong> {currentUser.id}
        </p>*
        <p>
          <h3>Email: {currentUser.username}</h3> 
        </p>
        <a href="#"><i class="fa fa-dribbble"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-facebook"></i></a>*/}
          </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);