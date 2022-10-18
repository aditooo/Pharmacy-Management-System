import React from "react";
//import "../components/style.css";
import Footer from "./Footer";
import Navbar_beforelogin, { Navbar_beforeLogin } from "./Navbar_beforeLogin";
import "./home.css";
import Navbar from "./Navbar";

const Aboutus = () => {
  return (
    <div>
      <Navbar_beforeLogin/>

      <div>
        {/* Main content stsrts from here  */}
        <main class="flex">
          <article class="padding_2x">
            <h1 class="title big"> About Us</h1>
          </article>
        </main>
        {/* Main Contennt close .......... */}

        {/* <!--SECTIONS-->
        <!--SECTION1--> */}
        <div class="sections section1 flex" id="about">
          <section class="flex-content padding_2x">
            <img
              src="https://images.pexels.com/photos/8490200/pexels-photo-8490200.jpeg?cs=srgb&dl=pexels-pnw-production-8490200.jpg&fm=jpg"
              class="img-fluid"
            />
          </section>
          <section class="flex-content padding_2x">
            <h1 class="title medium inline-photo3 show-on-scroll3">
              About <em>XYZ Pharmacy</em>
              <hr class="my-4" />
            </h1>
            <p>
              {" "}
              XYZPharmacy 24|7 offers advanced services for a range of medical
              specialities, including:
            </p>
            <p>
              A medical specialty is a specific area of medical practice that
              mainly focuses on a defined set of diseases, patients, philosophy,
              or skills. Examples include Paediatrics, Dermatology, Psychiatry,
              Gynaecology, and more.
            </p>
            <p>
              <b>VDermatology </b>- A specialised branch of medicine that
              focuses on hair, nails, and skin-related disorders. Dermatology
              also encompasses conditions that affect the thin lining of your
              mouth, eyelids, and nose.
            </p>
            <p>
              <b>Obstetrics and Gynaecology</b> - Two major medical specialities
              that focus on women’s reproductive health. Obstetrics involves
              care during pregnancy, childbirth and after-delivery, while
              gynaecology specialises in issues related to women’s reproductive
              health.{" "}
            </p>
            <p>
              <b>General Physician/Internal Medicine </b>- General Physicians
              are highly experienced medical doctors who provide a broad range
              of non-surgical medical and health care to their patients. An
              internal medicine physician is a specified medical doctor who is
              highly proficient in internal medicine.
            </p>
            <p><b>COVID Consult </b>- COVID-19 also known as novel coronavirus may trigger
          infections of the lower and upper respiratory tracts. If you are
          experiencing body ache, shortness of breath, dry cough, or fever, you
          must get an online consultation with the XYZPharmacy 24|7 experts.</p>
          </section>
          

          {/* Section one completed  */}
          {/* Section 2 started  */}
        </div>
        
        

        {/* <Landingpage /> */}
      </div>
    </div>

    //<p>A dummy project developed by a bunch of engineers..Deploying.....</p>
  );
};

export default Aboutus;