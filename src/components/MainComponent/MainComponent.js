import React, {useState} from 'react';

import './MainComponent.css'
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

const MainComponent = () => {

    const [tasks, setTasks] = useState([])
    const [idForDelete, setIdForDelete] = useState(null)
    const [idForUpdate, setIdUpdate] = useState(null)
    const [status, setStatus] = useState()

    const sendTasks = (tasks) => {
        setTasks(tasks)
    }
    const getId = (id) => {
        setIdForDelete(id)
    }
    const getIdForUpdate = (id) => {
        setIdUpdate(id)
    }
    const getStatus = (status) =>  {
        setStatus(status)
    }

    return (
        <div className={'mainBlock'}>
            <Header sendTasks={sendTasks} idForDelete={idForDelete} idForUpdate={idForUpdate} getStatus={getStatus}/>
            <TodoList tasks={tasks} getId={getId} getIdForUpdate={getIdForUpdate} status={status} getStatus={getStatus}/>
        </div>
    );
};

export default MainComponent;