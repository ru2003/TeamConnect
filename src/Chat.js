import React, { useEffect, useState } from 'react';
import "./Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase"; // Assuming your firebase.js file exports the initialized db

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);

    useEffect(() => {
        if (roomId) {
            // Using modular Firestore methods for Firebase v9+
            const roomRef = doc(getFirestore(), 'rooms', roomId);
            const unsubscribe = onSnapshot(roomRef, (snapshot) => {
                setRoomDetails(snapshot.data());
            });

            // Clean up the subscription on unmount
            return () => unsubscribe();
        }
    }, [roomId]);

    console.log(roomDetails);

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
        </div>
    );
}

export default Chat;
