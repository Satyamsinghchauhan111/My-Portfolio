import React, { useEffect, useRef, useState } from "react";

const FuturisticCursor = () => {
  const mainDot = useRef<HTMLDivElement>(null);
  const ring1 = useRef<HTMLDivElement>(null);
  const ring2 = useRef<HTMLDivElement>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const ring1X = useRef(0);
  const ring1Y = useRef(0);

  const ring2X = useRef(0);
  const ring2Y = useRef(0);

  const [clickEffect, setClickEffect] = useState(false);
  const orbitAngle = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const handleClick = () => {
      setClickEffect(true);
      setTimeout(() => setClickEffect(false), 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      // Smooth follow effect
      ring1X.current += (mouseX.current - ring1X.current) * 0.2;
      ring1Y.current += (mouseY.current - ring1Y.current) * 0.2;

      ring2X.current += (mouseX.current - ring2X.current) * 0.1;
      ring2Y.current += (mouseY.current - ring2Y.current) * 0.1;

      // Orbit effect (floating when idle)
      orbitAngle.current += 0.05;
      const orbitX = Math.cos(orbitAngle.current) * 5;
      const orbitY = Math.sin(orbitAngle.current) * 5;

      if (mainDot.current) {
        mainDot.current.style.transform = `translate(${mouseX.current}px, ${mouseY.current}px) translate(-50%, -50%)`;
      }

      if (ring1.current) {
        ring1.current.style.transform = `translate(${
          ring1X.current + orbitX
        }px, ${ring1Y.current + orbitY}px) translate(-50%, -50%)`;
      }

      if (ring2.current) {
        ring2.current.style.transform = `translate(${
          ring2X.current - orbitX
        }px, ${ring2Y.current - orbitY}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={mainDot}
        style={{
          position: "fixed",
          width: clickEffect ? "10px" : "6px",
          height: clickEffect ? "10px" : "6px",
          backgroundColor: "rgba(0, 255, 255, 0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "width 0.2s ease, height 0.2s ease",
          zIndex: 9999,
          boxShadow: "0 0 20px cyan, 0 0 40px cyan",
          mixBlendMode: "difference",
        }}
      />

      {/* Ring 1 */}
      <div
        ref={ring1}
        style={{
          position: "fixed",
          width: clickEffect ? "60px" : "50px",
          height: clickEffect ? "60px" : "50px",
          border: "0.5px solid rgba(0, 255, 255, 0.6)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "width 0.2s ease, height 0.2s ease",
          zIndex: 9998,
          boxShadow: "0 0 3px cyan, 0 0 5px cyan",
          mixBlendMode: "difference",
        }}
      />

      {/* Ring 2 */}
      <div
        ref={ring2}
        style={{
          position: "fixed",
          width: clickEffect ? "90px" : "80px",
          height: clickEffect ? "90px" : "80px",
          border: "0.5px dashed rgba(0, 255, 255, 0.3)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "width 0.2s ease, height 0.2s ease",
          zIndex: 9997,
          boxShadow: "0 0 3px cyan, 0 0 5px cyan",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default FuturisticCursor;
