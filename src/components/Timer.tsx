import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Phase = "work" | "break" | "longBreak";

const DURATIONS = {
  work: 25 * 60,
  break: 5 * 60,
  longBreak: 15 * 60,
};

const STORAGE_KEY = "pomodoro_pro_state";

type PersistedState = {
  phase: Phase;
  remaining: number;
  isRunning: boolean;
  cycleCount: number;
  analytics: {
    work: number;
    break: number;
    longBreak: number;
  };
  lastUpdated: number;
};

export default function Timer() {
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [phase, setPhase] = useState<Phase>("work");
  const [remaining, setRemaining] = useState(DURATIONS.work);
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);
  const [analytics, setAnalytics] = useState({
    work: 0,
    break: 0,
    longBreak: 0,
  });

  /* 🔊 sound */
  useEffect(() => {
    audioRef.current = new Audio(
      "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
    );
  }, []);

  /* 🔄 restore */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    const s: PersistedState = JSON.parse(saved);
    let updatedRemaining = s.remaining;

    if (s.isRunning) {
      const diff = Math.floor((Date.now() - s.lastUpdated) / 1000);
      updatedRemaining = Math.max(s.remaining - diff, 0);
    }

    setPhase(s.phase);
    setRemaining(updatedRemaining);
    setIsRunning(s.isRunning && updatedRemaining > 0);
    setCycleCount(s.cycleCount);
    setAnalytics(s.analytics);
  }, []);

  /* ⏱ tick */
  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          handlePhaseEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [isRunning, phase]);

  /* 💾 persist */
  useEffect(() => {
    const state: PersistedState = {
      phase,
      remaining,
      isRunning,
      cycleCount,
      analytics,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [phase, remaining, isRunning, cycleCount, analytics]);

  const handlePhaseEnd = () => {
    setIsRunning(false);

    audioRef.current?.play();
    if ("vibrate" in navigator) navigator.vibrate(300);

    setAnalytics((a) => ({
      ...a,
      [phase]: a[phase] + 1,
    }));

    if (phase === "work") {
      const nextCycle = cycleCount + 1;
      setCycleCount(nextCycle);

      if (nextCycle % 4 === 0) {
        switchPhase("longBreak");
      } else {
        switchPhase("break");
      }
    } else {
      switchPhase("work");
    }
  };

  const switchPhase = (p: Phase) => {
    setPhase(p);
    setRemaining(DURATIONS[p]);
  };

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm bg-slate-900 rounded-2xl p-6 shadow-xl"
      >
        <h1 className="text-center text-xl font-semibold mb-2">
          🍅 Pomodoro Pro
        </h1>

        <p className="text-center text-sm text-slate-400 capitalize mb-6">
          {phase.replace("Break", " Break")}
        </p>

        <motion.div
          key={remaining}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-center text-5xl font-mono mb-6"
        >
          {format(remaining)}
        </motion.div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setIsRunning((r) => !r)}
            className="flex-1 py-3 rounded-xl bg-emerald-500 text-black font-medium"
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            onClick={() => {
              setIsRunning(false);
              setRemaining(DURATIONS[phase]);
            }}
            className="px-4 py-3 rounded-xl bg-slate-700"
          >
            Reset
          </button>
        </div>

        {/* 📊 Analytics */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300">
          <div>
            <div className="text-lg">{analytics.work}</div>
            Work
          </div>
          <div>
            <div className="text-lg">{analytics.break}</div>
            Break
          </div>
          <div>
            <div className="text-lg">{analytics.longBreak}</div>
            Long
          </div>
        </div>
      </motion.div>
    </div>
  );
}
