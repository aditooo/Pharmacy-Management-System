import React, { Component } from "react";
//import App from "../App";
import {
  FaHome,
  FaMailBulk,
  FaPhone
} from "react-icons/fa";

export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        {/* <div class="container my-5" text-center style={{background:"rgb(65, 185, 129, 1)"}} > */}
        {/* <footer class="text-center text-white" style={"background-color: #f1f1f1;"}> */}

        <div
          class="text-center text-white  p-1"
          style={{ background: "rgb(59, 168, 117)" }}
        >
          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">XyzPharmacy</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    We want to empower people to live the healthiest life
                    possible. That is our mission statement and our promise to
                    our customers across India.
                  </p>
                </div>
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Services</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" class="text-white">
                      Medicine Data
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Doctor Data
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Features
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Admin
                    </a>
                  </p>
                </div>
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="text-uppercase fw-bold">Useful links</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <a href="#!" class="text-white">
                      Your Account
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Become an Affiliate
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Shipping Rates
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-white">
                      Help
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="text-uppercase fw-bold">Contact</h6>
                  <hr class="mb-4 mt-0 d-inline-block mx-auto" />
                  <p>
                    <FaHome /> Salt Lake sector 5, Kolkata 790001, INDIA
                  </p>
                  <p>
                    <FaMailBulk /> xyzpharmacy@example.com
                  </p>
                  <p>
                    <FaPhone /> + 91 799799 88234
                  </p>
                  <p>
                    <FaPhone /> + 91 80847 32524
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          class="text-center text-white p-2"
          style={{ background: "rgb(80, 199, 151)" }}
        >
          <b>
            {" "}
            © 2022 Copyright:
            <a class="text-white" href="#">
              XyzPharmacy.com
            </a>
          </b>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Footer;
