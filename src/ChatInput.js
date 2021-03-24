import React, { useState } from 'react'
import './ChatInput.css'
import db from './firebase';
import { firestore } from 'firebase';
import { useStateValue } from './stateProvider';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();
    const onClickSend = (e) => {
        e.preventDefault();
        setInput("");
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timeStamp: firestore.FieldValue.serverTimestamp(),
                userName: user?.displayName,
                userImage: user?.photoURL
            })
        }
    }
    return (
        <div className="chatInput">
            <form>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="submit" onClick={onClickSend}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput
