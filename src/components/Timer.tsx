import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Phase = "work" | "break" | "longBreak";

const STORAGE_KEY = "pomodoro_pro_state";

type PersistedState = {
  phase: Phase;
  remaining: number;
  isRunning: boolean;
  cycleCount: number;
  durations: Record<Phase, number>;
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
  const [isRunning, setIsRunning] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const [durations, setDurations] = useState<Record<Phase, number>>({
    work: 25 * 60,
    break: 5 * 60,
    longBreak: 15 * 60,
  });

  const [remaining, setRemaining] = useState(durations.work);

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
    setDurations(s.durations);
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
      durations,
      analytics,
      lastUpdated: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [phase, remaining, isRunning, cycleCount, durations, analytics]);

  const handlePhaseEnd = () => {
    setIsRunning(false);

    audioRef.current?.play();
    if ("vibrate" in navigator) navigator.vibrate(300);

    setAnalytics((a) => ({
      ...a,
      [phase]: a[phase] + 1,
    }));

    if (phase === "work") {
      const next = cycleCount + 1;
      setCycleCount(next);
      switchPhase(next % 4 === 0 ? "longBreak" : "break");
    } else {
      switchPhase("work");
    }
  };

  const switchPhase = (p: Phase) => {
    setPhase(p);
    setRemaining(durations[p]);
  };

  const updateDuration = (p: Phase, minutes: number) => {
    const seconds = Math.max(minutes, 1) * 60;
    setDurations((d) => ({ ...d, [p]: seconds }));
    if (phase === p && !isRunning) setRemaining(seconds);
  };

  const format = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <motion.div className="w-full max-w-sm bg-slate-900 rounded-2xl p-6 shadow-xl">
        <h1 className="text-center text-xl font-semibold mb-4">
          🍅 Pomodoro Pro
        </h1>

        {/* ⏱ Time Inputs */}
        <div className="grid grid-cols-3 gap-2 mb-5 text-sm">
          {(["work", "break", "longBreak"] as Phase[]).map((p) => (
            <div key={p}>
              <label className="block text-slate-400 mb-1 capitalize">
                {p === "longBreak" ? "Long" : p}
              </label>
              <input
                type="number"
                disabled={isRunning}
                value={Math.floor(durations[p] / 60)}
                onChange={(e) => updateDuration(p, +e.target.value)}
                className="w-full rounded-lg bg-slate-800 p-2 text-center"
              />
            </div>
          ))}
        </div>

        {/* Timer */}
        <div className="text-center text-5xl font-mono mb-6">
          {format(remaining)}
        </div>

        {/* Controls */}
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
              setRemaining(durations[phase]);
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
