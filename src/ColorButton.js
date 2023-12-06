import React, { PureComponent } from 'react'

 class ColorButton extends PureComponent {
  render() {
    const { color, toggleColor, buttonName } = this.props;

    return (
        <button  > Click me</button>
    )
  }
}

export default ColorButton
