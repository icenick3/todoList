import React, {useState} from 'react';
import {useSelector} from "react-redux";

import './ButtonForLogin.css'
import ModalWindowForRegistration from "../../ModalWindows/ModalWindowForRegistration/ModalWindowForRegistration";
import ButtonForLogout from "../ButtonForLogout/ButtonForLogout";

const ButtonForLogin = () => {

    const [modalActive, setModalActive] = useState(false)
    const {email} = useSelector(state => state.user)

    return (
        <div>
            {!email && <button className={'button-login'} onClick={()=> {
                setModalActive(true)
            }}>Log In</button>}
            {email && <ButtonForLogout/>}
            <ModalWindowForRegistration active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default ButtonForLogin;