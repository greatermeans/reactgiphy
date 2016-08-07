import React, { Component } from 'react';
import ImageItem from './ImageItem.js'

class ImageRow extends Component {

  RenderGiphs () {
  	return this.props.data.map((giph)=> {
  		return <ImageItem key={giph.id} gifSrc={giph.images.fixed_height.url} stillSrc={giph.images.fixed_height_still.url} />
  	})
  }

  render() {
    return (
      <div id='collection'> 
       <center><div> There are {this.props.data.length} gifs available </div></center>
       <div> {this.RenderGiphs()} </div>
      </div>
    );
  }
}


export default ImageRow