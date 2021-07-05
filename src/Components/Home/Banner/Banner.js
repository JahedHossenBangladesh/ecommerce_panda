import React from 'react';
import './Banner.css';

export default function Banner() {
    return (
      <div>
        <div className="container mt-5 height mb-3">
          <div className="row">
            <div className="col-sm-5 col-md-5 col-12">
              <h1>
                {" "}
                <span className="font-color">
                  BE THE PENGUINS{" "}
                </span> <br></br> <span>OF WINTER </span>{" "}
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur <br></br> adipisicing
                elit. Vitae, aperiam!
              </p>
              <button class="btn btn-success btn-lg">
                <i class="fas fa-shopping-cart"> </i>
                <span style={{ fontSize: "15px" }}>BUY NOW </span>
              </button>
            </div>
            <div className="col-12 col-sm-5  col-md-5  d-flex align-items-center mt-0 main">
              <img
                src="https://i.ibb.co/7CCFkkQ/Group-33091.png"
                className="p2"
                alt="Group-33091"
                border="0"
              />
              <img
                src="https://i.ibb.co/BKQMpTH/Mask-Group.png"
                className="p1"
                alt="Mask-Group"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
