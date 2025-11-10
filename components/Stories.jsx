"use client";

import Image from "next/image";

export function Stories({ stories }) {
  return (
    <section className="mb-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex w-20 flex-col items-center gap-2"
            aria-label={`${story.username} 스토리 보기`}
          >
            <div
              className={`relative h-16 w-16 overflow-hidden rounded-full border-2 p-[2px] ${story.isLive ? "border-transparent bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500" : "border-neutral-200"}`}
            >
              <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                <Image
                  src={story.avatar}
                  alt={`${story.username} 스토리 썸네일`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              {story.isLive && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold uppercase text-white shadow-sm">
                  Live
                </span>
              )}
            </div>
            <span className="truncate text-xs font-medium text-neutral-700">{story.username}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
