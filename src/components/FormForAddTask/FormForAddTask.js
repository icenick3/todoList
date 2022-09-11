import React, {useEffect, useState} from 'react';

import './FormForAddTask.css'
import {useForm} from "react-hook-form";
import {doc,collection, addDoc, getDocs, setDoc} from "firebase/firestore";
import {db} from "../../firebase";
import {useSelector} from "react-redux";


const FormForAddTask = ({sendTasks}) => {

    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)
    const {handleSubmit, reset, register} = useForm()
    const user = useSelector(state => state.user)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
           if (name && description){
            try {
                const addTodo = async () => {
                    console.log(ref)
                    const docRef = await addDoc(collection(db, user.email), {
                        name: name,
                        description: description,
                        date: new Date().toLocaleDateString("en-Us"),
                        id: new Date().getTime()
                    });
                    console.log("Document written with ID: ", docRef.id);
                }
                addTodo()
            } catch (e) {
                console.error(e)
            }
           }
    }, [name])




    useEffect(()=>{
        if (user.email){
            const getTasks = async ()=> {
                const data = await getDocs(collection(db, user.email));
                setTasks(data.docs.map(task => ({...task.data()})))
            }
            getTasks()
        }
    },[name|| user])

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