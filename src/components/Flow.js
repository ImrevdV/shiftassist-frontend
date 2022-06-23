import React from 'react';
import back from '../assets/arrow-back.svg';
import './Flow.css';

class Flow extends React.Component {
    render() {
        return (
            <main className="Flow-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>Current Flow</h1>
                </nav>
                <header className='header'>
                    <p>station</p> <p className='rightp'>%</p>
                </header>
                <header className='header'>
                    <p>suggested actions</p>
                </header>
            </main>
        )
    }
}

export default Flow;