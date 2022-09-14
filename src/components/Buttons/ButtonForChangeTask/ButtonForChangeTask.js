import React, {useState} from 'react';

import ModalWindowForChangeTask from "../../ModalWindows/ModalWindowForChangeTask/ModalWindowForChangeTask";
import "./ButtonForChangeTask.css"


const ButtonForChangeTask = ({task, getIdForUpdate, email}) => {

    const [active, setActive] = useState(false)

    const onClick = () => {
        setActive(true)
    }

    return (
        <div>
            <button id={'gooey-button-second'} onClick={onClick}>
                Edit
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
            <ModalWindowForChangeTask active={active} setActive={setActive} task={task}
                                      getIdForUpdate={getIdForUpdate} email={email}/>
        </div>
    );
};

export default ButtonForChangeTask;