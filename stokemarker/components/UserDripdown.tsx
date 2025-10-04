"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

export default function UserDropdown() {
  const router = useRouter();

  const handleSingOut = async () => {
    router.push("/sign-in");
  };

  const user = { name: "Log", email: "contact@LogRabbit.com" };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-3 bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 rounded-xl px-3 py-2 shadow-lg shadow-yellow-500/20"
        >
          <Avatar className="h-8 w-8 border border-yellow-400 shadow-md shadow-yellow-400/30">
            <AvatarImage src="https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>

          <div className="hidden md:flex flex-col text-left">
            <span className="text-base font-semibold text-yellow-400">
              {user.name}
            </span>
            <span className="text-xs text-gray-400">{user.email}</span>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-64 p-3 bg-gray-900/95 backdrop-blur-xl border border-yellow-500/20 rounded-2xl shadow-xl shadow-yellow-500/10 text-gray-200 animate-in fade-in-80"
      >
        <DropdownMenuLabel>
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 border border-yellow-400 shadow-lg shadow-yellow-500/30">
              <AvatarImage src="https://cdn.britannica.com/20/194520-050-DCAE62F1/New-World-Sylvilagus-cottontail-rabbits.jpg" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-lg font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-yellow-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-400">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-2 bg-yellow-500/30" />

        <DropdownMenuItem
          onClick={handleSingOut}
          className="flex items-center gap-2 px-3 py-2 text-md font-medium text-gray-200 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition-all cursor-pointer"
        >
          <LogOut className="h-5 w-5 text-yellow-400" />
          Logout
        </DropdownMenuItem>

        <DropdownMenuSeparator className="hidden sm:block my-2 bg-yellow-500/30" />

        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
