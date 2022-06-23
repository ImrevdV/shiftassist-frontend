import React from 'react';
import back from '../assets/arrow-back.svg';
import './Flow.css';

class Flow extends React.Component {

    state = { currentAGT: 90, currentBOK: 104, currentSPIN: 111, currentPKT: 95 };

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
                        {this.state.currentAGT > 100 ? <p>{this.state.currentAGT - 100}▲</p> : <p>{100 - this.state.currentAGT}▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            BOK
                            <div className='graph-bar-current current-bok'></div>
                        </div>
                        {this.state.currentBOK > 100 ? <p>{this.state.currentBOK - 100}▲</p> : <p>{100 - this.state.currentBOK}▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            SPIN
                            <div className='graph-bar-current current-spin'></div>
                        </div>
                        {this.state.currentSPIN > 100 ? <p>{this.state.currentSPIN - 100}▲</p> : <p>{100 - this.state.currentSPIN}▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            PKT
                            <div className='graph-bar-current current-pkt'></div>
                        </div>
                        {this.state.currentPKT > 100 ? <p>{this.state.currentPKT - 100}▲</p> : <p>{100 - this.state.currentPKT}▼</p>}
                    </section>
                </section>
                <header className='header'>
                    <p>suggested actions</p>
                </header>
                <section className='suggestedAction'>
                    <section className='higher'>
                        {this.state.currentAGT > 100 && <p>AGT</p>}
                        {this.state.currentBOK > 100 && <p>BOK</p>}
                        {this.state.currentSPIN > 100 && <p>SPIN</p>}
                        {this.state.currentPKT > 100 && <p>PKT</p>}
                    </section>
                    <p>ᐅᐅᐅ</p>
                    <section className='lower'>
                        {this.state.currentAGT < 100 && <p>AGT</p>}
                        {this.state.currentBOK < 100 && <p>BOK</p>}
                        {this.state.currentSPIN < 100 && <p>SPIN</p>}
                        {this.state.currentPKT < 100 && <p>PKT</p>}
                    </section>
                </section>
            </main>
        )
    }
}

export default Flow;