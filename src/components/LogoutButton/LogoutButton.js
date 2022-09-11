import React from 'react';
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/slices/userSlice";

const LogoutButton = () => {

    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(removeUser())
    }


    return (
        <div>
            <button onClick={()=>onClick()}>Log Out</button>
        </div>
    );
};

export default LogoutButton;