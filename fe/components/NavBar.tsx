import React from "react";
import Link from "next/link";

export const Navbar = () => {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "About Me",
      href: "/about-me",
    },
  ];

  return (
    <div>
      {pages.map((page) => (
        <button key={page.title}>
          <Link href={page.href} passHref>
            <h1>{page.title.toUpperCase()}</h1>
          </Link>
        </button>
      ))}
    </div>
  );
};
