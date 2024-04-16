import React, { Component } from 'react';
class Preloader extends Component {
    state = {  } 
    render() { 
        return (
            <div class="preloader">
                <div class="loader">
                    <div class="loader__figure"></div>
                    <p class="loader__label">monitoring</p>
                </div>
            </div>
        );
    }
}
export default Preloader;