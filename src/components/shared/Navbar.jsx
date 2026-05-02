"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#F9F6F2] shadow-sm">
      <nav className="flex justify-between items-center py-3 container mx-auto w-full px-4">
        
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/logo.webp"}
              alt="Tiles Shop Logo"
              loading="eager"
              width={40}
              height={40}
              className="object-cover h-auto w-auto cursor-pointer"
            />
          </Link>
        </div>

        <ul className="hidden md:flex justify-center items-center gap-5 text-base text-gray-500">
          <li><NavLink href={"/"}>Home</NavLink></li>
          <li><NavLink href={"/all-tiles"}>All Tiles</NavLink></li>
          <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {!user && (
            <Link href={"/login"}>
              <Button size="md" variant="primary">Login</Button>
            </Link>
          )}
          {user && (
            <div className="flex justify-center items-center gap-3">
              <Avatar size="lg">
                {user?.image && (
                  <Avatar.Image
                    alt={user?.name}
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                )}
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSignOut} size="md" variant="danger">
                Logout
              </Button>
            </div>
          )}
        </div>

        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width={28} />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#F9F6F2] border-t px-4 py-4 flex flex-col gap-4">
          
          <ul className="flex flex-col gap-3 text-base text-gray-500">
            <li onClick={() => setMenuOpen(false)}>
              <NavLink href={"/"}>Home</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink href={"/all-tiles"}>All Tiles</NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink href={"/my-profile"}>My Profile</NavLink>
            </li>
          </ul>

          {!user && (
            <Link href={"/login"} onClick={() => setMenuOpen(false)}>
              <Button size="md" variant="primary" className="w-full">
                Login
              </Button>
            </Link>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <Avatar size="md">
                {user?.image && (
                  <Avatar.Image
                    alt={user?.name}
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                )}
                <Avatar.Fallback>{user?.name?.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <span className="text-sm font-semibold text-gray-700">{user?.name}</span>
              <Button onClick={handleSignOut} size="sm" variant="danger" className="ml-auto">
                Logout
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;