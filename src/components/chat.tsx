"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // Handle sending messages
  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage: Message = { text: input, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Clear input field after sending the message
      setInput("");

      try {
        const response = await fetch("http://localhost:8000/api/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }), // Make sure the request body format is compatible with the Gemini API
        });

        if (response.ok) {
          const data = await response.json(); // Wait for the response and parse it as JSON
          
          // Assuming 'data' contains the response from the bot API
          const botMessage: Message = { text: data.message, sender: "bot" }; // Adjust 'data.message' based on the actual structure of the response
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          console.error("API error:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col mx-auto h-screen w-[90%] mb-[5rem] bg-black border-[1px] border-slate-300 text-primary rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 p-6 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-4 rounded-lg ${
                message.sender === "user" ? "bg-purple" : "bg-gray-700"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-black">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={`Type your message ...`}
            className="flex-1 p-2 rounded-2xl bg-[#2d2e2e] text-white border-none focus:outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 bg-purple rounded-lg hover:bg-purple transition-colors"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
