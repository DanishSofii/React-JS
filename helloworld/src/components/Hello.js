import React from 'react';

const Hello = ()=>{
    // this is the jsx (javascript xml )
    // return(
    //     <div>
    //         <h1>Hello Danish</h1>
    //     </div>
    // )
    // this is normal react part:
    // the null part is the properties passed to component like id, className etc
    return React.createElement('div',null,React.createElement('h1',null,'hello danish'));
}

export default Hello;