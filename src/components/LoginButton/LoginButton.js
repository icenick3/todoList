import React, {useState} from 'react';

import './LoginButton.css'
import ModalWindow from "../ModalWindow/ModalWindow";
import {useSelector} from "react-redux";
import LogoutButton from "../LogoutButton/LogoutButton";

const LoginButton = () => {

    const [modalActive, setModalActive] = useState(false)
    const user = useSelector(state => state.user)

    return (
        <div>
            {!user.email && <button className={'signIn'} onClick={() => setModalActive(true)}>log In</button>}
            {user.email && <LogoutButton/>}
            <ModalWindow active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default LoginButton;