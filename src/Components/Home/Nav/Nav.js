import React from 'react';
import '../../../App.css';

export default function Nav () {
    return (
      <div class="navbar-wrapper">
        <div id="app" className="container ">
          <nav class="navbar navbar-expand-sm  navbar-default navbar-inverse ">
            <a class="navbar-brand " href="#">
              <img
                src="https://i.ibb.co/26jMrYn/rsz-1rsz-1rsz-logo.png"
                alt="rsz-1rsz-1rsz-logo"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse  " id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item nav-padding-one ">
                  <a class="nav-link " href="#">
                    <span class="text-secondary fs-6">Home</span>
                  </a>
                </li>
                <li class="nav-item nav-padding">
                  <a class="nav-link  " href="#">
                    <span class="text-secondary fs-6">Product</span>
                  </a>
                </li>
                <li class="nav-item nav-padding">
                  <a class="nav-link" href="#">
                    <span class="text-secondary fs-6">About us</span>
                  </a>
                </li>
                <li class="nav-item nav-padding">
                  <a class="nav-link" href="#">
                    <span class="text-secondary fs-6">Contact us</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
};

