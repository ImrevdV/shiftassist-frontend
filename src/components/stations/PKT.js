import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

export default function PKT() {
    return <main className="Station-main">
        <nav className='navigation'>
            <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
            <h1>PKT</h1>
        </nav>
    </main>;
}