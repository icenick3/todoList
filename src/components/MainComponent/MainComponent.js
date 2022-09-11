import React, {useState} from 'react';

import './MainComponent.css'
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";

const MainComponent = () => {

    const [tasks, setTasks] = useState([])

    const sendTasks = (tasks) => {
        setTasks(tasks)
    }

    return (
        <div className={'mainBlock'}>
            <Header sendTasks={sendTasks}/>
            <TodoList tasks={tasks}/>
        </div>
    );
};

export default MainComponent;