import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

class SPIN extends React.Component {

    state = {totaal: 0, rc: 0};

    setValue = event => {

        this.setState({rc: event.target.value}); 
        this.setState({totaal: this.state.rc * 10});
    }

    render() {
        return (
            <main className="Station-main">
                <nav className='navigation'>
                    <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                    <h1>SPIN</h1>
                </nav>
                <header className='header'>
                    <p>Type</p> <p className='rightp'>Amount</p>
                </header>
                <section className='inputLine'>
                    <label htmlFor="rc">RC's gericht</label>
                    <input type="number" id="rc" name="rc" min="0" max="999" placeholder="0" onChange={this.setValue}></input>
                </section>
                <a className='submitButton' href='/home'><button className='Button'>Submit</button></a>
            </main>
        )
        
    }
}
    
export default SPIN;