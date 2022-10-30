import React from 'react'
import { Icon } from '@iconify/react';

const Header = () => {
    return (    
    <section id="header">
        <header>
            <div class="row">
            <div class="col justify-content-end">
                <h1 class="text-center">mccool web dev    
                <Icon icon="tabler:user-circle" color="white" width="25px" height="25px"/>
                </h1>
            </div>
            </div>
        </header>
    </section>
    )
};

export default Header