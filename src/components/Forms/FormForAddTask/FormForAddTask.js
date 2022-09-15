import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";

import './FormForAddTask.css'
import {db} from "../../../firebase";
import {setTask} from "../../../store/slices/taskSlice";


const FormForAddTask = ({setActive,idForDelete, idForUpdate, getStatus}) => {

    const [target, setTarget] = useState({name: null, description: null, time: null, date: new Date().toISOString().split('T')[0]})
    const {handleSubmit, reset, register} = useForm()
    const {email} = useSelector(state => state.user)
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (target.name) {
            try {
                (async () => {
                    const docRef = await addDoc(collection(db, email), {
                        name: target.name,
                        description: target.description,
                        time: target.time,
                        date: target.date,
                    });
                })()
            } catch (e) {
                console.error(e)
            }
        }
    }, [target.name])

    useEffect(() => {
        if (email) {
            (async () => {
                const data = await getDocs(collection(db, email));
                setTasks(data.docs.map((task, index) => ({...task.data(), id: task.id})))
            })()
        }
    }, [target.name, email, idForUpdate, idForDelete])

    useEffect(() => {
        dispatch(setTask(tasks))
    }, [tasks])

    const onSubmit = (e) => {
        setTarget({
            name: e.name,
            description: e.description,
            time: e.time,
            date: e.date
        })
        reset()
        getStatus('url("#gooey")')
        setActive(false)
    }

    return (
        <div className={'formForAddTask'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="centered">
                    <div className="group">
                        <input id="name" type="text" required="required" placeholder={'Name'} {...register('name')}/>
                        <label id={'label'} htmlFor="name">Name</label>
                        <div className="bar"></div>
                    </div>
                </div>
                <textarea id="description" placeholder={'Description'} cols="30" rows="10" {...register('description')} ></textarea>
                <div className={'groupDate'}>
                    <div><input type="date" value={target.date} {...register('date')} /></div>
                    <div><input id="time" type="time" {...register('time')} /></div>
                    <button id="buttonAdd">Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default FormForAddTask;