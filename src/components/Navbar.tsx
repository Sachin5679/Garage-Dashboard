"use client";

import { useAppStore } from "@/store/useAppStore";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export function Navbar() {
  const { user } = useAppStore();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Garage Dashboard</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user?.avatarUrl}
              alt={user?.name || "User"}
            />
            <AvatarFallback>{user?.name?.slice(0, 2).toUpperCase() || "US"}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </motion.header>
  );
}
