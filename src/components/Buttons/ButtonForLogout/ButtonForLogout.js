import React from 'react';
import {useDispatch} from "react-redux";

import {removeUser} from "../../../store/slices/userSlice";
import './ButtonForLogout.css'

const ButtonForLogout = () => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(removeUser())
    }

    return (
        <div>
            <button className={'button-logout'} onClick={()=>onClick()}>Log Out</button>
        </div>
    );
};

export default ButtonForLogout;