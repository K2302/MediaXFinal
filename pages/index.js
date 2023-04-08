import React, { useEffect, useState, useContext } from "react";
import { ChatAppContext } from "../Context/ChatAppContext";
import { Loader } from "../Components";

//INTERNAL IMPORT
// import { ChatAppContect } from "../Context/ChatAppContext";
import { Filter, Friend } from "../Components/index";

const ChatApp = () => {
  // const {} = useContext(ChatAppContect);
  const { userName, loading } = useContext(ChatAppContext);
  return loading ? (
    <Loader />
  ) : userName ? (
    <div>
      <Filter />
      <Friend />
    </div>
  ) : null;
};

export default ChatApp;
