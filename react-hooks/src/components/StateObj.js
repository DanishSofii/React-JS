import React,{useState} from 'react';

function StateObj(){
    const [name , setName] = useState({firstName : '' , lastName : ''});

    return(
        <div>

            <form>
                <input type="text" value={name.firstName} onChange={e=> setName({...name, firstName : e.target.value})}/>
                <input type='text' value={name.lastName} onChange={e => setName({...name , lastName : e.target.value})}/>
            </form>
            FirstName : {name.firstName}
            LastName : {name.lastName}
        </div>
    )
}

export default StateObj