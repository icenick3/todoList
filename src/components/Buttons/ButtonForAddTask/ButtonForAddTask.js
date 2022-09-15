import React, {useState} from 'react';

import ModalWindowForAddTask from "../../ModalWindows/ModalWindowForAddTask/ModalWindowForAddTask";
import './ButtonForAddTask.css'
import {useSelector} from "react-redux";

const ButtonForAddTask = ({getStatus, idForUpdate, idForDelete}) => {

    const [modalActive, setModalActive] = useState(false)
    const {email} = useSelector(state => state.user)


    const animateButton = (e) => {
        if (email){
            setModalActive(true)
        }
        getStatus('none')
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
                                   idForUpdate={idForUpdate} email={email} getStatus={getStatus}/>
        </div>
    );
};

export default ButtonForAddTask;