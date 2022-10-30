import React from 'react';
import { Icon } from '@iconify/react';

import rabitIcon from './assets/img/rabbit.svg'
import pinkguyImg from './assets/img/pinkGUY-PREVIEW2.png'
import rabithabitImg from './assets/img/RABIT-HABIT-med-preview.png'
import anewleafImg from './assets/img/A-New-Leaf-Capture.PNG'
import watchthatboxImg from './assets/img/watch-that-box-preview.png'
import weatherImg from './assets/img/weatherdashboarrd-api-screenshot.png'
import javaquizImg from './assets/img/javascript-timed-quiz-preview.png'



const Projects = () => {
    return (    
        <div id="projects">
            <h1 class="d-flex h-section">projects</h1>
                <hr class="d-flex"></hr>
                <p class="d-flex">Projects created and designed by B McCool. Live and deployed views available through the "Live" button on the cards below</p>

                <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 d-flex justify-content-center" id="card-row">

                    <div class="col-auto top-app-card justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <Icon icon="tabler:file-music" class="app-card-icon" color="white" width="25px" height="25px"/>
                            <img class="d-inline-flex flex-shrink-1 app-card-img" src={pinkguyImg}></img>
                            <h2>Artist Fan Page</h2>
                            <p>Artist tribute website with music player and bio</p>
                            <a class="btn app-card-btn" role="button" href="https://doxxus.com/msubootcamp/Activity_Favorite_Musician/fanpage.html">view</a>
                        </div>
                    </div>

                    <div class="col-auto justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <img class="app-card-icon" src={rabitIcon}></img>
                            <img class="d-inline-flex flex-shrink-1 app-card-img" src={rabithabitImg}></img>
                            <h2>Rabit Habit</h2>
                            <p>Habit tracking progressive web application</p>
                            <a class="btn app-card-btn" role="button" href="https://rabit-habit.herokuapp.com/login">view</a>
                        </div>
                    </div>

                    <div class="col-auto justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <Icon icon="tabler:plant-2" class="app-card-icon" color="white" width="25px" height="25px"/>
                            <img class="d-inline-flex flex-shrink-1 app-card-img"  src={anewleafImg}></img>
                            <h2>A New Leaf</h2>
                            <p>Web app for plant information, and water scheduling</p>
                            <a class="btn app-card-btn" role="button" href="https://rabit-habit.herokuapp.com/login">view</a>
                        </div>
                    </div>

                    <div class="col-auto justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <Icon icon="bi:bounding-box" class="app-card-icon" color="white" width="25px" height="25px" />
                            <img class="d-inline-flex flex-shrink-1 app-card-img" src={watchthatboxImg}></img>
                            <h2>Flexbox Demo</h2>
                            <p>Live transition CSS animations demo</p>
                            <a class="btn app-card-btn" role="button" href="https://doxxus.com/msubootcamp/watch-that-box/index.html">view</a>
                        </div>
                    </div>

                    <div class="col-auto justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <Icon icon="uil:cloud" class="app-card-icon" color="white" width="25px" height="25px" />
                            <img class="d-inline-flex flex-shrink-1 app-card-img" src={weatherImg}></img>
                            <h2>Weather Dashboard</h2>
                            <p>Local weather API with live updates and dynamic updates</p>
                            <a class="btn app-card-btn" role="button" href="https://m-ccool.github.io/Weather-Dashboard-API/">view</a>
                        </div>
                    </div>

                    <div class="col-auto justify-content-center app-col">
                        <div class="text-center d-flex align-items-start align-items-xxl-start app-card" id="app-card-1">
                            <Icon icon="tabler:pencil" class="app-card-icon" color="white" width="25px" height="25px"/>
                            <img class="d-inline-flex flex-shrink-1 app-card-img"  alt="img" src={javaquizImg}></img>
                            <h2>Javascript Quiz</h2>
                            <p>Timed Javascript built coding quiz with timer</p>
                            <a class="btn app-card-btn" role="button" href="https://m-ccool.github.io/Javascript-Timed-Quiz/">view</a>
                        </div>
                     </div>

            </div>
                
        </div>   
           
    )
};

export default Projects