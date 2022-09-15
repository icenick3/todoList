import React, {useEffect, useState} from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './FormForLogin.css'
import {setUser} from "../../../store/slices/userSlice";

const FormForLogin = ({setActive}) => {

    const [email, setEmail] = useState(localStorage.getItem('email', email));
    const [password, setPassword] = useState(localStorage.getItem('password', password));
    const auth = getAuth();
    const {handleSubmit, reset} = useForm();
    const dispatch = useDispatch()
    const [errorRegistry, setErrorRegistry] = useState('')
    const [errorLogin, setErrorLogin] = useState('')


    const onSubmitForRegistration = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                setErrorRegistry(null)
                setActive(false)
                setErrorLogin(null)
                localStorage.setItem('email', email)
                localStorage.setItem('password', password)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                setErrorRegistry(errorCode)

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
                setErrorLogin(null)
                setErrorRegistry(null)
                setActive(false)
                localStorage.setItem('email', email)
                localStorage.setItem('password', password)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                setErrorLogin(errorCode)
                console.log(errorMessage)
            });
        reset()
    }

    useEffect(()=>{
        if (localStorage.getItem('email', email) && localStorage.getItem('password', password)){
            onSubmitForLogin()
        }
    },[])


    return (
        <div>
            <div className="main">
                <input className={'input'} type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form onSubmit={handleSubmit(onSubmitForRegistration)}>
                        <label className={'label'} htmlFor="chk" aria-hidden="true">Sign up</label>
                        <input className={'input'} type="email" name="email" placeholder="Email" required=""
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input className={'input'} type="password" name="pswd" placeholder="Password" required=""
                               onChange={(e) => setPassword(e.target.value)}/>
                        {errorRegistry === 'auth/email-already-in-use' &&
                            <p className={"error"}>This email is already in use</p>}
                        <button className={'button'} onClick={() => {
                            (errorRegistry !== 'auth/email-already-in-use') || (errorRegistry === null) && setActive(false)
                        }}>Sign up
                        </button>
                    </form>
                </div>

                <div className="login">
                    <form onSubmit={handleSubmit(onSubmitForLogin)}>
                        <label className={'label'} htmlFor="chk" aria-hidden="true">Login</label>
                        <input className={'input'} type="email" name="email" placeholder="Email" required=""
                               onChange={(e) => setEmail(e.target.value)}/>
                        <input className={'input'} type="password" name="pswd" placeholder="Password" required=""
                               onChange={(e) => setPassword(e.target.value)}/>
                        {errorLogin === 'auth/user-not-found' && <p className={"error"}>This email is not found</p>}
                        <button className={'button'} onClick={() => {
                            (errorLogin !== 'auth/email-already-in-use') || (errorLogin === null) && setActive(false)
                        }}>Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export {FormForLogin};