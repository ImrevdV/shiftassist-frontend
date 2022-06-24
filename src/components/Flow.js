import React from 'react';
import axios from "axios";
import back from '../assets/arrow-back.svg';
import './Flow.css';

class Flow extends React.Component {

    state = { currentAGT: 0, currentBOK: 0, currentSPIN: 0, currentPKT: 0 };
    s = 0;

    checkAPI = () => {
        var s = this.s;
        console.log(s);
        const BASE_URL = "http://localhost:8000/api/itemdetection/";
        axios.get(BASE_URL + s).then(res => {
            if (res.data != null) {
                for (let i = 0; i < res.data.length; i++) {
                    var station = res.data[i].station;
                    console.log(station);            
                    switch (station) {
                        case "AGT":
                            this.setState({currentAGT: this.state.currentAGT + 1});
                            break;
                        case "BOK":
                            this.setState({currentBOK: this.state.currentBOK + 1});
                            break;
                        case "SPIN":
                            this.setState({currentSPIN: this.state.currentSPIN + 1});
                            break;
                        case "PKT":
                            this.setState({currentPKT: this.state.currentPKT + 1});
                            break;
                    }
                }           
            }
        });
        if (s > 113) {
            clearInterval(this.interval);
        }
        else {
            s++;
            this.s = s;
        }
    }

    setGraphWidths = () => {

        var AGT_ideal = parseInt(sessionStorage.getItem('AGT_totaal'));
        var BOK_ideal = parseInt(sessionStorage.getItem('BOK_totaal'));
        var PKT_ideal = parseInt(sessionStorage.getItem('PKT_totaal'));
        var SPIN_ideal = parseInt(sessionStorage.getItem('SPIN_totaal'));

        // Ratio ten opzichte van elkaar (ideal)
        let totalItems_ideal = AGT_ideal + BOK_ideal + PKT_ideal + SPIN_ideal;

        var AGT_ratio_ideal = AGT_ideal / totalItems_ideal;
        var BOK_ratio_ideal = BOK_ideal / totalItems_ideal;
        var PKT_ratio_ideal = PKT_ideal / totalItems_ideal;
        var SPIN_ratio_ideal = SPIN_ideal / totalItems_ideal;

        // Ratio ten opzichte van elkaar (current)
        let totalItems_current = this.state.currentAGT + this.state.currentBOK + this.state.currentSPIN + this.state.currentPKT;

        var AGT_ratio_current = this.state.currentAGT / totalItems_current;
        var BOK_ratio_current = this.state.currentBOK / totalItems_current;
        var PKT_ratio_current = this.state.currentPKT / totalItems_current;
        var SPIN_ratio_current = this.state.currentSPIN / totalItems_current;

        // Verschillen tussen current en ideal per afdeling in procenten
        var AGT_diff = Math.round((AGT_ratio_ideal - AGT_ratio_current) * 100);
        var BOK_diff = Math.round((BOK_ratio_ideal - BOK_ratio_current) * 100);
        var PKT_diff = Math.round((PKT_ratio_ideal - PKT_ratio_current) * 100);
        var SPIN_diff = Math.round((SPIN_ratio_ideal - SPIN_ratio_current) * 100);

        sessionStorage.setItem('AGT_diff', AGT_diff);
        sessionStorage.setItem('BOK_diff', BOK_diff);
        sessionStorage.setItem('PKT_diff', PKT_diff);
        sessionStorage.setItem('SPIN_diff', SPIN_diff);

        var currentAGT_width = 100 + AGT_diff;
        var currentBOK_width = 100 + BOK_diff;
        var currentPKT_width = 100 + PKT_diff;
        var currentSPIN_width = 100 + SPIN_diff;

        document.documentElement.style.setProperty('--current-agt', `${currentAGT_width}%`)
        document.documentElement.style.setProperty('--current-bok', `${currentBOK_width}%`)
        document.documentElement.style.setProperty('--current-spin', `${currentSPIN_width}%`)
        document.documentElement.style.setProperty('--current-pkt', `${currentPKT_width}%`)

        console.log(this.state);
    }

    componentDidMount() {
        this.interval = window.setInterval(this.checkAPI, 1000);
        //this.checkAPI();
    }

    render() {
        this.setGraphWidths();
        var AGT_diff = parseInt(sessionStorage.getItem('AGT_diff'));
        var BOK_diff = parseInt(sessionStorage.getItem('BOK_diff'));
        var PKT_diff = parseInt(sessionStorage.getItem('PKT_diff'));
        var SPIN_diff = parseInt(sessionStorage.getItem('SPIN_diff'));

        return (
            <main className="Flow-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>Current Flow</h1>
                </nav>
                <header className='header'>
                    <p>Station</p> <p className='rightp'>%</p>
                </header>
                <section className='graph'>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            AGT
                            <div className='graph-bar-current current-agt'></div>
                        </div>
                        {AGT_diff > 0 ? <p>{AGT_diff} ▲</p> : <p>{Math.abs(AGT_diff)} ▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            BOK
                            <div className='graph-bar-current current-bok'></div>
                        </div>
                        {BOK_diff > 0 ? <p>{BOK_diff} ▲</p> : <p>{Math.abs(BOK_diff)} ▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            SPIN
                            <div className='graph-bar-current current-spin'></div>
                        </div>
                        {SPIN_diff > 0 ? <p>{SPIN_diff} ▲</p> : <p>{Math.abs(SPIN_diff)} ▼</p>}
                    </section>
                    <section className='graph-section'>
                        <div className='graph-bar'>
                            PKT
                            <div className='graph-bar-current current-pkt'></div>
                        </div>
                        {PKT_diff > 0 ? <p>{PKT_diff} ▲</p> : <p>{Math.abs(PKT_diff)} ▼</p>}
                    </section>
                </section>
                <header className='header'>
                    <p>Suggested actions</p>
                </header>
                <section className='suggestedAction'>
                    <section className='higher'>
                        {AGT_diff > 0 && <p>AGT</p>}
                        {BOK_diff > 0 && <p>BOK</p>}
                        {SPIN_diff > 0 && <p>SPIN</p>}
                        {PKT_diff > 0 && <p>PKT</p>}
                    </section>
                    <p>ᐅᐅᐅ</p>
                    <section className='lower'>
                        {AGT_diff < 0 && <p>AGT</p>}
                        {BOK_diff < 0 && <p>BOK</p>}
                        {SPIN_diff < 0 && <p>SPIN</p>}
                        {PKT_diff < 0 && <p>PKT</p>}
                    </section>
                </section>
            </main>
        )
    }
}

export default Flow;