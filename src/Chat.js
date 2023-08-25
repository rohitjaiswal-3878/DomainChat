import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import {
  query,
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import db from "./firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      onSnapshot(doc(collection(db, "rooms"), roomId), (snapshot) =>
        setRoomDetails(snapshot.data())
      );
    }
    onSnapshot(
      query(
        collection(db, "rooms", roomId, "messages"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        const messages = snapshot.docs.map((doc) => doc.data());
        setRoomMessages(messages);
      }
    );
  }, [roomId]);
  console.log(roomDetails);
  console.log("messages >>>", roomMessages);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat_headerLeft">
          <h4 className="chat__channelName">
            <strong># {roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="char__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
