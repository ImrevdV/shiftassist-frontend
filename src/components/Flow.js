import React from 'react';
import back from '../assets/arrow-back.svg';
import './Flow.css';

export default function Flow() {
    return <main className="Flow-main">
        <nav className='navigation'>
            <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
            <h1>Current Flow</h1>
        </nav>
    </main>;
}