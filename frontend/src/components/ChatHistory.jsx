import React, { useEffect, useRef } from "react";
import { Bot } from 'lucide-react';

export default function ChatHistory({ history, busy }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [history.length, busy]);

  if (history.length === 0 && !busy) {
    return (
      <div className="jarvis-chat jarvis-chat--empty">
        <div className="jarvis-chat--empty-orb flex items-center justify-center p-4 bg-[#111111] border border-surface-700 rounded-2xl mb-2 text-white">
          <Bot size={36} />
        </div>
        <p className="jarvis-chat--empty-title">Hi, I'm Jarvis!</p>
        <p className="jarvis-chat--hint">
          Your AI reading companion. I can summarize, explain, translate,
          and read this page aloud. Just type below or press the mic!
        </p>
        <div className="jarvis-chat--tips">
          <span className="jarvis-tip">"Summarize this page"</span>
          <span className="jarvis-tip">"Translate this"</span>
          <span className="jarvis-tip">"Explain this article"</span>
        </div>
      </div>
    );
  }

  return (
    <div className="jarvis-chat">
      {history.map((turn, i) => (
        <div key={i} className={`jarvis-bubble jarvis-bubble--${turn.role}`}>
          <span className="jarvis-bubble__label">
            {turn.role === "user" ? "You" : "Jarvis"}
          </span>
          <p>{turn.content}</p>
        </div>
      ))}
      {busy && (
        <div className="jarvis-bubble jarvis-bubble--assistant jarvis-bubble--thinking">
          <span className="jarvis-bubble__label">Jarvis</span>
          <span className="jarvis-thinking-dots">
            <span />
            <span />
            <span />
          </span>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}
