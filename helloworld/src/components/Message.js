import React,{Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : "Welcome visitor hii"
        }
    }
    changeMessage = ()=>{
        this.setState({
            message:'thank you for '
        })
    }
    render(){

        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message