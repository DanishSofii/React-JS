import React,{Component} from 'react';

class Refs extends Component{
    constructor(){
        super();
        this.inputRef = React .createRef();
    }
    // componentDidMount(){
    //     this.inputRef.current.focus();
    // }
    focusInput = () =>{
        this.inputRef.current.focus();
    }
    handleClick = () =>{
        alert(`the name is : ${this.inputRef.current.value}`);
    }

    render(){
        return(
            <div>
                <input type="text" ref = {this.inputRef}/>
                {/* <button type='submit' onClick={this.handleClick}>Submit</button> */}
            </div>
        )
    }
}

export default Refs;