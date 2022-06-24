import React from 'react';
import back from '../assets/arrow-back.svg';
import './Guide.css';

class Guide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: 'Welcome to ShiftAssist',
          description: 'ShiftAssist is a tool that makes your shift a little easier. In this guide you can read about the different menus and how to use them.',
        };
      }
      showFirst = () => {
        this.setState({title: "Home menu"});
        this.setState({description: "In this menu you can select which station you want to fill in."});
      }

      showSecond = () => {
        this.setState({title: "Stations"});
        this.setState({description: "In the station menus you fill in the amount of bags per category. The application will calculate the maximum amount of bags."});
      }

      showThird = () => {
        this.setState({title: "Current Flow"});
        this.setState({description: "The current flow menu shows you the current load on the conveyor belts and the planned load. It also gives you suggestions about moving workers to make sure the belts keep moving. You can only access this menu if you've filled in all the stations."});
      }

    render() {
        return (
            <main className="Guide-main">
            <nav className='navigation'>
                <a href='/home'><img src={back} className="back" alt="back arrow" /></a>
                <h1>Guide</h1>
            </nav>
            <h2> {this.state.title}</h2>
            <p> {this.state.description}</p>
            <button type="button" onClick={this.showFirst}>1</button>
            <button type="button" onClick={this.showSecond}>2</button>
            <button type="button" onClick={this.showThird}>3</button>
        </main>
        );
    }
}

export default Guide;