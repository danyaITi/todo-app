import React, { useState } from "react"
import { TodoProps } from "../Main"

type ListProps = {
    handleToggle: (id:number) => void,
    todos: TodoProps[],
    statusFilter: string,
    removeTodo: (id:number) => void
}

const List: React.FC<ListProps> = ({handleToggle, todos, statusFilter, removeTodo}) => {
    const [checked, setChecked] = useState(false)
    

    const sortTodos = todos.filter((item)=>{
        if(statusFilter === 'All'){
            return true
        } else if(statusFilter === 'Completed'){
            return item.status === true
        } else if(statusFilter === 'Incompleted'){
            return item.status === false
        }
        
    })


    return (
        <ul className="list-group mb-0">
            {sortTodos.map((item)=> <li key={item.id}  className={item.status === true ? 'd-flex justify-content-between list-group-item d-flex align-items-center border-0 mb-2 rounded text-warning bg-dark bg-gradient' : 'd-flex justify-content-between list-group-item d-flex align-items-center border-1 mb-2 rounded'} style={{backgroundColor: '#f4f6f7'}}>
            <div>
                <input onClick={()=>handleToggle(item.id)} className="form-check-input me-2" checked={item.status} onChange={e => setChecked(e.target.checked)} type="checkbox" value="Incompleted" aria-label="..."  />
                <span className="mx-2">{item.value}</span>
            </div>
            <button type="button" className="btn btn-danger mx-3" onClick={()=>removeTodo(item.id)}>Delete</button>
            </li>)}
        </ul>
    )
}
export default List