"use client";

import { SidebarFooter, useSidebar } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../../ModeToggle";
import LogOutButton from "@/components/auth/LogOutButton";
import { useSession } from "next-auth/react";

export function AppSidebarFooter() {
  const { state } = useSidebar();
  const { data: session } = useSession();

  const user = session?.user;

  console.log(user)

  return (
    <SidebarFooter className="border-t">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center justify-between w-full p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-pointer">
            <div className="flex items-center gap-2 overflow-hidden">
              {/* Show avatar when expanded, user icon when collapsed */}
              {state === "expanded" ? (
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.photoUrl || ""}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback>
                    {user?.name ? user.name.charAt(0) : "U"}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <User className="h-5 w-5" />
              )}

              {/* Show user details only when expanded */}
              {state === "expanded" && (
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-sm font-medium truncate">
                    {user?.name || "User Name"}
                  </span>
                  <span className="text-xs text-muted-foreground truncate">
                    {user?.email || "user@example.com"}
                  </span>
                </div>
              )}
            </div>
            {state === "expanded" && <User className="h-4 w-4 opacity-60" />}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent side="right" align="end" className="w-56">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={user?.photoUrl || ""}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback>
                    {user?.name ? user.name.charAt(0) : "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {user?.name || "User Name"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {user?.email || "user@example.com"}
                  </span>
                </div>
              </div>
              <ModeToggle />
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account" className="cursor-pointer">
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-red-500 focus:text-red-500">
            <LogOutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
}
