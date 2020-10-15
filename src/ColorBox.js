import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    let opacityValue = this.props.opacity;
    if (this.props.opacity >= 0.2) {
      var content = (<ColorBox opacity= {this.props.opacity - 0.1} />) 
    }else if (opacityValue < 0.2) {
      content = null;
    }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {content }
      </div>
    )
  }

}

// If the opacity value is greater than or equal to 0.2:
// the ColorBox component should render another ColorBox inside itself (recursive components!)
// an opacity prop should be passed to the child
// the passed opacity prop should be reduced by 0.1

// If the opacity value is less than 0.2:
// do not render another ColorBox (or else we would have infinite ColorBoxes rendering!)
// instead, the render method should return null