import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, tasksSelector } from "../redux/todo.slice";


export function Todo() {
    
    const dispatch = useDispatch();
    const tasks = useSelector(tasksSelector)

    useEffect(() => {
        dispatch(fetchTasks());
    }, [])

    return (
        <ul>
            {
                tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))
            }
        </ul>
    )
}