"use client";

import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <div className="w-full relative">
      <main className="w-full flex justify-center items-center h-16 bg-white">
        <div className="flex justify-between items-center h-16 bg-white gap-10">
          <div className="relative h-16 flex items-center">
            <h1
              className={`text-base ${
                activeLink === "Dashboard" ? "text-[#F183F6]" : "text-black"
              } cursor-pointer`}
              onClick={() => setActiveLink("Dashboard")}
            >
              Dashboard
            </h1>
            {activeLink === "Dashboard" && (
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-[150%] h-1 bg-[#F183F6] z-10" />
            )}
          </div>

          <div className="relative h-16 flex items-center">
            <h1
              className={`text-base ${
                activeLink === "Links" ? "text-[#F183F6]" : "text-black"
              } cursor-pointer`}
              onClick={() => setActiveLink("Links")}
            >
              Links
            </h1>
            {activeLink === "Links" && (
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-[150%] h-1 bg-[#F183F6] z-10 rounded-full" />
            )}
          </div>

          <div className="relative h-16 flex items-center">
            <h1
              className={`text-base ${
                activeLink === "Settings" ? "text-[#F183F6]" : "text-black"
              } cursor-pointer`}
              onClick={() => setActiveLink("Settings")}
            >
              Settings
            </h1>
            {activeLink === "Settings" && (
              <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-[150%] h-1 bg-[#F183F6] z-10" />
            )}
          </div>
        </div>
      </main>

      <div className="w-full h-0.5 bg-gray-200"></div>
    </div>
  );
}
