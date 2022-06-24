import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

class BOK extends React.Component {

    state = {totaal: 0, belbaan: 0, bakwagens: 0, gateway: 0};

    setValue = event => {
        switch (event.target.name) {
            case "belbaan":
                this.setState({belbaan: event.target.value});
                sessionStorage.setItem('BOK_belbaan', event.target.value);
                break;
            case "bakwagens":
                this.setState({bakwagens: event.target.value});
                sessionStorage.setItem('BOK_bakwagens', event.target.value);
                break;
            case "gateway":
                this.setState({gateway: event.target.value});
                sessionStorage.setItem('BOK_gateway', event.target.value);
                break;
        };
        this.setState({totaal: this.state.belbaan * 10 + this.state.bakwagens * 2 + this.state.gateway * 10}, () => {
            sessionStorage.setItem('BOK_totaal', this.state.totaal);
        });
    };

    render() {
        return (
            <main className="Station-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>BOK</h1>
                </nav>
                <header className='header'>
                    <p>Type</p> <p className='rightp'>Amount</p>
                </header>
                <section className='inputLine'>
                    <label htmlFor="belbaan">Belbaan</label>
                    <input type="number" id="belbaan" name="belbaan" min="0" max="999" placeholder={sessionStorage.getItem('BOK_belbaan')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="bakwagens">Zakkenrek Bakwagens</label>
                    <input type="number" id="bakwagens" name="bakwagens" min="0" max="999" placeholder={sessionStorage.getItem('BOK_bakwagens')} onChange={this.setValue}></input>
                </section>
                <section className='inputLine'>
                    <label htmlFor="gateway">Zakkenrek Gateway</label>
                    <input type="number" id="gateway" name="gateway" min="0" max="999" placeholder={sessionStorage.getItem('BOK_gateway')} onChange={this.setValue}></input>
                </section>
                <a className='submitButton' href='/home'><button className='Button'>Submit</button></a>
            </main>
        )
        
    }
}
    
export default BOK;