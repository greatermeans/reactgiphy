import React, { Component } from 'react';

class ImageItem extends Component {

  render() {
    return (
    	<figure>
          <img src={this.props.stillSrc} width={this.props.width} height={this.props.height} alt="" />
        </figure>
    );
  }
}


export default ImageItem