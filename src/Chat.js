import React, { useEffect, useState } from 'react'
import './Chat.css';
import { useParams } from 'react-router-dom';
import db from './firebase';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(
                (snapShot) => {
                    setRoomDetails(snapShot.data())
                }
            )
            db.collection('rooms').doc(roomId)
                .collection('messages')
                .orderBy('timeStamp', 'asc')
                .onSnapshot((snapShot) => {
                    setMessages(snapShot.docs.map((doc) => (
                        doc.data()
                    )))
                })
        }
    }, [roomId]);

    console.log(messages);
    return (
        <div className="chat">
            {/* Header */}
            <div className="chat__header">
                <div className="chat__lefttHeader">
                    <h4 className="chat__channelName">
                        <strong>
                            #{roomDetails?.name}
                        </strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>
                <div className="chat__rightHeader">
                    <p>
                        <InfoOutlinedIcon />
                        <span>
                            Details
                    </span>
                    </p>
                </div>
            </div>

            {/* Body */}

            <div className="chat__messages">
                {
                    messages.map(
                        ({ message, userName, userImage, timeStamp }) => (
                            <Message
                                key={timeStamp?.seconds}
                                message={message}
                                name={userName}
                                image={userImage}
                                timeStamp={timeStamp}
                            />
                        )
                    )
                }
            </div>

            {/* Footer */}
            <ChatInput
                channelName={roomDetails?.name}
                channelId={roomId}
            />

        </div>
    )
}

export default Chat
