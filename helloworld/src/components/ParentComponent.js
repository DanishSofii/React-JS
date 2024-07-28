import React,{Component} from 'react';
import ChildComponent from './ChildComponent'
class ParentComponent extends Component{
    constructor(){
        super();
        this.state = ({    
            greeting: " Hello from parent"
        })
        this.greetParent = this.greetParent.bind(this);
    }
    greetParent(childName){
        alert(`${this.state.greeting} to ${childName}` );
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>  
        )
    }
}
export default ParentComponent;