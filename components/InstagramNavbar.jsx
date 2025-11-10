"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Compass,
  Home,
  MessageCircle,
  PlusSquare,
  Search,
  Users,
} from "lucide-react";

export function InstagramNavbar({ currentUser }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Instaclone
          </span>
        </Link>

        <div className="hidden w-72 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2 text-sm text-neutral-500 transition hover:border-neutral-300 md:flex">
          <Search className="h-4 w-4" />
          <input
            type="search"
            placeholder="검색"
            className="w-full bg-transparent outline-none"
            aria-label="검색"
          />
        </div>

        <nav className="flex items-center gap-3 text-neutral-700">
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="홈">
            <Home className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="탐색">
            <Compass className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="새 게시물">
            <PlusSquare className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="메시지">
            <MessageCircle className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="알림">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="그룹">
            <Users className="h-5 w-5" />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-2 py-1 text-sm font-medium hover:border-neutral-300">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={currentUser.avatar}
                alt={`${currentUser.username} 프로필 이미지`}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <span>@{currentUser.username}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
