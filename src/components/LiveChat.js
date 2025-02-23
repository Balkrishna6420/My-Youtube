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
      //Api polling

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
      <div className="w-full h-[400px] xs:h-[450px] sm:h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse md:w-3/4 lg:w-1/2 mx-auto">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 border border-black flex flex-col xs:flex-row items-center md:w-3/4 lg:w-1/2 mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form submit", liveMessage);
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
          className="px-2 py-1 w-full xs:w-2/3 border rounded-lg"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-4 py-2 mt-2 xs:mt-0 xs:ml-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
