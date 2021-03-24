import React from 'react';
import './Message.css';

function Message({message, name, image, timeStamp}) {
    return (
        <div className="message">
            <img src = {image}></img>
            <div className="message__info">
                <h4>
                    {name} 
                    <span className="message__timestamp">
                        {new Date(timeStamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
