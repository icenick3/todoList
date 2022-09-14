import React, {useState} from 'react';
import {useSelector} from "react-redux";

import "./Header.css"
import ButtonForLogin from "../Buttons/ButtonForLogin/ButtonForLogin";
import ButtonForAddTask from "../Buttons/ButtonForAddTask/ButtonForAddTask";

const Header = ({sendTasks, idForDelete, idForUpdate}) => {

    const {email} = useSelector(state => state.user)
    const [obj, setObj] = useState({status: true, number: 0})

    const getObj = (status) => {
        setObj(status)
    }
    return (
        <div className={"header"}>
            <h1 className={'h1'}>What's the Plan for Today?</h1>
            <div className={'flex'}>
                <ButtonForAddTask sendTasks={sendTasks} idForDelete={idForDelete} idForUpdate={idForUpdate} obj={obj}/>
            <ButtonForLogin getObj={getObj}/>
            </div>
            {email && <h2 className={'h2'}>You logged as {email}</h2>}
        </div>
    );
};

export default Header;