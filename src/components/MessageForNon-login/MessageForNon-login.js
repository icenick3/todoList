import React from 'react';

import './MessageForNon-login.css'
const MessageForNonLogin = () => {
    return (
        <div className={'mainMessageBlock'}>
            <div className="things">
                <div className="content">
                    <div className="arrow">
                        <div className="curve"></div>
                        <div className="point"></div>
                    </div>
                </div>
            </div>
            <div className={'messageDiv'}><h1 className={'message'}>You must log in or register</h1></div>
        </div>
    );
};

export default MessageForNonLogin;