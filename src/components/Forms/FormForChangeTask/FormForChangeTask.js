import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {doc, updateDoc} from "firebase/firestore";

import {db} from "../../../firebase";

const FormForChangeTask = ({task, getIdForUpdate, email}) => {

    const {register, reset, handleSubmit} = useForm();
    const [changedTask, setChangedTask] = useState({name: '', description: '', time: '', date: ''})

    useEffect(() => {
        setChangedTask({
            name: task.name,
            description: task.description,
            time: task.time,
            date: task.date
        })
    }, [task])

    const onSubmit = () => {
        reset()
    }

    const update = (id) => {
        if (changedTask.name || changedTask.description || changedTask.time) {
            const updateTask = async () => {
                const taskDoc = doc(db, email, id)
                await updateDoc(taskDoc, {
                    name: changedTask.name,
                    description: changedTask.description,
                    time: changedTask.time,
                    date: changedTask.date
                })
            }
            updateTask()
            getIdForUpdate(Math.random())
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} value={changedTask.name}
                       onChange={(e) => setChangedTask({...changedTask, name: e.target.value})}/>
                <input type="text" {...register('description')} value={changedTask.description}
                       onChange={(e) => setChangedTask({...changedTask, description: e.target.value})}/>
                <input type="time" {...register('time')} value={changedTask.time}
                       onChange={(e) => setChangedTask({...changedTask, time: e.target.value})}/>
                <input type="date" {...register('date')} value={changedTask.date}
                       onChange={(e) => setChangedTask({...changedTask, date: e.target.value})}/>
                <button onClick={() => update(task.id)}>Change</button>
            </form>
        </div>
    );
};

export default FormForChangeTask;