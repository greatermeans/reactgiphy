import React, { Component } from 'react';
import ImageItem from './ImageItem.js'

class ImageRow extends Component {

  RenderGiphs () {
  	return this.props.data.map((giph)=> {
  		return <ImageItem key={giph.id} width={giph.images.fixed_height.width} height={giph.images.fixed_height.height}  gifSrc={giph.images.fixed_height.url} stillSrc={giph.images.fixed_height_still.url} />
  	})
  }

  render() {
    return (
      <div id='collection'> {this.RenderGiphs()} </div>
    );
  }
}


export default ImageRow