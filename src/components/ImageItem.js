import React, { Component } from 'react';

class ImageItem extends Component {

  constructor (props) {
  	super(props)
  	this.state = {source: this.props.stillSrc}
  }

  Moused () {
  	this.setState({
  		source: this.props.gifSrc
  	})
  }

  unMoused () {
  	this.setState({
  		source: this.props.stillSrc
  	})
  }

  render() {
    return (
    	<figure className='grid-item'>
          <img src={this.state.source} alt="" onMouseOver={this.Moused.bind(this)} onMouseOut={this.unMoused.bind(this)}/>
        </figure>
    );
  }
}


export default ImageItem