import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 border-b border-gray-200 bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* LOGO / TITLE */}
        <h1 className="text-3xl font-extrabold tracking-wide text-amber-700 drop-shadow-sm select-none">
          Cat<span className="text-amber-500">Coffee...</span>
        </h1>
      </div>
    </header>
  );
}

