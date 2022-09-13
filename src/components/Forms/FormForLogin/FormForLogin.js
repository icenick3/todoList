import React, {useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './FormForLogin.css'
import {setUser} from "../../../store/slices/userSlice";

const FormForLogin = ({setActive}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const {handleSubmit, reset} = useForm();
    const dispatch = useDispatch()


    const onSubmitForRegistration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
        reset()
    }


    const onSubmitForLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
        reset()
    }

    return (
        <div>
            <div className="main">
                <input className={'input'} type="checkbox" id="chk" aria-hidden="true"/>
                    <div className="signup">
                        <form onSubmit={handleSubmit(onSubmitForRegistration)}>
                            <label className={'label'} htmlFor="chk" aria-hidden="true">Sign up</label>
                                <input className={'input'} type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                                    <input className={'input'} type="password" name="pswd" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)}/>
                                        <button className={'button'} onClick={()=>setActive(false)}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={handleSubmit(onSubmitForLogin)}>
                            <label className={'label'} htmlFor="chk" aria-hidden="true">Login</label>
                            <input className={'input'} type="email" name="email" placeholder="Email" required="" onChange={(e) => setEmail(e.target.value)}/>
                                <input className={'input'} type="password" name="pswd" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)}/>
                                    <button className={'button'} onClick={()=>setActive(false)}>Login</button>
                        </form>
                    </div>
            </div>
        </div>
    );
};

export {FormForLogin};