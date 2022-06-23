import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

class SPIN extends React.Component {

    state = {totaal: 0, sampling: 0, rc: 0, pallets: 0, retour: 0};

    setValue = event => {
        switch (event.target.name) {
            case "sampling":
                this.setState({sampling: event.target.value});
                break;
            case "rc":
                this.setState({rc: event.target.value});
                break;
            case "pallets":
                this.setState({pallets: event.target.value});
                break;
            case "retour":
                this.setState({retour: event.target.value});
                break;
        }
        this.setState({totaal: this.state.sampling * 10 + this.state.rc * 10 + this.state.retour * 10 + this.state.pallets * 11});
        console.log(this.state.totaal);
    }

    render() {
        return (
            <main className="Station-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>SPIN</h1>
                </nav>
                <header className='header'>
                    <p>type</p> <p className='rightp'>amount</p>
                </header>
                <section className='inputLine'>
                    <label htmlFor="sampling">Sampling</label>
                    <input type="number" id="sampling" name="sampling" min="0" max="999" placeholder="0" onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="rc">RC's gericht</label>
                    <input type="number" id="rc" name="rc" min="0" max="999" placeholder="0" onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="pallets">Pallets gericht</label>
                    <input type="number" id="pallets" name="pallets" min="0" max="999" placeholder="0" onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="retour">Retouren UD</label>
                    <input type="number" id="retour" name="retour" min="0" max="999" placeholder="0" onChange={this.setValue}></input>
                </section>
                <a className='submitButton' href='/home'><button className='Button'>Submit</button></a>
            </main>
        )
        
    }
}
    
export default SPIN;