import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      {isOpen && (
        <ul
          tabIndex={0}
          className="absolute mt-3 z-10 p-2 shadow bg-white rounded-box w-26"
          style={{ left: 0 }}
        >
          <li>
            <a
              href="/"
              className="hover:bg-gray-100 rounded w-full"
              title="Home"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:bg-gray-100 rounded" title="blog">
              Blog
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
