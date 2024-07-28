import React,{useState} from 'react';

function StateArray(){
    const [items, setItems] = useState([]);
    const clickHandler = ()=>{
        setItems([...items,10] )
    }
    return(
        <div>
            <ul>
                {items.map(item =>
                    (
                        <li>{item}</li>
                    )
                )}
            </ul>
            <button onClick={clickHandler}  >Append</button>
        </div>
    )
}

export default StateArray