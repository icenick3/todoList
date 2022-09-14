import React from 'react';

import FormForChangeTask from "../../Forms/FormForChangeTask/FormForChangeTask";
import './ModalWindowForChangeTask.css'

const ModalWindowForChangeTask = ({task, active, setActive, getIdForUpdate, email}) => {

    const onClick = () => {
        setActive(false)
    }

    return (
        <div className={active ? "modalChangeTask active" : "modalChangeTask"} onClick={onClick}>
            <div className={active ? "modalChangeTask_content active" : "modalChangeTask_content"} onClick={e => {
                e.stopPropagation()}}>
                <FormForChangeTask task={task} email={email} getIdForUpdate={getIdForUpdate}/>
            </div>
        </div>
    );
};

export default ModalWindowForChangeTask;