import React from 'react';

import './MessageForNon-login.css'
const MessageForNonLogin = () => {
    return (
        <div className={'mainMessageBlock'}>
            <div className={'messageDiv'}><h1 className={'message'}>You must log in or register</h1></div>
        </div>
    );
};

export default MessageForNonLogin;