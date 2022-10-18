//import { render } from "@testing-library/react";
import React, { Component } from "react";
import { MdOutlineLogout } from "react-icons/md"
function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm text-white">
            <div class="container-fluid">
                <a class="navbar-brand text-white" onClick={"/home"}><h3>XYZ Pharmacy</h3></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="colapse" data-bs-target="#mynavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="mynavbar">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item " >
                            <a class="nav-link  " href="/profile" ><h4>Home</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/drugs"><h4>Drugs</h4></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Orders"><h4>All Orders</h4></a>
                        </li>
                         
                        
                    </ul>
                    
                </div>
            
            <form class="d-flex">
                        <input class="form-control me-1 mx-5 " type="text" placeholder="Search Drugs  " />
                        <button class="btn text-white" type="button">Search</button>              
            </form>
            <a class="nav-link" href="/home"><h1><MdOutlineLogout/></h1></a> 
            </div>
        </nav>


    );
}
export default Navbar;