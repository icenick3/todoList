import React from 'react';

import FormForAddTask from "../../Forms/FormForAddTask/FormForAddTask";
import './ModalWindowForAddTask.css'
import MessageForNonLogin from "../../MessageForNon-login/MessageForNon-login";

const ModalWindowForAddTask = ({idForUpdate, idForDelete, active, setActive, email}) => {

    const onClick = () => {
        setActive(false)
    }

    return (
            <div className={active  ? "modalAddTask active" : "modalAddTask"} onClick={onClick}>
                <div className={active  ? "modalAddTask_content active" : "modalAddTask_content"}
                     onClick={e => {
                         e.stopPropagation()
                     }}>
                    {email && <FormForAddTask idForDelete={idForDelete} idForUpdate={idForUpdate}/>}
                    {!email &&<MessageForNonLogin/>}
                </div>
            </div>
    );
};

export default ModalWindowForAddTask;