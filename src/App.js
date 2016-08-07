import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import './App.css';
import giphyAPI from './adapters/adapter.js'
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
        <div id='search' className='search-bar'>
          <Selector displayResults={this.displayResults.bind(this)} />
        </div>
        <div id='giphgrid' className='grid col-md-10'>
          <ImageRow data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
