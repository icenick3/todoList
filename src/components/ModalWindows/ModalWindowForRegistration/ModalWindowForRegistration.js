import React, {useState} from 'react';

import './ModalWindowForRegistration.css'
import {FormForLogin}from "../../Forms/FormForLogin/FormForLogin";
import {FormForRegistration} from "../../Forms/FormForRegistration/FormForRegistration";

const ModalWindowForRegistration = ({active, setActive}) => {

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

export default ModalWindowForRegistration;