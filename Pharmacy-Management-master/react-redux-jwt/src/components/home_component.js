/*import React, { Component } from "react";
import { Route } from "react-router-dom";
import CreateDrugComponent from "./createdrugs";
import Navbar_beforelogin from "./Navbar_beforeLogin";
import Footer from "./Footer";
 
class Home extends Component {
  render() {
    return (
      <div>
      <div>
        <Navbar_beforelogin/>
        <h2>WELCOME to XYZ Pharmacy</h2>
        <br></br>
            <div>
                <p><i>This is a one stop solution to all the Pharmacies. Here order your medicine from our place
                    and get it as soon as possible.
                    </i></p>
            </div> 
            <section>
                    <p>A dummy project developed by a bunch of engineers..Deploying.....</p>
            </section> 
            <Route > </Route>
            

                
      </div>
      
      
      <p>A dummy project developed by a bunch of engineers..Deploying.....</p>
      
      </div>
    );
  }
}
 
export default Home;*/

import React, { Component } from "react";

import Navbar_beforeLogin from "./Navbar_beforeLogin";


import "./home.css";

/*<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;*/

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar_beforeLogin />

        <div>
          {/* Main content stsrts from here  */}
          <main class="flex">
            <article class="padding_2x">
              <h1 class="title big"> XYZ Pharmacy</h1>
              <p>
                XYZ Pharmacy Consulting Group (ACG) was founded as a
                professional services firm in 2022 .
              </p>
              <p>
                Get everything you need at xyzpharmacy.com to take care of your
                health right from high-quality, affordable, authentic
                prescription medicines, Over-The-Counter pharmaceuticals
                products to general health care products, Ayurveda, Unani and
                Homeopathy medicines.
              </p>
              <a href="#solutions" class="btn2">
                Explore more
              </a>
            </article>
          </main>
          {/* Main Contennt close .......... */}

          {/* <!--SECTIONS-->
          <!--SECTION1--> */}
          <div class="sections section1 flex" id="about">
            <section class="flex-content padding_2x">
              <img
                src="https://images.pexels.com/photos/7088531/pexels-photo-7088531.jpeg?cs=srgb&dl=pexels-mart-production-7088531.jpg&fm=jpg"
                class="img-fluid"
              />
            </section>
            <section class="flex-content padding_2x">
              <h1 class="title medium inline-photo3 show-on-scroll3">
                Why Choose <em>XYZ Pharmacy</em>
                <hr class="my-4" />
              </h1>
              <p> </p>
              <p>
                Buy medicines online at XYZPharmacy.com from the comfort of your
                home and we will take care of the rest! We will ensure that the
                life-saving drugs reach your doorstep without a hitch. Do away
                with the hassle of driving to the medical store, waiting in
                line, or even remembering your refills! xyzpharmacy.com will sort out
                those problems for you effectively so that you can lead a
                healthy and full life!
              </p>
              <p>Vital medicines delivered across the country. </p>
              <p>Trust of more than 4 million+ loyal customers. </p>
              <p>
                Our team is made up of highly experienced pharmacists &
                healthcare professionals.{" "}
              </p>
              <p>
                A wide array of healthcare services available for your
                convenience.{" "}
              </p>
              <p>We stock only genuine medicines & healthcare products. </p>
            </section>
            {/* Section one completed  */}
            {/* Section 2 started  */}
          </div>

          <div class="sections section3 flex" id="contact">
            <section class="flex-content padding_2x">
              <article>
                <h1 class="title medium inline-photo3 show-on-scroll3">
                  Contact Us
                </h1>
                <p>
                  
                </p>
              </article>
            </section>
            <section class="flex-content padding_2x">
              <form>
                <fieldset class="flex">
                  <input
                    type="text"
                    name="fname"
                    maxlength="80"
                    placeholder="Full name*"
                    required=""
                  />
                </fieldset>
                <hr class="my-2" />
                <fieldset class="flex">
                  <input
                    type="tel"
                    name="tel"
                    maxlength="15"
                    placeholder="Contact no*"
                    class="flex-content"
                    required=""
                  />
                  <input
                    type="email"
                    name="email"
                    maxlength="100"
                    placeholder="Email*"
                    class="flex-content"
                    required=""
                  />
                </fieldset>
                <hr class="my-2" />
                <fieldset>
                  <textarea
                    name="message"
                    maxlength="500"
                    placeholder="Message here..."
                    required=""
                  ></textarea>
                </fieldset>
                <hr class="my-2" />
                <fieldset class="flex">
                  <button class="flex-content btn2">Submit</button>
                  <span class="flex-content">
                    <label for="file">
                      <i class="fa fa-paperclip"></i> Attachment
                      <input
                        type="file"
                        name="file"
                        id="file"
                        accept=".pdf,.txt,.docx,.odt,.csv"
                      />
                    </label>
                  </span>
                </fieldset>
              </form>
            </section>
          </div>

          <div
            class="sections section4 padding_1x"
            id="engagements padding-top:10px"
          >
            <div class="title_header">
              <hr class="my-5" />
              <h1 class="title medium inline-photo2 show-on-scroll2">
                Most <em>Recent Works</em>
              </h1>

              <p class="inline-photo3 show-on-scroll3">
                Our previous engagements include but are not limited to
              </p>
            </div>
            <div class="flex">
              <section class="flex-content padding_1x inline-photo show-on-scroll">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5452293.jpg&fm=jpg"
                    class="img-fluid"
                  />
                  <article>
                    <span class="padding_1x">
                      <p>
                        
                      </p>
                    </span>
                  </article>
                </figure>
              </section>
              <section class="flex-content padding_1x inline-photo show-on-scroll">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?cs=srgb&dl=pexels-pixabay-208512.jpg&fm=jpg"
                    class="img-fluid"
                  />
                  <article>
                    <span class="padding_1x">
                      <p>
                        
                      </p>
                    </span>
                  </article>
                </figure>
              </section>
              <section class="flex-content padding_1x inline-photo show-on-scroll">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?cs=srgb&dl=pexels-anna-shvets-3683088.jpg&fm=jpg"
                    class="img-fluid"
                  />
                  <article>
                    <span class="padding_1x">
                      <p>
                        
                      </p>
                    </span>
                  </article>
                </figure>
              </section>
              <section class="flex-content padding_1x inline-photo show-on-scroll">
                <figure>
                  <img
                    src="https://images.pexels.com/photos/4247766/pexels-photo-4247766.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4247766.jpg&fm=jpg"
                    class="img-fluid"
                  />
                  <article>
                    <span class="padding_1x">
                      <p>
                        
                      </p>
                    </span>
                  </article>
                </figure>
              </section>
            </div>
          </div>

          {/* <Landingpage /> */}
        </div>
      </div>

      //<p>A dummy project developed by a bunch of engineers..Deploying.....</p>
    );
  }
}

export default Home;

