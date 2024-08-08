'use client';

import Cart from "@/components/ui/cart";
import Favorite from "@/components/ui/favorite";
import UserProfile from "@/components/ui/userProfile";
import Link from "next/link";

export default function Default() {
  return (
    <div className="navbar bg-slate-300 shadow-lg rounded-lg sticky top-0 z-10">
      <div className="navbar-start">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl" href="/">Home</Link>
        </div>
      </div>
      <div className="navbar-center">
        <div className="form-control ">
          <input type="text" placeholder="Search" className="input input-bordered w-32 md:w-auto" />
        </div>
      </div>
      <div className="flex-none navbar-end">
        <Cart></Cart>
        <Favorite></Favorite>
        <UserProfile></UserProfile>
      </div>
    </div>
  );
}
