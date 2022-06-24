import React from 'react';
import logo from '../assets/logo.png';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <main className="Home-main">
                <img src={logo} className="Home-logo" alt="logo" />
                <h1>ShiftAssist</h1>
                <h2>Select station</h2>
                <a href='/agt' className='Button'>AGT</a>
                <a href='/bok' className='Button'>BOK</a>
                <a href='/spin' className='Button'>SPIN</a>
                <a href='/pkt' className='Button'>PKT</a>
                <a href='/flow' className='Button'>Current Flow</a>
            </main>
        );
    }
}

export default Home;