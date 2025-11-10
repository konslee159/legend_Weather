"use client";

export function Trending({ items }) {
  return (
    <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between text-sm font-semibold text-neutral-500">
        <span>실시간 인기 해시태그</span>
        <button className="text-xs font-semibold text-neutral-900 hover:text-neutral-700">
          더 보기
        </button>
      </div>
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.hashtag} className="flex items-center justify-between">
            <div className="space-y-0.5">
              <p className="font-semibold text-neutral-900">{item.hashtag}</p>
              <p className="text-xs text-neutral-500">게시물 {item.posts}</p>
            </div>
            <button className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 hover:border-neutral-300">
              팔로우
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
