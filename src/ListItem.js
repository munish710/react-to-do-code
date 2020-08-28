import React from 'react'
import './ListItem.css'
import {FaTrashAlt} from 'react-icons/fa'
import Flipmove from 'react-flip-move'


function ListItem(props) {
    const items=props.itemsList
    const list=items.map(item=>{
        return <div className="list" key={item.key}>
        <p>
        <input type="text" id={item.key} value={item.text} onChange={(e)=>props.updateValue(item.key,e.target.value)}>
        </input>
        <span className="delete">
        <FaTrashAlt className="fadelete" onClick={()=>props.deleteItem(item.key)}/>
        </span>
        </p>
        </div>
    })
    return (
        <div>
        <Flipmove duration={350} easing="ease-in-out">
            {list}
        </Flipmove>
        </div>
    )
}

export default ListItem
