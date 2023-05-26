import { SunIcon } from "@heroicons/react/solid";
import React from "react";

function Loading() {
  return (
    <div className="bg-gradient-to-br md:sticky top-0 left-0 from-[#394f68] to-[#183b7e] p-10 h-screen flex flex-col items-center justify-center text-slate-500">
      <SunIcon className="h-24 w-24 animate-bounce text-yellow-500" />

      <h1 className="text-6xl font-bold text-center mb-10 animate-pulse">
        Loading City Weather Information
      </h1>

      <h1 className="text-xl font-bold text-center mb-10 animate-pulse">
        Hold on, we are crushing the numbers & generating an AI summary for the
        weather!
      </h1>
    </div>
  );
}

export default Loading;
