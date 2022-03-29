import React from 'react';
import './Footer.css';
import logo from '../images/logo.png';
import facebook from '../images/facebook-icon.png';
import insta from '../images/insta.png';
import tweeter from '../images/tweeter.png';

export default function Footer() {
  return (
    <div class="footer">

        <div class="container">

        <div class="row row-cols-1 row-cols-md-3 g-4">

            <div class="col about-us">
            <div class="card h-100">
                
                <div class="card-body">

                <div class="card-title">
                    <img src={logo} alt="" />
                </div>

                <p class="card-text">
                    <a href="">Home</a>
                    <a href="">Buzz</a>
                    <a href="">Tech</a>
                    <a href="">Tech It Easy</a>
                    <a href="">Dentistry Around The Globe</a>
                    <a href="">Pharmacy : Then & Now</a>
                    <a href="">Writers’ Lounge</a>
                    <a href="">Verses</a>
                    <a href="">Non-Tech</a>
                    <a href="">Theme Of The Month</a>
                </p>

                </div>
                <div class="icons">
                <a href="" class=""><img src={facebook} alt="" /></a>
                <a href="" class=""><img src={insta} alt="" /></a>
                <a href="" class=""><img src={tweeter} alt="" /></a>
                </div>
            </div>
            </div>

            <div class="col links">
            <div class="card h-100">
                <div class="card-body">
                <h2 class="card-title">Quick Links</h2>
                <p class="card-text">
                    <a href="">Open Letter</a>
                    <a href="">Connect-ions</a>
                    <a href="">Fiction</a>
                    <a href="">Interview</a>
                    <a href="">Alumni Speaks</a>
                    <a href="">Get DDU Connect App</a>
                </p>
                </div>
            </div>
            </div>

            <div class="col links">
            <div class="card h-100">
                <div class="card-body">
                <h2 class="card-title">About</h2>
                <p class="card-text">
                    <a href="">Gallery</a>
                    <a href="">Meet our team</a>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Privacy Policy</a>
                </p>
                </div>
            </div>
            </div>

        </div>

        </div>

        <div class="copyright">
        Copyright ©2022 All rights reserved | This template is made with ❤ by DDU Connect
        </div>

    </div>
  )
}
