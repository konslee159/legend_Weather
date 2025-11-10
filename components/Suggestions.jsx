"use client";

import Image from "next/image";
import Link from "next/link";

export function Suggestions({ currentUser, suggestions }) {
  return (
    <section className="mb-6 space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full">
            <Image
              src={currentUser.avatar}
              alt={`${currentUser.username} 프로필 이미지`}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-neutral-900">{currentUser.username}</p>
            <p className="text-xs text-neutral-500">{currentUser.fullName}</p>
          </div>
        </div>
        <Link href="#" className="text-xs font-semibold text-blue-500 hover:text-blue-600">
          전환
        </Link>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-neutral-500">
          <span>회원님을 위한 추천</span>
          <button className="text-xs font-semibold text-neutral-900 hover:text-neutral-700">
            모두 보기
          </button>
        </div>
        <ul className="space-y-4 text-sm">
          {suggestions.map((suggestion) => (
            <li key={suggestion.username} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={suggestion.avatar}
                    alt={`${suggestion.username} 프로필 이미지`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">{suggestion.username}</p>
                  <p className="text-xs text-neutral-500">{suggestion.reason}</p>
                </div>
              </div>
              <button className="text-xs font-semibold text-blue-500 hover:text-blue-600">팔로우</button>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs leading-relaxed text-neutral-400">
        소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 언어
      </p>
      <p className="text-xs text-neutral-400">© 2025 INSTACLONE FROM LEGEND</p>
    </section>
  );
}
