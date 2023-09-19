import React from "react";
import styles from "../Components/PrintivoHead.module.css"
import logo from "../src/images/whatapp.svg"
import plogo from "../src/images/printivo-logo.svg"

function Printivo() {
  return (
    <div className={styles.print}>
      <div className={styles.PrintivoHeader}>
        <a href="">Cost calculator</a>
        <a href="">Discover Stores</a>
        <a href="">Track Orders</a>
        <a href="">Need help? call:+2348091084333</a>
        <a href=""><img src={logo} alt="" /></a>
      </div>
      <nav className="w-100 navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand mx-5" href="#">
            <img src={plogo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bold">
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">
                  All products
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Become a Reseller
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Merch Store
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  MarketPlace
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link text-danger"  href="#">
                  Sign in
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Create Account
                </a>
              </li>
              <a className="navbar-brand me-4" href="#">
                <img src="src/images/trow.svg" alt="" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
      <div className="row mt-5 d-flex">
        <div className="col-7 mx-5">
          <h1 className={styles.h1}>Quality Prints</h1>
          <h3>Shipped to your doorstep</h3>
          <h5>What would you like to print today?</h5>
          <div className={styles.placeHolder}><input type="text" placeholder="Search for business cards, T-shirts, mugs etc"/></div>
        </div>
        <div className="col-5">
            <img src="src/images/card-hand.png" alt="" className="w-50" />
        </div>

      </div>
      <div className={styles.sticker}>
        <marquee behavior="move" direction="left"><h4>10% 0ff bronchure Promo</h4></marquee>
      </div>
    </div>
  );
}

export default Printivo;
