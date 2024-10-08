"use client"

import Loginpage from "./login/page";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="bg-white">
      <Loginpage/>
      <Toaster />
    </div>
  );
}
