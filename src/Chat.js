import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { getFirestore, doc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase"; // Assuming your firebase.js file exports the initialized db

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            // Fetch room details
            const roomRef = doc(getFirestore(), 'rooms', roomId);
            const unsubscribeRoom = onSnapshot(roomRef, (snapshot) => {
                setRoomDetails(snapshot.data());
            });

            // Fetch messages in the room
            const messagesRef = collection(getFirestore(), 'rooms', roomId, 'messages');
            const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));
            const unsubscribeMessages = onSnapshot(messagesQuery, (snapshot) => {
                setRoomMessages(snapshot.docs.map(doc => doc.data()));
            });

            // Cleanup subscriptions
            return () => {
                unsubscribeRoom();
                unsubscribeMessages();
            };
        }
    }, [roomId]);

    console.log(roomDetails);
    console.log(roomMessages);

    return (
        <div className='chat'>
            {/* <h2>You are in the {roomId} room </h2> */}
            <div className="chat_header">
                <div className='chat_headerLeft'>
                    <h4 className='chat_channelName'>
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chat_headerRight">
                    <p>
                        <InfoOutlinedIcon />Details
                    </p>
                </div>
            </div>

            <div className="chat_messages">
              {/* {roomMessages.map((message, index) => (
                    <div key={index} className="chat_message">
                        <p>{message.text}</p>
                    </div>
                ))}   */}
            </div>
        </div>
    );
}

export default Chat;
