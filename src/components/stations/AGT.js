import React from 'react';
import back from '../../assets/arrow-back.svg';
import './Station.css';

export default function AGT() {
    function setValue(event) {
        console.log(event.target.value);
    }
    return <main className="Station-main">
        <nav className='navigation'>
            <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
            <h1>AGT</h1>
        </nav>
        <header className='header'>
            <p>type</p> <p className='rightp'>amount</p>
        </header>
        <p><label for="row">ROW</label></p>
        <input type="number" id="row" name="row" min="0" max="9999" step="1" value="0" onChange={setValue}></input>
    </main>;
}