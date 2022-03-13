import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ip: '...',
      country: '...',
    }
    this.showIP()
  }
  async showIP() {
    let data = await fetch("http://ip-api.com/json")
    let json = await data.json()
    this.setState({
      ip: json.query,
      country: json.country,
    });
  }
  render(props) {
    console.log(this.state.ip)
    return (
      <span className="ip">
        <header>
          Twoje IP:
        </header> 
        <span className='moving'>{this.state.ip}</span>
        <footer>
          <span className='country'>Kraj: {this.state.country}</span>
        </footer>
      </span>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();