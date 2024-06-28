import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", paddingTop: "50px", paddingBottom: "50px" }}>
      <div className="container">
        <div className="row justify-content-evenly">
          {/* QuickDine Column */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="text-start">
              <h5>QuickDine</h5>
              <p>
                QuickDine streamlines the food ordering process for seamless convenience and ease
              </p>
            </div>
          </div>

          {/* Delivery Time Column */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h5>Delivery Time</h5>
            <ul className="list-unstyled">
              <li>Sunday - Thursday: 10:00am - 11:00pm</li>
              <li>Friday - Saturday: Off day</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-4 col-sm-6">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Location: Kolkata, India</li>
              <li>Phone: 01712345678</li>
              <li>Email: abc@gmail.com</li>
            </ul>
          </div>
        </div>


        {/* Footer Bottom Row */}
        <div className="row mt-5">
          <div className="col">
            <p className="text-center">By continuing past this page, you agree to our Terms of Service, Cookie Policy, and Privacy Policy. All trademarks are properties of their respective owners. © 2023 QuickDine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
