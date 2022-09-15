import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {doc, updateDoc} from "firebase/firestore";

import {db} from "../../../firebase";
import './FormForChangeTask.css'

const FormForChangeTask = ({setActive, getStatus, task, getIdForUpdate, email}) => {

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
        getStatus('url("#gooey")')
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
        <div className={'formChange'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="centered">
                    <div className="group">
                        <input id="name" type="text" required="required"  {...register('name')} value={changedTask.name} onChange={(e) => setChangedTask({...changedTask, name: e.target.value})}/>
                        <label id={'label'} htmlFor="name">Name</label>
                        <div className="bar"></div>
                    </div>
                </div>
                <textarea id="description" cols="30" rows="10" {...register('description')} value={changedTask.description} onChange={(e) => setChangedTask({...changedTask, description: e.target.value})}></textarea>
                <div className={'groupDate'}>
                    <div><input type="date"  lang={'en-Us'} {...register('date')} value={changedTask.date} onChange={(e) => setChangedTask({...changedTask, date: e.target.value})} /></div>
                    <div><input id="time" type="time" {...register('time')} value={changedTask.time} onChange={(e) => setChangedTask({...changedTask, time: e.target.value})}/></div>
                    <button id="buttonAdd" onClick={() => {
                        setActive(false)
                        update(task.id)
                    }}>Edit</button>
                </div>
            </form>

        </div>
    );
};

export default FormForChangeTask;