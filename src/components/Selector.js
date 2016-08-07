import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import giphyAPI from '../adapters/adapter.js'

class Selector extends Component {

  constructor(props){
  	super(props)
  }

  findGiphs () {
  	event.preventDefault()
    var search = document.querySelector('input').value

    giphyAPI(search).then(
      (results)=>{
      	// this here equals the get request
        this.setState({search: search});
        search="";
        this.props.displayResults(results.data);
    })
  }

  render() {
    return (
    	<form onSubmit={this.findGiphs.bind(this)} >
    		<input type='text' placeholder="Search something" />
    	</form>
    );
  }
}

export default Selector