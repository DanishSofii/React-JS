import React,{Component} from 'react';
import Refs from './Refs';
class RefsParent extends Component{
    constructor(){
        super();

        this.componentRef = React.createRef();
    }
    clickHandler = () =>{
        this.componentRef.current.focusInput();
    }

    render(){
        return(
            <div>
                <Refs ref = {this.componentRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default RefsParent;