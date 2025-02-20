import React from 'react';
import NavBar from '../components/NavBar.tsx';
import './About.css';

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
        Roadshow, NEON Rated. Whether it be trailers, sizzles, reels, or roundtables, Colton is committed and excited to bring your story to life.
        </div>
      </div>
      <div className="secab">CONTACT: COLTON.CAULFI@GMAIL.COM</div>
      <div className="gavin" onClick={() => { window.location.href = 'mailto:gavindcaulfield@gmail.com'; }}>
        Site made by Gavin Caulfield
      </div>
    </div>
  );
};

