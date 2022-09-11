import React, {useState} from 'react';

import './ModalWindow.css'
import {FormForLogin}from "../FormForLogin/FormForLogin";
import {FormForRegistration} from "../FormForRegistration/FormForRegistration";

const ModalWindow = ({active, setActive}) => {

    const [login, setLogin] = useState(true)


    const onClick = () => {
        setActive(false)
        setLogin(true)
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={onClick}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                {login && <FormForLogin setLogin={setLogin}/>}
                {!login && <FormForRegistration/>}
            </div>

        </div>
    );
};

export default ModalWindow;