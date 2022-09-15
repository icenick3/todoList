import React, {useState} from 'react';

import ModalWindowForChangeTask from "../../ModalWindows/ModalWindowForChangeTask/ModalWindowForChangeTask";
import "./ButtonForChangeTask.css"


const ButtonForChangeTask = ({status, task, getIdForUpdate, email, getStatus}) => {

    const [active, setActive] = useState(false)

    const onClick = () => {
        setActive(true)
        getStatus('none')
    }

    return (
        <div>
            <button style={{filter: status}} id={'gooey-button-second'} onClick={onClick}>
                Edit
                {status !== 'none' && <span className="bubbles">
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
        </span>}
            </button>
            <ModalWindowForChangeTask active={active} setActive={setActive} task={task}
                                      getIdForUpdate={getIdForUpdate} email={email} getStatus={getStatus}/>
        </div>
    );
};

export default ButtonForChangeTask;