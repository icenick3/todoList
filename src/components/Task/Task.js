import React, {useEffect} from 'react';
import {deleteDoc, doc} from "firebase/firestore";
import {useSelector} from "react-redux";

import {db} from "../../firebase";
import './Task.css'
import ButtonForChangeTask from "../Buttons/ButtonForChangeTask/ButtonForChangeTask";




const Task = ({getId, task, getIdForUpdate}) => {

    const {email} = useSelector(state => state.user)
    console.log(task)

    const deleteTask = () => {
        const docRef = doc(db, email, task.id);
        deleteDoc(docRef)
            .then(() => {
                (console.log('file delete'))
            })
        getId(task.id)
    }

    const colors = ['4C0033' , 'AF0171']
    let color = ''
    const random = () => {
        color = colors[Math.floor(Math.random()* colors.length)]
    }
    random()

    console.log(task)
    return (
        <div style={{background: '#'+ color}} className={'task-block'}>
            <h4 className={'name'}>{task.name}</h4>
            <div className={'description'}>{task.description}</div>
            <div className={'date'}>Date: {task.date} {task.time}</div>
            <div className={'flex'}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="gooey">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"/>
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                                           result="highContrastGraphic"/>
                            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop"/>
                        </filter>
                    </defs>
                </svg>

                <button className="gooey-button" onClick={()=>{deleteTask()}}>
                    Delete
                    <span className="bubbles">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
        </span>
                </button>
                <ButtonForChangeTask task={task} getIdForUpdate={getIdForUpdate} email={email}/>
            </div>
        </div>
    );
};

export default Task;