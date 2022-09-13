import React, {useState} from 'react';

import './MainComponent.css'
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

const MainComponent = () => {

    const [tasks, setTasks] = useState([])
    const [idForDelete, setIdForDelete] = useState(null)
    const [idForUpdate, setIdUpdate] = useState(null)

    const sendTasks = (tasks) => {
        setTasks(tasks)
    }
    const getId = (id) => {
        setIdForDelete(id)
    }
    const getIdForUpdate = (id) => {
        setIdUpdate(id)
    }

    return (
        <div className={'mainBlock'}>
            <Header sendTasks={sendTasks} idForDelete={idForDelete} idForUpdate={idForUpdate}/>
            <TodoList tasks={tasks} getId={getId} getIdForUpdate={getIdForUpdate}/>
        </div>
    );
};

export default MainComponent;