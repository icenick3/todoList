import React from 'react';

import FormForAddTask from "../../Forms/FormForAddTask/FormForAddTask";
import './ModalWindowForAddTask.css'

const ModalWindowForAddTask = ({getStatus, idForUpdate, idForDelete, active, setActive, email}) => {

    const onClick = () => {
        setActive(false)
        getStatus('url("#gooey")')
    }

    return (
            <div className={active  ? "modalAddTask active" : "modalAddTask"} onClick={onClick}>
                <div className={active  ? "modalAddTask_content active" : "modalAddTask_content"}
                     onClick={e => {
                         e.stopPropagation()
                     }}>
                    {email && <FormForAddTask idForDelete={idForDelete} idForUpdate={idForUpdate} getStatus={getStatus} setActive={setActive}/>}
                </div>
            </div>
    );
};

export default ModalWindowForAddTask;