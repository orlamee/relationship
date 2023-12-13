"use client";
import React, { useEffect } from "react";

type props = {
  children: React.ReactNode;
};

export default function Modal({ children }: props) {
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-black/70 fixed inset-0 flex justify-center items-center z-[500]">
      {children}
    </div>
  );
}
