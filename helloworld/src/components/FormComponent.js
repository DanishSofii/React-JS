import React, {Component} from 'react';

class FormComponent extends Component{
    constructor(){
        super();
        this.state={
            username : '',
            topic : '',
        }
    }
    handleUsername = (event) =>{
        this.setState({username : event.target.value});
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        alert(this.state.username);
    }
    handleChangeTopic  = (event) =>{
        this.setState({
            topic : event.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>Form Component</h1>
                <div>
                    <input type='text' placeholder="User Name" value={this.state.username} onChange={this.handleUsername} />
                </div>
                <div>
                    <select value={this.state.topic} onChange={this.handleChangeTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type='submit' onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default FormComponent