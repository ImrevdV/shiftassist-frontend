import React from 'react';
import logo from '../assets/logo.png';
import './Home.css';

class Home extends React.Component {
    
    AGT_fields = [sessionStorage.getItem('AGT_sampling'), sessionStorage.getItem('AGT_rc'), sessionStorage.getItem('AGT_pallets'), sessionStorage.getItem('AGT_retour')];
    BOK_fields = [sessionStorage.getItem('BOK_belbaan'), sessionStorage.getItem('BOK_bakwagens'), sessionStorage.getItem('BOK_gateway')];
    SPIN_fields = [sessionStorage.getItem('SPIN_rc')];
    PKT_fields = [sessionStorage.getItem('PKT_ROW'), sessionStorage.getItem('PKT_wittekaarten'), sessionStorage.getItem('PKT_mx5'), sessionStorage.getItem('PKT_HAGB'), sessionStorage.getItem('PKT_HAGO'), sessionStorage.getItem('PKT_transit')];

    ALL_fields = [this.AGT_fields, this.BOK_fields, this.SPIN_fields, this.PKT_fields];

    checkAllFields = () => {
        sessionStorage.setItem('toggleDisabled', 'Button');
        for (let i = 0; i < this.ALL_fields.length; i++) {
            for (let j = 0; j < this.ALL_fields[i].length; j++) {
                if (this.ALL_fields[i][j] == null) {
                    sessionStorage.setItem('toggleDisabled', 'Button Disabled');
                    
                }
            }
        }
    }

    checkFields = () => {
        sessionStorage.setItem('AGTchecked', '');
        sessionStorage.setItem('BOKchecked', '');
        sessionStorage.setItem('SPINchecked', '');
        sessionStorage.setItem('BKTchecked', '');
        for (let i = 0; i < this.ALL_fields.length; i++) {
            let allChecked = true;
            for (let j = 0; j < this.ALL_fields[i].length; j++) {
                if (this.ALL_fields[i][j] == null) {                    
                    allChecked = false;
                }
            }
            if (allChecked) {
                switch (i) {
                    case 0:
                        sessionStorage.setItem('AGTchecked', 'gg-check-o');
                        break;
                    case 1:
                        sessionStorage.setItem('BOKchecked', 'gg-check-o');
                        break;
                    case 2:
                        sessionStorage.setItem('SPINchecked', 'gg-check-o');
                        break;
                    case 3:
                        sessionStorage.setItem('PKTchecked', 'gg-check-o');
                        break;

                }
            }
        }

    }

    render() {        
        this.checkFields();
        this.checkAllFields();
        return (
            <main className="Home-main">
                <img src={logo} className="Home-logo" alt="logo" />
                <h1>ShiftAssist</h1>
                <h2>Select station</h2>
                <a href='/agt' className='Button'>AGT<i className={sessionStorage.getItem('AGTchecked')}></i></a>
                <a href='/bok' className='Button'>BOK<i className={sessionStorage.getItem('BOKchecked')}></i></a>
                <a href='/spin' className='Button'>SPIN<i className={sessionStorage.getItem('SPINchecked')}></i></a>
                <a href='/pkt' className='Button'>PKT<i className={sessionStorage.getItem('PKTchecked')}></i></a>
                <a href='/flow' className={sessionStorage.getItem('toggleDisabled')}>Current Flow</a>
                <a href='/guide' className='Button'>Help</a>
            </main>
        );
    }
}

export default Home;