import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

class PKT extends React.Component {

    state = {totaal: 0, ROW: 0, wittekaarten: 0, mx5: 0, HAGB: 0, HAGO: 0, transit: 0};

    setValue = event => {
        switch (event.target.name) {
            case "ROW":
                this.setState({ROW: event.target.value});
                sessionStorage.setItem('PKT_ROW', event.target.value);
                break;
            case "wittekaarten":
                this.setState({wittekaarten: event.target.value});
                sessionStorage.setItem('PKT_wittekaarten', event.target.value);
                break;
            case "mx5":
                this.setState({mx5: event.target.value});
                sessionStorage.setItem('PKT_mx5', event.target.value);
                break;
            case "HAGB":
                this.setState({HAGB: event.target.value});
                sessionStorage.setItem('PKT_HAGB', event.target.value);
                break;
            case "HAGO":
                this.setState({HAGO: event.target.value});
                sessionStorage.setItem('PKT_HAGO', event.target.value);
                break;
            case "transit":
                this.setState({transit: event.target.value});
                sessionStorage.setItem('PKT_transit', event.target.value);
                break;
        };
        this.setState({totaal: this.state.ROW * 30 + this.state.wittekaarten * 24 + this.state.HAGB * 30 + this.state.mx5 * 6 + this.state.HAGO * 30 + this.state.transit * 30}, () => {
            sessionStorage.setItem('PKT_totaal', this.state.totaal);
        });
    }

    render() {
        return (
            <main className="Station-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>PKT</h1>
                </nav>
                <header className='header'>
                    <p>Type</p> <p className='rightp'>Amount</p>
                </header>
                <section className='inputLine'>
                    <label htmlFor="ROW">ROW</label>
                    <input type="number" id="ROW" name="ROW" min="0" max="999" placeholder={sessionStorage.getItem('PKT_ROW')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="wittekaarten">Witte kaarten</label>
                    <input type="number" id="wittekaarten" name="wittekaarten" min="0" max="999" placeholder={sessionStorage.getItem('PKT_wittekaarten')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="mx5">MX5</label>
                    <input type="number" id="mx5" name="mx5" min="0" max="999" placeholder={sessionStorage.getItem('PKT_mx5')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="HAGB">HAGB</label>
                    <input type="number" id="HAGB" name="HAGB" min="0" max="999" placeholder={sessionStorage.getItem('PKT_HAGB')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="HAGO">HAGO</label>
                    <input type="number" id="HAGO" name="HAGO" min="0" max="999" placeholder={sessionStorage.getItem('PKT_HAGO')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="transit">Transit</label>
                    <input type="number" id="transit" name="transit" min="0" max="999" placeholder={sessionStorage.getItem('PKT_transit')} onChange={this.setValue}></input>
                </section>
                <a className='submitButton' href='/home'><button className='Button'>Submit</button></a>
            </main>
        )
        
    }
}
    
export default PKT;