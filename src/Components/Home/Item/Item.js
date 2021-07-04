import React from 'react';
import './item.css'

const Item = ({item}) => {


    return (
      <div class="card card-width">
        <img
          src={item.img}
          class="card-img-top"
          alt="..."
          style={{ backgroundColor: "#e4eaef", height: "333px" }}
        />
        <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p class="card-text">{item.detail}</p>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 pt-3">
                {" "}
                <h5
                  className="font-weight-bold"
                  style={{ color: "rgb(187 201 74)" }}
                >
                  $ {item.price}
                </h5>{" "}
              </div>
              <div className="col-sm-8">
                <button class="btn btn-success btn-lg">
                  <i class="fas fa-cart-arrow-down"></i>
                  <span style={{ fontSize: "15px" }}>BUY NOW </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Item;