import React, { PureComponent } from 'react'
import WithColor from './withColor';

 class ColorButton extends PureComponent {
  render() {
    const { color, toggleColor } = this.props;

    return (
        <button style={{backgroundColor: color}} onClick={toggleColor}  > Click me for color change</button>
    )
  }
}

export default WithColor(ColorButton)
