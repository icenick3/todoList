import React from 'react';
import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {useSelector} from "react-redux";


const Task = ({task, takeId, getIdForUpdate}) => {


    const {email} = useSelector(state => state.user)




    const deleteTask = () => {
        const docRef = doc(db, email, task.id);
        deleteDoc(docRef)
            .then(() => {
                (console.log('file delete'))
            })
        takeId(task.id)
    }


    const update = (id) => {
        const updateTask = async () => {
            const taskDoc = doc(db,email ,id)
            await updateDoc(taskDoc, {
                name: "complete655656"
            })

        }
        updateTask()
        getIdForUpdate(task.id)
    }







    return (
        <div>
            Name - {task.name}
            Description - {task.description}
            <button onClick={()=>{deleteTask()}}>Delete</button>
            <button onClick={()=>{update(task.id)}}>Change</button>
        </div>
    );
};

export default Task;