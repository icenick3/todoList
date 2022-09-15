import React from 'react';

import FormForChangeTask from "../../Forms/FormForChangeTask/FormForChangeTask";
import './ModalWindowForChangeTask.css'

const ModalWindowForChangeTask = ({getStatus, task, active, setActive, getIdForUpdate, email}) => {

    const onClick = () => {
        setActive(false)
        getStatus('url("#gooey")')
    }

    return (
        <div className={active ? "modalChangeTask active" : "modalChangeTask"} onClick={onClick}>
            <div className={active ? "modalChangeTask_content active" : "modalChangeTask_content"} onClick={e => {
                e.stopPropagation()}}>
                <FormForChangeTask getStatus={getStatus} task={task} email={email} getIdForUpdate={getIdForUpdate}/>
            </div>
        </div>
    );
};

export default ModalWindowForChangeTask;