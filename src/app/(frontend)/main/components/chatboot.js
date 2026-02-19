"use client";
import { useState } from "react";

export default function AIFloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await fetch("/Ai/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    setReply(data.reply);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 z-50"
      >
        🤖
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-lg p-4 z-50">
          <h2 className="font-bold mb-2">AI Assistant</h2>

          <div className="h-40 overflow-y-auto border p-2 mb-2 text-sm">
            {reply}
          </div>

          <input
            type="text"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full border p-2 mb-2 rounded"
          />

          <button
            onClick={sendMessage}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Send
          </button>
        </div>
      )}
    </>
  );
}
