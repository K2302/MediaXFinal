import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "../Utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
  //USESTATE
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [friendLists, setFriendLists] = useState([]);
  const [friendMsg, setFriendMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userLists, setUserLists] = useState([]);
  const [error, setError] = useState("");

  //CHAT USER DATA
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAddress, setCurrentUserAddress] = useState("");
  const router = useRouter();

  //FETCH DATA TIME OF PAGE LOAD
  const fetchData = async () => {
    try {
      setLoading(true);
      //GET CONTRACT
      const contract = await connectingWithContract();
      //GET ACCOUNT
      const connectAccount = await connectWallet();
      setAccount(connectAccount);
      //GET USER NAME
      const userName = await contract.getUsername(connectAccount);
      setUserName(userName);
      //GET MY FRIEND LIST
      const friendLists = await contract.getMyFriendList();
      setFriendLists(friendLists);
      //GET ALL APP USER LIST
      const userList = await contract.getAllAppUser();
      setUserLists(userList);
    } catch (error) {
      // setError("Please Install And Connect Your Wallet");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  //READ MESSAGE
  const readMessage = async (friendAddress) => {
    try {
      setLoading(true);
      const contract = await connectingWithContract();
      const read = await contract.readMessage(friendAddress);
      setFriendMsg(read);
    } catch (error) {
      console.log("Currently You Have no Message");
    } finally {
      setLoading(false);
    }
  };

  //CREATE ACCOUNT
  const createAccount = async ({ name, accountAddress }) => {
    try {
      setLoading(true);
      if (!name) return setError("Name , cannot be emty");
      if (!name) return setError("Name , cannot be emty");
      const contract = await connectingWithContract();
      const getCreatedUser = await contract.createAccount(name);
      await getCreatedUser.wait();
      window.location.reload();
    } catch (error) {
      setError("Error while creating your account Pleasee reload browser");
    } finally {
      setLoading(false);
    }
  };

  //ADD YOUR FRIENDS
  const addFriends = async ({ name, accountAddress }) => {
    try {
      setLoading(true);
      // if (name || accountAddress) return setError("Please provide data");
      const contract = await connectingWithContract();
      const addMyFriend = await contract.addFriend(accountAddress, name);
      setLoading(true);
      await addMyFriend.wait();
      setLoading(false);
      router.push("/");
      window.location.reload();
    } catch (error) {
      setError("Something went wrong while adding friends, try again");
    } finally {
      setLoading(false);
    }
  };

  //SEND MESSAGE TO YOUR FRIEND
  const sendMessage = async ({ msg, address }) => {
    try {
      setLoading(true);
      // if (msg || address) return setError("Please Type your Message");

      const contract = await connectingWithContract();
      const addMessage = await contract.sendMessage(address, msg);
      setLoading(true);
      await addMessage.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError("Please reload and try again");
    } finally {
      setLoading(false);
    }
  };

  //READ INFO
  const readUser = async (userAddress) => {
    try {
      setLoading(true);
      const contract = await connectingWithContract();
      const userName = await contract.getUsername(userAddress);
      setCurrentUserName(userName);
      setCurrentUserAddress(userAddress);
    } catch (error) {
      setError("Please reload and try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <ChatAppContext.Provider
      value={{
        readMessage,
        createAccount,
        addFriends,
        sendMessage,
        readUser,
        connectWallet,
        ChechIfWalletConnected,
        account,
        userName,
        friendLists,
        friendMsg,
        userLists,
        setLoading,
        loading,
        error,
        setError,
        router,
        setError,
        currentUserName,
        currentUserAddress,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};
