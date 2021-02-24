import { useState } from "react";
import '../styles/todoList.css';

const TodoList = ({event}) => {
    const [todoList, setTodoList] = useState([]);
    const [todoComplete, setTodoComplete] = useState([]);

    const handleAddTask = (event) => {
        const newTask = document.querySelector("#task").value;
        console.log("newTask", newTask);
        setTodoList((prevTodoList) => [...prevTodoList, newTask]);
        document.querySelector("#task").value = "";
    }

    const handleDeleteTask = (index) => {
        setTodoList( ( prevTodoList ) => {
            return prevTodoList.filter( ( task, i ) => i !== index );
          } );
    }

    const handleCompleteTask =(index)=>{
        setTodoComplete((prevTodoComplete)=>[
           ...prevTodoComplete,
            todoList[index]
        ]);
        handleDeleteTask(index);
    };

    return(
        <>
            <label>Tarea</label>             
            <input type="text" id="task"/>
            <button onClick={handleAddTask}>Añadir tarea</button>
            <h1>Lista de Tareas Pendientes ({todoList.length} en total) </h1>
            <table>
              <thead>
                <tr> 
                    <th>TAREA</th>
                    <th>COMPLETADA</th>
                    <th>ELIMINAR</th>
                </tr> 
            </thead>
            <tbody>
                {todoList.map((task, index) => (
                    <tr key={index}>
                        <td> <li>{task} </li></td> 
                        <td> <button onClick={()=>handleCompleteTask(index)}>Completada</button> </td>
                        <td> <button onClick={()=>handleDeleteTask(index)}>Eliminar</button> </td>                                                
                    </tr>
                ))
                }                                                               
            </tbody>  
            </table>
            
            <h1>Lista de Tareas Completadas ({todoComplete.length} en total)</h1>
            <table>
              <thead>
                <tr>
                   <th>TAREAS COMPLETAS</th>
                </tr>
            </thead>
            <tbody>
                {todoComplete.map((task, index) => (
                   <tr key={index}>
                        <td>
                            <li>{task}</li>
                        </td> 
                    </tr>
                ))
                }
            </tbody>  
            </table>
            
        </>
    );

  };

  export default TodoList;