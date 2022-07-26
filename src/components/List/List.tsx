import React from "react"
import { TodoProps } from "../Main"

type ListProps = {
    handleToggle: (id:number) => void,
    todos: TodoProps[],
    statusFilter: string,
    removeTodo: (id:number) => void
}

const List: React.FC<ListProps> = ({handleToggle, todos, statusFilter, removeTodo}) => {
    

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
            {sortTodos.map((item)=> <li key={item.id}  className={item.status === true ? 'list-group-item d-flex align-items-center border-0 mb-2 rounded text-decoration-line-through' : 'list-group-item d-flex align-items-center border-0 mb-2 rounded'} style={{backgroundColor: '#f4f6f7'}}>
            <input onClick={()=>handleToggle(item.id)} className="form-check-input me-2" checked={item.status} type="checkbox" value="Incompleted" aria-label="..."  />
            <div>{item.value}</div>
            <button type="button" className="btn btn-danger" onClick={()=>removeTodo(item.id)}>Delete</button>
            </li>)}
        </ul>
    )
}
export default List