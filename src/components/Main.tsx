import React, {  ChangeEvent, MouseEvent, useEffect, useState } from "react";
import List from "./List/List";
import Sort from "./Sort/Sort";

export type TodoProps = {
    id: number,
    value: string,
    status: boolean
}

const Main: React.FC = () => {
    const [todos, setTodos] = useState<TodoProps[]>(JSON.parse(localStorage.getItem('items') ?? '[]') || [])
    const [value, setValue] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todos));
    }, [todos]);
    

    const addTodo = (event: MouseEvent) => {
        event.preventDefault()
        if(value){
            const newItem = {
                id: todos.length ,
                value,
                status: false
            }
        
            setTodos([...todos,newItem])
        }
        setValue('')
       
    }

    const handleToggle = (id: number) => {
       setTodos([
        ...todos.map((todo)=> todo.id === id ? {...todo, status: !todo.status } : {...todo })
       ])
        
       
    }

    const removeTodo = (id:number) => {
        const deleted = todos.filter((item)=> item.id !== id)
        setTodos(deleted)
    }

    const changeStatus = (e: ChangeEvent<HTMLSelectElement>) => {
        setStatusFilter(e.target.value)
    }


    return (
        <section className="vh-90 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card">
                            <div className="card-body p-5">
                                <form className="d-flex justify-content-center align-items-center mb-4">
                                    <div className="input-group input-group-sm mb-3">
                                        <input type="text" className="form-control p-2" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="Enter todo" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                                        <button type="button" className="btn btn-warning mx-2 px-4"  onClick={addTodo}><span className="h6">Add</span></button>
                                    </div>
                                </form>
                                <Sort statusFilter={statusFilter} changeStatus={changeStatus}/>
                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1"> 
                                        {todos.length ? <List handleToggle={handleToggle} todos={todos} statusFilter={statusFilter} removeTodo={removeTodo}/>
                                        : <h3>No Todos</h3>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main