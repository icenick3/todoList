import React from 'react';
import {deleteDoc, doc} from "firebase/firestore";
import {db} from "../../firebase";
import {useSelector} from "react-redux";

import ButtonForChangeTask from "../Buttons/ButtonForChangeTask/ButtonForChangeTask";

const Task = ({getId, task, getIdForUpdate}) => {

    const {email} = useSelector(state => state.user)

    const deleteTask = () => {
        const docRef = doc(db, email, task.id);
        deleteDoc(docRef)
            .then(() => {
                (console.log('file delete'))
            })
        getId(task.id)
    }

    return (
        <div>
            <div>Name: {task.name}</div>
            <div>Description: {task.description}</div>
            <div>Date: {task.date} {task.time}</div>
            <button onClick={()=>{deleteTask()}}>Delete</button>
            <ButtonForChangeTask task={task} getIdForUpdate={getIdForUpdate} email={email}/>
        </div>
    );
};

export default Task;