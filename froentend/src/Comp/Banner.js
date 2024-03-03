import React from 'react';
import backgroundImage from './Watch.jpg';
import "./Banner.css";

import { useEffect } from 'react';
function Banner() {
    const appStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'relative' // Set position to relative for proper positioning
    };

    const buttonContainerStyle = {
        width: 200,
        position: 'absolute',
        left: '10%', // Adjust the left position as needed
        bottom: '150px' // Adjust the bottom position as needed
    };

    const contentStyle = {
        textAlign: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add shadow for better readability
        justifyContent : 'center',
    };

    return (
        <div className="app" style={appStyle}>
        <div style={buttonContainerStyle}>
            <div className = 'justify-content-center text-center'style={contentStyle}>
                <h1 className="typing"><b>Welcome to Our Watch Collection</b></h1>
                <p>Discover the epitome of style and precision.</p>
                <button className="learn-more">
  <span aria-hidden="true" className="circle">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Explore</span>
</button>

            </div>
        </div>
    </div>
    );
}

export default Banner;
