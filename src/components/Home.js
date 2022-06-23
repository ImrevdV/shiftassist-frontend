import React from 'react';
import logo from '../logo.png';
import './Home.css';

export default function Home() {
    return <main className="Home-main">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>ShiftAssist</h1>
        <h2>Select station</h2>
        <a href='/agt' className='Button'>AGT</a>
        <a href='/bok' className='Button'>BOK</a>
        <a href='/spin' className='Button'>SPIN</a>
        <a href='/pkt' className='Button'>PKT</a>
        <a href='/flow' className='Button Disabled'>Current Flow</a>
    </main>;
}