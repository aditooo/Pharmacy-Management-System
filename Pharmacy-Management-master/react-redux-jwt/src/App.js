import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import { Sign_img } from "./components/Sign_img";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { FaHome, FaUserAlt, FaUserPlus, FaSignInAlt} from "react-icons/fa";
import {GrLogin} from "react-icons/gr"
import Login from "./components/login_component";
import Register from "./components/register_component";
import Profile from "./components/profile_component";
import User from "./components/user_component";
import Home from "./components/home_component"
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";
import { history } from './helpers/history';
import EventBus from "./common/EventBus";
import CreateDrugComponent from "./components/createdrugs";
import ViewDrugs from "./components/viewdrugs";
import ListDrugs from "./components/listDrugs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import createOrder from "./components/createOrder.jsx";
import profile2Component from "./components/profile2_component";
import ListOrders from "./components/listOrder";
import ViewOrders from "./components/view-order.jsx";
import DrugsList from "./components/drugList2";
import Aboutus from "./components/AboutUs";




class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); 
    });
  }

  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }
  render() {
    const { currentUser} = this.state;
  
    return (
      <Router history={history}>
        <div>
        <div >
             
             <Switch>
               <Route exact path={["/", "/home"]} component={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
               <Route exact path="/profile" component={Profile} />
               <Route exact path="/profile2" component={profile2Component} />
               <Route exact path="/user" component={User} />
               <Route exact path="/add-drug/:id" component={CreateDrugComponent} />
               <Route path = "/view-drug/:id" component = {ViewDrugs}></Route>
               <Route path = "/Drugs" exact component = {ListDrugs}></Route>
               <Route path = "/Drugs2" exact component = {DrugsList}></Route>
               <Route path = "/Order" exact component = {createOrder}></Route>
               <Route path = "/Orders" exact component = {ListOrders}></Route>
               <Route path = "/AboutUs" exact component = {Aboutus}></Route>
               <Route path = "/view-order/:id" exact component = {ViewOrders}></Route>

             </Switch>
            <Footer/>
           </div>    
         
         
         </div>
       </Router>
     );
   }
  }
  
  function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }
  
  export default connect(mapStateToProps)(App);
  


