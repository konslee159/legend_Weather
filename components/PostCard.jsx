"use client";

import Image from "next/image";
import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";

export function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={post.user.avatar}
              alt={`${post.user.username} 프로필 이미지`}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">{post.user.username}</p>
            <p className="text-xs text-neutral-500">{post.user.location}</p>
          </div>
        </div>
        <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="게시물 옵션">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </header>

      <div className="relative aspect-[4/5] w-full bg-neutral-200">
        <Image
          src={post.image}
          alt={`${post.user.username} 게시물 이미지`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      <footer className="space-y-3 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-neutral-700">
            <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="좋아요">
              <Heart className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="댓글 달기">
              <MessageCircle className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="공유하기">
              <Send className="h-5 w-5" />
            </button>
          </div>
          <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="저장하기">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>

        <p className="text-sm font-semibold text-neutral-900">
          {post.likedBy}님 외 {post.likes.toLocaleString()}명이 좋아합니다
        </p>
        <div className="space-y-1 text-sm text-neutral-800">
          <p>
            <span className="font-semibold">{post.user.username}</span> {post.caption}
          </p>
          {post.comments.map((comment) => (
            <p key={comment.id}>
              <span className="font-semibold">{comment.username}</span> {comment.text}
            </p>
          ))}
        </div>
        <p className="text-xs uppercase tracking-wide text-neutral-400">{post.timeAgo}</p>
        <form className="flex items-center gap-3 border-t border-neutral-200 pt-3 text-sm">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="flex-1 border-none bg-transparent outline-none"
            aria-label="댓글 입력"
          />
          <button type="submit" className="text-sm font-semibold text-blue-500 hover:text-blue-600">
            게시
          </button>
        </form>
      </footer>
    </article>
  );
}
