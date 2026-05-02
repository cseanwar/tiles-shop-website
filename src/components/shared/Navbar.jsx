"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <div className="bg-[#F9F6F2]">
      <nav className=" flex justify-between items-center  py-3 container mx-auto w-full">
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

        <ul className="flex justify-center items-center gap-5 text-base text-gray-500">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-tiles"}>All Tiles</NavLink>
          </li>
          <li>
            <NavLink href={"/my-profile"}>My Profile</NavLink>
          </li>
        </ul>

        {!user && (
          <Link href={"/login"}>
            <Button type="login" size="md" variant="primary">
              Login
            </Button>
          </Link>
        )}
        {user && (
          <div className="flex justify-center items-center gap-3">
            <Avatar size="lg">
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>

            <Button onClick={handleSignOut} size="md" variant="danger">
              Logout
            </Button>
          </div>
        )}

        {/* <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center  text-sm gap-5">
              <li>
                <Link href={"/signup"}>SignUp</Link>
              </li>
              <li>
                <Link href={"/signin"}>SignIn</Link>
              </li>
            </ul>
          )}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
            </div>
          )}
        </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
