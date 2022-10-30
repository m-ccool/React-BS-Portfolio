import React from 'react'
import { Icon } from '@iconify/react';



const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-md sticky-top">
          <div class="container-fluid">
            <a class="navbar-brand" href="https://github.com/m-ccool">b m-ccool</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navcol-1" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-md-flex align-items-sm-center justify-content-md-end" id="navcol-1">
              <ul class="navbar-nav">
                <li class="nav-item d-flex justify-content-center">
                  <a class="btn nav-btn" role="button" href="https://github.com/m-ccool">
                  <Icon icon="akar-icons:github-fill" class="app-card-icon" color="white" width="25px" height="25px"/>
                  </a>
                </li>
                <li class="nav-item d-flex justify-content-end">
                  <a class="nav-link active" aria-current="page" href="#projects">projects</a>
                </li>
                <li class="nav-item d-flex justify-content-end">
                  <a class="nav-link" href="#skills">skills</a>
                </li>
                <li class="nav-item d-flex justify-content-end">
                  <a class="nav-link" href="#contact">contact</a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
    )
}

export default NavBar