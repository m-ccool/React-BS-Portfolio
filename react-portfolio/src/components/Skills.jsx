import React from 'react';
import { Icon } from '@iconify/react';

import './App.css'
import './index.css'

const Skills = () => {
    return (    
        <div id="skills">
            <div class="row" id="skills-p">
                <div class="col">
                    <h1>SKILLS</h1>
                    <hr></hr>
                    <p>As a fullstack web developer, specializing in visual design and UX, these are the skills I'm pursuing:</p>
                </div>
            </div>
            <div class="row text-c d-flex flex-row justify-content-center" id="skill-cards">

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:react" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:nodejs-icon" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="akar-icons:nextjs-fill" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:npm" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:bootstrap" color="white" width="35px" height="35px"/>
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:tailwindcss-icon" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="vscode-icons:file-type-css" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="vscode-icons:file-type-html" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="vscode-icons:file-type-js-official" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="ic:baseline-php" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:mongodb-icon" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:mysql" color="white" width="35px" height="35px" class="skill-card-img" />
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:adobe-illustrator" color="white" width="35px" height="35px" class="skill-card-img"/>
                    </div>
                </div>

                <div class="col-auto d-flex">
                    <div id="skill-card" class="skill-card">
                        <Icon icon="logos:adobe-xd" color="white" width="35px" height="35px" class="skill-card-img"/>
                    </div>
                </div>
            </div>            
        </div>             
    )
};

export default Skills