import React, { useState } from 'react';

function ToDoList(){

    const [tasks, setTasks]= useState(["Eat breakfast","Go for a walk","Complete the report"]);
    const [newTask, setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]); 
        setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if (index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]]=[updatedTasks[index-1],updatedTasks[index ]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if (index<tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]]=[updatedTasks[index+1],updatedTasks[index ]];
            setTasks(updatedTasks);
        }
    }

    return (
    <div className='to-do-list'>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
        <h1>To-Do-List</h1>
        
        <div>
            <input
                type="text"
                placeholder="Enter a task.."
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className='add-button'
                onClick={addTask}>
                Add
            </button>

        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                    className='delete-button'
                    onClick={() => deleteTask(index)}>
                        Done
                    </button>
                    <button 
                    className='move-button'
                    onClick={() => moveTaskUp(index)}>
                        <i class='bx bxs-chevron-up' ></i>
                    </button>
                    <button 
                    className='move-button'
                    onClick={() => moveTaskDown(index)}>
                        <i class='bx bxs-chevron-down' ></i>
                    </button>
                </li>
            )}
        </ol>
    </div>
    )
}
export default ToDoList