import React, { useEffect, useState, useContext } from "react";
import { ChatAppContext } from "../Context/ChatAppContext";

//INTERNAL IMPORT
// import { ChatAppContect } from "../Context/ChatAppContext";
import { Filter, Friend } from "../Components/index";

const ChatApp = () => {
  // const {} = useContext(ChatAppContect);
  const { userName } = useContext(ChatAppContext);
  return userName ? (
    <div>
      <Filter />
      <Friend />
    </div>
  ) : null;
};

export default ChatApp;
