import React from 'react';
import back from '../assets/arrow-back.svg';
import './Flow.css';

class Flow extends React.Component {

    state = { currentAGT: 90, currentBOK: 104, currentSPIN: 111, currentPKT: 95};
    
    setGraphwidths() {
        document.documentElement.style.setProperty('--current-agt', '${this.state.currentAGT}%')
        document.documentElement.style.setProperty('--current-bok', '${this.state.currentAGT}%')
        document.documentElement.style.setProperty('--current-spin', '${this.state.currentAGT}%')
        document.documentElement.style.setProperty('--current-pkt', '${this.state.currentAGT}%')
    }

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
                <section className='graph'>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            AGT
                            <div className='graph-bar-current current-agt'></div>
                        </div>
                        <p>10⮟</p>
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            BOK
                            <div className='graph-bar-current current-bok'></div>
                        </div>
                        <p>10⮟</p>
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            SPIN
                            <div className='graph-bar-current current-spin'></div>
                        </div>
                        <p>10⮟</p>
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            PKT
                            <div className='graph-bar-current current-pkt'></div>
                        </div>
                        <p>10⮟</p>
                    </section>
                </section>
                <header className='header'>
                    <p>suggested actions</p>
                </header>
            </main>
        )
    }
}

export default Flow;