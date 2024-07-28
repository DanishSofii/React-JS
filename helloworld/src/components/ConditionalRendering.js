import React , {Component} from 'react';

class ConditionalRendering extends Component{
    constructor(props){
        super();
        this.state = {
            loggedIn :false
        }
    }

    render(){
        return this.state.loggedIn ?(<h1>Welcome User</h1>):(<h1>Welcome Guest</h1>)
    }
}
export default ConditionalRendering