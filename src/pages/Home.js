import React from 'react';
import { NavLink} from "react-router-dom"
import './Home.css'
export default function Home() {
    const link = ({ isActive }) => {
        return {
            color: '#FFFFFF',
            textDecoration: 'underline',
            fontWeight: 'none',
        }
    }
    return (
        <div className="gradient_background">
           <div className="hometitle">
                <p>COLTON CAULFIELD</p>
            </div> 
            <div className="trailer">
                <p> TRAILER EDITOR </p>
            </div>
            <div className="sec">
                <NavLink style={link} to="/SoloWork" >
                    <p>Solo Projects</p>
                </NavLink>
                <NavLink style={link} to="/ProfessionalWork">
                    <p>Professional Work</p>
                </NavLink>
                <NavLink style={link} to="/About" >
                    <p>About/Contact</p>
                </NavLink>
            </div>
        </div>
    );
};

