import React from 'react';
import {useSelector} from "react-redux";

import "./Header.css"
import ButtonForLogin from "../Buttons/ButtonForLogin/ButtonForLogin";
import ButtonForAddTask from "../Buttons/ButtonForAddTask/ButtonForAddTask";

const Header = ({sendTasks, idForDelete, idForUpdate}) => {

    const {email} = useSelector(state => state.user)

    return (
        <div className={"header"}>
            <h1>What's the Plan for Today?</h1>
            <div className={'flex'}>
                <ButtonForAddTask sendTasks={sendTasks} idForDelete={idForDelete} idForUpdate={idForUpdate}/>
            <ButtonForLogin/>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Header;