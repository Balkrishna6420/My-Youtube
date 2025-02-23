import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {/* Chat Messages Container */}
      <div className="w-full h-[600px] xs:h-[450px] sm:h-[500px] p-2 bg-slate-100 border border-black rounded-lg overflow-y-auto overflow-x-hidden flex flex-col-reverse max-w-2xl mx-auto">
        <div className="w-full">
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      {/* Chat Input Form */}
      <form
        className="w-full p-2 flex flex-col xs:flex-row items-center border border-black max-w-2xl mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "BalKrishna",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 py-1 w-full xs:w-3/4 border rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
