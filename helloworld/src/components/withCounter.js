import React,{Component} from 'react';

const withCounter = (WrappedComponent) =>{
    class WithCounter extends Component{
        constructor(){
            super();
            this.state = {
                count : 0
            }
        }
        incrementCount = () =>{
            this.setState(prevState =>{
                return {count : prevState.count +1}
            })
        }
        render(){
            return(
                <WrappedComponent count = {this.state.count} incrementCount = {this.incrementCount}/>
            )
        }
    }
    return WithCounter;
}

export default withCounter