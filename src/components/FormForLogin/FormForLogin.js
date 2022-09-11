import React, {useEffect, useState} from 'react';
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import './FormForLogin.css'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice";

const FormForLogin = ({setLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const {handleSubmit, reset} = useForm();
    const dispatch = useDispatch()


    const onSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
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

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email"  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
                <button>Login</button>
                or
                <button onClick={() => {
                    setLogin(false)
                }}>Registration</button>
            </form>
        </div>
    );
};

export {FormForLogin};