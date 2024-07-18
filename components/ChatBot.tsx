// components/Chatbot.jsx
"use client";
import React, { useState } from "react";
import { Meteors } from "./meteors";
import { Input } from "@nextui-org/input";

const Chatbot = () => {
  //   const [visible, setVisible] = useState(false);
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const initialMessages = [
    {
      id: 1,
      message: "Hello, how can I help you today?",
      sender: "bot",
    },
    {
      id: 2,
      message: "I would like to know more about your services",
      sender: "user",
    },
    {
      id: 3,
      message:
        "Sure, we offer a wide range of services. What are you looking for?",
      sender: "bot",
    },
    {
      id: 4,
      message: "I am looking for a book related to Blockchain",
      sender: "user",
    },
    {
      id: 5,
      message: "Sure, we have a book called Blockchain for Dummies",
      sender: "bot",
    },
    {
      id: 6,
      message: "Great! Can I know the price of the book?",
      sender: "user",
    },
    {
      id: 7,
      message: "The price of the book is $20",
      sender: "bot",
    },
    {
      id: 8,
      message: "Thank you for the information",
      sender: "user",
    },
    {
      id: 9,
      message: "You're welcome! Let me know if you need anything else",
      sender: "bot",
    },
    {
      id: 10,
      message: "What other books do you have?",
      sender: "user",
    },
    {
      id: 11,
      message: "We have books on various topics such as AI, ML, and more",
      sender: "bot",
    },
    {
      id: 12,
      message: "I would like to know more about the book on AI",
      sender: "user",
    },
    {
      id: 13,
      message: "The book on AI is called Artificial Intelligence 101",
      sender: "bot",
    },
    {
      id: 14,
      message: "Can you tell me more about the book?",
      sender: "user",
    },
    {
      id: 15,
      message:
        "Artificial Intelligence 101 is a beginner-friendly book that covers the basics of AI and its applications",
      sender: "bot",
    },
    {
      id: 16,
      message: "Sounds interesting! What is the price of the book?",
      sender: "user",
    },
    {
      id: 17,
      message: "The price of the book is $25",
      sender: "bot",
    },
    {
      id: 18,
      message: "Thank you for the information",
      sender: "user",
    },
    {
      id: 19,
      message: "You're welcome! Let me know if you need anything else",
      sender: "bot",
    },
  ];
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([initialMessages[0]]);

  const sendMessage = (e: any) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    // Add the user's message
    const newUserMessage = {
      id: Math.max(...messages.map((m) => m.id)) + 1, // Generate a new ID
      message: userInput,
      sender: "user",
    };

    // Find the next bot message based on the sequence
    // Assuming bot messages are even IDs and user messages are odd, adjust as necessary
    const nextBotMessageIndex = initialMessages.findIndex(
      (m) => m.id === newUserMessage.id + 1
    );
    setMessages([...messages, newUserMessage]);
    setUserInput(""); // Clear input after sending
    setTimeout(() => {
      if (nextBotMessageIndex !== -1) {
        const nextBotMessage = initialMessages[nextBotMessageIndex];
        setMessages([...messages, newUserMessage, nextBotMessage]);
      }

      setUserInput(""); // Clear input after sending
    }, 2000);
  };
  return (
    <>
      <div className="z-60">
        <div className=" w-full relative max-w-lg h-[40rem] space-y-2">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start gap-4">
            <div className="flex items-center justify-between w-full">
              <h1 className="font-bold text-xl text-white mb-4 absolute top-3 z-50">
                Libr-AI-nian
              </h1>
            </div>
            <div className="flex flex-col space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`${
                    message.sender === "bot" ? "justify-start" : " justify-end"
                  } flex`}
                >
                  <div
                    className={`${
                      message.sender === "bot"
                        ? "bg-gray-800 text-white justify-start"
                        : "bg-gray-700 text-gray-300 justify-end"
                    } px-4 py-2 rounded-lg`}
                  >
                    {message.message}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 w-full">
              <Input
                type="text"
                label="Enter your message..."
                className="w-full"
                value={userInput}
                onChange={(e: any) => setUserInput(e.target.value)}
              />

              <button
                className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
