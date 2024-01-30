import React from "react";

import css from "../styles/SearchButtons.css"

const LocationButton = ({onClick}) => {
    return (
        <button
            className="search-box__btn-geolocation"
            title="Get my location and find the weather"
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg" 
                fill="#06283d" 
            width="35" 
            height="35" 
            viewBox="0 0 24 24"
              >
                <g>
                  <path d="M12,2A7.008,7.008,0,0,0,5,9c0,5.353,6.036,11.45,6.293,11.707l.707.707.707-.707C12.964,20.45,19,14.353,19,9A7.008,7.008,0,0,0,12,2Zm0,16.533C10.471,16.825,7,12.553,7,9A5,5,0,0,1,17,9C17,12.546,13.527,16.823,12,18.533Z"/>
                  <path d="M12,6a3,3,0,1,0,3,3A3,3,0,0,0,12,6Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,10Z"/>
                </g>
              </svg>
        </button>    
    );
};

export default LocationButton;