import React from 'react';
import back from '../assets/arrow-back.svg';
import './Guide.css';

class Guide extends React.Component {
    render() {
        return (
            <main className="Guide-main">
            <nav className='navigation'>
                <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                <h1>Guide</h1>
            </nav>
        </main>
        );
    }
}

export default Guide;