import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

class QuotesComponent extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      quote:"",
      author:"",
      quotesBank:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  getQuotes(){
    fetch(url).then(response => response.json())
      .then((results)=>{
        let arrLength= results.quotes.length;
        let randomIndex = Math.floor(Math.random() * arrLength)
        this.setState({
          quote: results.quotes[randomIndex].quote,
          author:results.quotes[randomIndex].author,
          quotesBank: [...results.quotes]
        })
      })
    
  }
  componentDidMount(){
    this.getQuotes()
    
  }

  handleSubmit(){
    let randomIndex = Math.floor(Math.random() * this.state.quotesBank.length)
    this.setState({
      quote : this.state.quotesBank[randomIndex].quote,
      author: this.state.quotesBank[randomIndex].author
    })
    console.log('I\'m handling submit')
  }
  render(){
    return(
      <div id="wrapper">
        <div id="quote-box">
            <span id="text">{this.state.quote}</span>
            {/* <p>{this.state.quote}</p> */}
            <span id="author">{this.state.author}</span>
            <div class="buttons">
                <button><a href="#" id="tweet-quote">Tweet</a></button>
                <button id='new-quote' onClick={this.handleSubmit}>New Quote</button>
            </div>
            
        </div>
      </div>
    )
  }

}
export default QuotesComponent;
