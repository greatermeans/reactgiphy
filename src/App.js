import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'
import logo from './logo.svg';
import './App.css';
import giphyAPI from './adapters/adapter.js'
import ImageItem from './components/ImageItem.js'
import ImageRow from './components/ImageRow.js'
import Selector from './components/Selector.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      results: []
    }
  }

  componentWillMount(){
    giphyAPI("Funny Cats").then(
      (initialSearch)=>this.setState({results:  initialSearch.data})
    )
  }

  displayResults (data) {
    this.setState({
      results: data
    })
  }

  render() {
    return (
      <div className='main'>
        <div id='search'>
          <Selector displayResults={this.displayResults.bind(this)} />
        </div>
        <div id='giphgrid'>
          <ImageRow data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
