import React from "react";
import { Mic, MicOff, Brain, Volume2, Pause, Play, Square, Globe } from 'lucide-react';

export default function Controls({
  listening,
  speaking,
  paused,
  lang,
  onToggleMic,
  onToggleLang,
  onRead,
  onPause,
  onResume,
  onStop,
  onSummarize,
  onTranslate,
}) {
  return (
    <div className="jarvis-controls">
      {/* Row 1: Primary actions */}
      <div className="jarvis-controls__row">
        <button
          id="jarvis-mic-btn"
          className={`jarvis-btn jarvis-btn--mic ${listening ? "is-active" : ""}`}
          onClick={onToggleMic}
          title={listening ? "Click to stop listening" : "Click to start voice input"}
        >
          <span className="flex items-center justify-center gap-1.5">
            {listening ? <MicOff size={13} /> : <Mic size={13} />}
            {listening ? "Listening…" : "Mic"}
          </span>
        </button>

        <button
          id="jarvis-summarize-btn"
          className="jarvis-btn jarvis-btn--action"
          onClick={onSummarize}
          title="Summarize this page"
        >
          <span className="flex items-center justify-center gap-1.5">
            <Brain size={13} /> Summarize
          </span>
        </button>

        <button
          id="jarvis-read-btn"
          className="jarvis-btn jarvis-btn--action"
          onClick={onRead}
          title="Read this page aloud"
        >
          <span className="flex items-center justify-center gap-1.5">
            <Volume2 size={13} /> Read
          </span>
        </button>
      </div>

      {/* Row 2: Playback + settings */}
      <div className="jarvis-controls__row">
        {!paused ? (
          <button
            id="jarvis-pause-btn"
            className="jarvis-btn"
            onClick={onPause}
            disabled={!speaking}
            title="Pause reading"
          >
            <span className="flex items-center justify-center gap-1.5">
              <Pause size={13} /> Pause
            </span>
          </button>
        ) : (
          <button
            id="jarvis-resume-btn"
            className="jarvis-btn"
            onClick={onResume}
            title="Resume reading"
          >
            <span className="flex items-center justify-center gap-1.5">
              <Play size={13} /> Resume
            </span>
          </button>
        )}

        <button
          id="jarvis-stop-btn"
          className="jarvis-btn"
          onClick={onStop}
          disabled={!speaking && !paused}
          title="Stop reading"
        >
          <span className="flex items-center justify-center gap-1.5">
            <Square size={13} /> Stop
          </span>
        </button>

        <button
          id="jarvis-translate-btn"
          className="jarvis-btn jarvis-btn--translate"
          onClick={onTranslate}
          title="Translate page content to English"
        >
          <span className="flex items-center justify-center gap-1.5">
            <Globe size={13} /> Translate
          </span>
        </button>

        <button
          id="jarvis-lang-btn"
          className="jarvis-btn jarvis-btn--lang"
          onClick={onToggleLang}
          title={`Switch voice language (Current: ${lang === "en-US" ? "English" : "Hindi"})`}
        >
          {lang === "en-US" ? "EN" : "HI"}
        </button>
      </div>
    </div>
  );
}
