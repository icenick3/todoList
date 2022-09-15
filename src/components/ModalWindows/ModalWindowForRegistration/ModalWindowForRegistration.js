import React, {useState} from 'react';

import './ModalWindowForRegistration.css'
import {FormForLogin}from "../../Forms/FormForLogin/FormForLogin";

const ModalWindowForRegistration = ({ active, setActive}) => {

    const onClick = () => {
        setActive(false)
        
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={onClick}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <FormForLogin setActive={setActive}/>
            </div>

        </div>
    );
};

export default ModalWindowForRegistration;