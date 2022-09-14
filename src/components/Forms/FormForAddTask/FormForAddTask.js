import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {collection, addDoc, getDocs} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";

import './FormForAddTask.css'
import {db} from "../../../firebase";
import {setTask} from "../../../store/slices/taskSlice";


const FormForAddTask = ({idForDelete, idForUpdate}) => {

    const [target, setTarget] = useState({name: null, description: null, time: null, date: null})
    const {handleSubmit, reset, register} = useForm()
    const {email} = useSelector(state => state.user)
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (target.name && target.description) {
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
    }

    return (
        <div className={'formForAddTask'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div><input type="text" placeholder={'Name'} {...register('name')} /></div>
                <div> <input type="text" placeholder={'Description'} {...register('description')} /></div>
                <div><input type="date" {...register('date')} /></div>
                <div><input type="time" {...register('time')} /></div>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default FormForAddTask;