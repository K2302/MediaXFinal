import React, { useContext } from "react";
import Style from "../styles/auth.module.css";
import { Model } from "../Components";
import { ChatAppContext } from "../Context/ChatAppContext";
import images from "../assets";

function auth() {
  const { account, createAccount } = useContext(ChatAppContext);
  return (
    <div className={Style.modelBox}>
      <Model
        title="Welcome to"
        head="PyxelVerse"
        // info="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate maxime assumenda exercitationem voluptatibus, vero aliquid in tempore aut, impedit dolores voluptate recusandae nulla fuga? Praesentium iusto mollitia sint fugit! Placeat?"
        // smallInfo="Please enter your name..."
        image={images.hero}
        functionName={createAccount}
        address={account}
      />
    </div>
  );
}

export default auth;
