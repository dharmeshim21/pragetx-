"use client";
import React, { useEffect } from "react";

const FooterCursor = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    // Create cursor element
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.pointerEvents = "none";
    cursor.style.zIndex = "9999";
    cursor.style.background = "radial-gradient(circle, #323232 0%, transparent 70%)";
    cursor.style.transform = "translate(-50%, -50%)";
    cursor.style.transition = "transform 0.08s ease-out";

    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      const footerRect = footer.getBoundingClientRect();
      if (
        e.clientY >= footerRect.top &&
        e.clientY <= footerRect.bottom &&
        e.clientX >= footerRect.left &&
        e.clientX <= footerRect.right
      ) {
        cursor.style.display = "block";
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      } else {
        cursor.style.display = "none";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return null; // No JSX, cursor is injected dynamically
};

export default FooterCursor;
