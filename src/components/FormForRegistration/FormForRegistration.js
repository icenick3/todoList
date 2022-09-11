import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice";

const FormForRegistration = ({handleClick}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {handleSubmit, reset} = useForm();
    const dispatch = useDispatch()

    const auth = getAuth();

    const onSubmit = () => {
        reset()
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

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email"  onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <button>Registry</button>
            </form>
        </div>
    );
};

export {FormForRegistration};