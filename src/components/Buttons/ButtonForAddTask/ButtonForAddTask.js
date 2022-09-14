import React, {useEffect, useState} from 'react';

import ModalWindowForAddTask from "../../ModalWindows/ModalWindowForAddTask/ModalWindowForAddTask";
import './ButtonForAddTask.css'
import {useSelector} from "react-redux";

const ButtonForAddTask = ({idForUpdate, idForDelete, obj}) => {

    const [modalActive, setModalActive] = useState(false)
    const {email} = useSelector(state => state.user)

    useEffect(() => {
    if (obj.status === false){
        setModalActive(false)
    }
    }, [obj.number])

    const animateButton = (e) => {
        setModalActive(true)
        e.target.classList.remove("animate");
        e.target.classList.add("animate");
        setTimeout(function () {
            e.target.classList.remove("animate");
        }, 700);
    };

    return (
        <div>
            <button className={"bubbly-button"} onClick={animateButton}>Add Task</button>
            <ModalWindowForAddTask active={modalActive} setActive={setModalActive} idForDelete={idForDelete}
                                   idForUpdate={idForUpdate} email={email}/>
        </div>
    );
};

export default ButtonForAddTask;