import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './Page.css';

export default function About() {
  return (
    <div className="gradient_background">
      <NavBar></NavBar>
      <div className="wrapper">
        <div className="center-content">
          <div className="imgbox img">
            <img src="/ColtonPortrait.jpg" alt="Colton Portrait" />
          </div>
        </div>
        <div className="text-group">
        Colton Caulfield is a trailer and pitch sizzle editor who has cut for independent filmmakers such as Academy Award-Winning 
        filmmaker Dorothy Fadiman, as well as larger advertising companies such as Wheelhouse Creative, Stage Six Media, Village 
        Roadshow, NEON Rated. Whether it be trailers, sizzles, reels, or roundtables, Colton understands that editing is an art 
        form that requires delving into the essence of the client's vision and transforming it into an edit that's not only visually 
        exciting but also holds gripping narrative. <br></br> <br></br>
        From conceptualization to realization, Colton is committed and excited to bring your story to life.
        </div>
      </div>
      <div className="secab">CONTACT: COLTON.CAULFI@GMAIL.COM</div>
    </div>
  );
};

