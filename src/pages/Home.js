import React from 'react';
import { Link } from "react-router-dom"
import './Page.css'
export default function Home() {
    return (
        <div className="gradient_background">
           <div className="title">
                <p>COLTON CAULFIELD</p>
            </div> 
            <div className="trailer">
                <p> TRAILER EDITOR </p>
            </div>
            <div className="sec">
                <Link to="/About">
                    <p>Professional Work</p>
                </Link>
                
                <p>Solo Projects</p>
                <p>About/Contact</p>
                
            </div>
        </div>
    );
};

