import React from 'react';
import back from '../assets/arrow-back.svg';
import './Flow.css';

class Flow extends React.Component {

    render() {
        console.log("AGT totaal:", sessionStorage.getItem('AGT_totaal'));
        console.log("BOK totaal:", sessionStorage.getItem('BOK_totaal'));
        console.log("PKT totaal:", sessionStorage.getItem('PKT_totaal'));
        console.log("SPIN totaal:", sessionStorage.getItem('SPIN_totaal'));
        return (
            <main className="Flow-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>Current Flow</h1>
                </nav>
            </main>
        )
    }
}

export default Flow;