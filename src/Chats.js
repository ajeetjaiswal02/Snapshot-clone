import React from 'react';
import './Chats.css';
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

function chats() {
    return (
        <div className="chats">
            <div className="chats_header">
                <Avatar className="chats_avatar" />
                <div className="chats_search">
                    <SearchIcon />
                    <input placeholder="Friends" type="text" />
                </div>
                <ChatBubbleIcon className="chats_chaticon" /> 
            </div>
            <div className="chat_posts">
                
            </div>
        </div>
    )
}
// 15526 v
export default chats