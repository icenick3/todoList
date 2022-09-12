import React, {useEffect, useState} from 'react';

import './FormForAddTask.css'
import {useForm} from "react-hook-form";
import {doc,collection, addDoc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {useDispatch, useSelector} from "react-redux";
import {setTask} from "../../store/slices/taskSlice";



const FormForAddTask = ({sendTasks, idForDelete, idForUpdate}) => {

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const {handleSubmit, reset, register} = useForm()
    const user = useSelector(state => state.user)
    const [tasks, setTasks] = useState([])
    const dispatch = useDispatch()




    useEffect(() => {
           if (name && description){
            try {
                const addTodo = async () => {
                    const docRef = await addDoc(collection(db, user.email), {
                        name: name,
                        description: description,
                        date: new Date().toLocaleDateString("en-Us"),

                    });
                    console.log(docRef);
                }
                addTodo()
            } catch (e) {
                console.error(e)
            }
           }
    }, [name])


    useEffect(()=> {
        setTasks(tasks.filter(task => task.id !== idForDelete))
    }, [idForDelete])

    useEffect(()=>{
        if (user.email){
            const getTasks = async ()=> {
                const data = await getDocs(collection(db, user.email));
                data.docs.map((task) => dispatch(setTask({...task.data(), id: task.id})))
            }
            getTasks()
        }
    },[name || user])

    sendTasks(tasks)

    const onSubmit = (e) => {
        setName(e.name)
        setDescription(e.description)
        reset()
    }

    return (
        <div className={'formBlock'}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'Name'} {...register('name')} />
                <input type="text" placeholder={'Description'} {...register('description')} />
                <button>Add Task</button>
            </form>
        </div>
    );
};

export default FormForAddTask;