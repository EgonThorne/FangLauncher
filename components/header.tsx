"use client";

import React, { useState } from "react";

import Link from "next/link";
import Dropdown from "./Dropdown";
import AuthButton from "./AuthButton";
import { createClient } from "@/utils/supabase/server";

export default function Header() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };
  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
      <header className="flex flex-row h-14 items-center justify-evenly border rounded-md w-full">
        <Link
          className="flex items-center gap-2 font-bold text-2xl"
          title=""
          href="/"
        >
          <h1 className=" font-bold text-2xl">Launcher-Beta</h1>
        </Link>

        <nav>
          <div className="hidden md:flex flex-row items-center gap-7">
            <Link href="/" title="Home">
              Home
            </Link>
            <Link href="/blog" title="blog">
              Blog
            </Link>
          </div>
        </nav>
        {isSupabaseConnected && <AuthButton />}
        <div className="lg:hidden">
          <Dropdown />
        </div>
      </header>
    </div>
  );
}

// function Dropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => setIsOpen(!isOpen);

//   return (
//     <div className="relative lg:hidden">
//       <div
//         tabIndex={0}
//         role="button"
//         className="btn btn-ghost btn-circle"
//         onClick={toggleDropdown}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           aria-haspopup="true"
//           aria-expanded={isOpen ? "true" : "false"}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16M4 18h7"
//           />
//         </svg>
//       </div>
//       {isOpen && (
//         <ul
//           tabIndex={0}
//           className="absolute mt-3 z-10 p-2 shadow bg-white rounded-box w-26"
//           style={{ left: 0 }}
//         >
//           <li>
//             <a
//               href="/"
//               className="hover:bg-gray-100 rounded w-full"
//               title="Home"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="/blog" className="hover:bg-gray-100 rounded" title="blog">
//               Blog
//             </a>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }
