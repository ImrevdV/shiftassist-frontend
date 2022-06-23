import React from 'react';
import logo from '../logo.png';
import './Home.css';

export default function Home() {
    return <main className="Home-main">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>ShiftAssist</h1>
        <h2>Select station</h2>
        <button className='Button'>AGT</button>
        <button className='Button'>BOK</button>
        <button className='Button'>SPIN</button>
        <button className='Button'>PKT</button>
        <button className='Button Button-disabled'>Current Flow</button>
    </main>;
}