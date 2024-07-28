import React from 'react';

function ChildComponent(props){
    var childName = "childname"
    return(
        <div>
            <button onClick={()=> props.greetHandler(childName)}>Click</button>
        </div>
    )
}

export default ChildComponent