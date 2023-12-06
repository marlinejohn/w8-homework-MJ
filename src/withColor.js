import React , {Component, PureComponent} from 'react'

 const withColor = (ColorButton) =>{
    return class WithColor extends PureComponent{
        constructor(props){
            super(props)
            this.state = {
                color : "WHITE",
            }
        }
        toggleColor = ()=> {
            this.setState((prevState) =>({
                color: prevState.color === "WHITE"? "BLACK" : "WHITE"
            }))
        }


    
  render() {
    return (
     <ColorButton  color ={this.state.color} toggleColor ={this.toggleColor} />
    )
  }
} 

 }

 export default withColor
