import React from 'react';
import './Articles.css';
import SectionTitle from './SectionTitle';
import temp_img from '../images/temp-img.jpeg';

export default function () {
  return (
    <div className="articles section">
      <SectionTitle name = "Articles" />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          
          <div className="col">
            <div className="card">
              <img src={temp_img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">PRONTO THE PAPER</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga obcaecati tempore, vel nihil nesciunt, dicta repellat eius nobis, necessitatibus quibusdam molestias. Quo fugiat, vel veniam id quis nihil suscipit ipsum mollitia commodi porro a iure, explicabo nesciunt magni quae assumenda.</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={temp_img} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>First Article</h5>
            
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={temp_img} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second Article</h5>
            
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={temp_img} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third Article</h5>
            
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
