import React from 'react';
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Correct imports for Firebase v9+

import db from "./firebase"; // Make sure db is initialized properly

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const navigate = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigate(`/room/${id}`);
    } else {
      navigate(title);
    }
  };

  const addChannel = async () => {
    // Logic for adding a channel
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      try {
        // Use the modular Firestore API
        const docRef = await addDoc(collection(getFirestore(), "rooms"), {
          name: channelName,
        });
        console.log("Document added with ID:", docRef.id);
      } catch (error) {
        console.error("Error adding channel:", error);
      }
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption_channel">
          <span className="sidebarOption_hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
