import React, {Component} from 'react';
class Buttons extends Component{
    constructor(props){
        super(props);
        this.handleclicks = this.handleclicks.bind(this);
    
    }

    handleclicks = (event)=> {
        this.props.Buttonclicked(event.target.value);
    
}
    
render(){
    return(
        <div className='button'>
        <button className='btn btn-action-mod' onClick={this.handleclicks} value ="%">%</button>
        <button className='btn btn-action-AC' onClick={this.handleclicks} value="AC">AC</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="7">7</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="8">8</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="9">9</button>
        <button className='btn btn-action-divide' onClick={this.handleclicks} value="/">/</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="4">4</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="5">5</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="6">6</button>
        <button className='btn btn-action-mul' onClick={this.handleclicks} value="*">*</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="1">1</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="2">2</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="3">3</button>
        <button className='btn btn-action-min' onClick={this.handleclicks} value="-">-</button>
        <button className='btn btn-action' onClick={this.handleclicks} value="0">0</button>
        <button className='btn btn-action-dec' onClick={this.handleclicks} value=".">.</button>
        <button className='btn btn-action-plus' onClick={this.handleclicks} value="+">+</button>
        <button className='btn btn-action-equal' onClick={this.handleclicks} value="=">=</button>



        </div>
    )
}
}
export default Buttons;