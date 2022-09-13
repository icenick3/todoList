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
                const addTodo = async () => {
                    const docRef = await addDoc(collection(db, email), {
                        name: target.name,
                        description: target.description,
                        time: target.time,
                        date: target.date
                    });
                }
                addTodo()
            } catch (e) {
                console.error(e)
            }
        }
    }, [target.name])

    useEffect(() => {
        if (email) {
            const getTasks = async () => {
                const data = await getDocs(collection(db, email));
                setTasks(data.docs.map(task => ({...task.data(), id: task.id})))
            }
            getTasks()
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
        <div className={'formBlock'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'Name'} {...register('name')} />
                <input type="text" placeholder={'Description'} {...register('description')} />
                <input type="date" {...register('date')} />
                <input type="time" {...register('time')} />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default FormForAddTask;