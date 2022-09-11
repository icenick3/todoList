import React from 'react';

import "./Header.css"
import FormForAddTask from "../FormForAddTask/FormForAddTask";
import LoginButton from "../LoginButton/LoginButton";
import {useSelector} from "react-redux";

const Header = ({sendTasks}) => {

    const user = useSelector(state => state.user)

    return (
        <div className={"header"}>
            <h1>What's the Plan for Today?</h1>
            <div className={'flex'}>
            <FormForAddTask sendTasks={sendTasks}/>
            <LoginButton/>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Header;