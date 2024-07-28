import React ,{ Component} from 'react';
import withCounter from './withCounter';
class NewCounter extends Component{
    render(){
        const {count,incrementCount} = this.props
        return(
            <div>
                <button onClick={incrementCount}>Count is {count}</button>
            </div>
        )   
    }
}

export default withCounter(NewCounter)