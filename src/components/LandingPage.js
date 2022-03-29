import React from 'react';
import './LandingPage.css';
import bg from '../images/bg.png';
import landing_img from '../images/landing-page-img.png';
import landing_img1 from '../images/landing-page-img1.png';

export default function LandingPage() {
  return (
    <div className="landing-page d-flex align-items-center">

      <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1"></i>
        <i className="fas fa-star effect effect-2"></i>
        <i className="fas fa-circle-notch effect effect-3"></i>
      </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="landing-img">
                <div className="circle"></div>
                <img src={landing_img1} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text">
                <h1>DDU Connect</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam ex, odit quas et dolores optio maxime porro odio? Sunt, modi aut possimus similique beatae corporis sapiente explicabo repellat facere asperiores!</p>
                <a href="#" className="btn">Download App</a>
                <button type="button" className="btn video-play-btn mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="fas fa-play"></i>
                </button>

                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="iframe-box">
                          <iframe src="https://www.youtube.com/embed/axKNvuUS-Ao" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}
