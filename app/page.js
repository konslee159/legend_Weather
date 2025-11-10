"use client";

import { useMemo } from "react";
import { InstagramNavbar } from "../components/InstagramNavbar";
import { Stories } from "../components/Stories";
import { Feed } from "../components/Feed";
import { Suggestions } from "../components/Suggestions";
import { Trending } from "../components/Trending";

const currentUser = {
  username: "yunuuu",
  fullName: "Yuna Kim",
  avatar:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop&auto=format",
};

export default function Home() {
  const stories = useMemo(
    () => [
      {
        id: 1,
        username: "ariel",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&auto=format",
        isLive: true,
      },
      {
        id: 2,
        username: "ming",
        avatar:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 3,
        username: "travelmore",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 4,
        username: "claire",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 5,
        username: "studioak",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 6,
        username: "designlab",
        avatar:
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 7,
        username: "moments",
        avatar:
          "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=128&h=128&fit=crop&auto=format",
      },
      {
        id: 8,
        username: "latte",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&auto=format",
      },
    ],
    []
  );

  const posts = useMemo(
    () => [
      {
        id: "post-1",
        user: {
          username: "ariel",
          location: "Seoul, South Korea",
          avatar:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=128&h=128&fit=crop&auto=format",
        },
        image:
          "https://images.unsplash.com/photo-1521310192548-4ac7951413da?w=1200&auto=format&fit=crop",
        likedBy: "ming",
        likes: 1287,
        timeAgo: "1시간 전",
        caption: "봄이 오는 남산의 공기. 벚꽃이 만개했어요! 🌸",
        comments: [
          {
            id: "comment-1",
            username: "ming",
            text: "사진 너무 예뻐요! 지금 바로 가고 싶다 🤍",
          },
          {
            id: "comment-2",
            username: "studioak",
            text: "색감이 미쳤다...",
          },
        ],
      },
      {
        id: "post-2",
        user: {
          username: "travelmore",
          location: "Lisbon, Portugal",
          avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=128&h=128&fit=crop&auto=format",
        },
        image:
          "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&auto=format&fit=crop",
        likedBy: "claire",
        likes: 956,
        timeAgo: "3시간 전",
        caption: "햇살 가득한 리스본 골목에서 만난 완벽한 아침 ☀️",
        comments: [
          {
            id: "comment-3",
            username: "moments",
            text: "이 골목 기억나요! 카페도 너무 맛있어요",
          },
          {
            id: "comment-4",
            username: "ariel",
            text: "사진이 여행 욕구를 자극하네요 ✈️",
          },
        ],
      },
      {
        id: "post-3",
        user: {
          username: "designlab",
          location: "Tokyo, Japan",
          avatar:
            "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=128&h=128&fit=crop&auto=format",
        },
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop",
        likedBy: "yunuuu",
        likes: 1874,
        timeAgo: "어제",
        caption: "도쿄 거리의 밤. 네온사인과 빛나는 빗방울 ✨",
        comments: [
          {
            id: "comment-5",
            username: "latte",
            text: "컬러 대비가 너무 멋져요",
          },
          {
            id: "comment-6",
            username: "ming",
            text: "여기 어디인가요? 꼭 가보고 싶어요!",
          },
        ],
      },
    ],
    []
  );

  const suggestions = useMemo(
    () => [
      {
        username: "citylight",
        fullName: "City Light Studio",
        avatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=128&h=128&fit=crop&auto=format",
        reason: "ariel님이 팔로우합니다",
      },
      {
        username: "soulfood",
        fullName: "Soul Food",
        avatar:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=128&h=128&fit=crop&auto=format",
        reason: "ming님이 팔로우합니다",
      },
      {
        username: "retrocam",
        fullName: "Retro Cam",
        avatar:
          "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=128&h=128&fit=crop&auto=format",
        reason: "인스타그램 추천",
      },
    ],
    []
  );

  const trending = useMemo(
    () => [
      {
        hashtag: "#봄소풍",
        posts: "23.4K",
      },
      {
        hashtag: "#여행에미치다",
        posts: "12.1K",
      },
      {
        hashtag: "#필름감성",
        posts: "8,942",
      },
      {
        hashtag: "#오늘의커피",
        posts: "7,501",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-100">
      <InstagramNavbar currentUser={currentUser} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 lg:flex-row lg:items-start">
        <section className="flex-1">
          <Stories stories={stories} />
          <Feed posts={posts} />
        </section>
        <aside className="hidden w-full max-w-xs flex-shrink-0 lg:block">
          <Suggestions currentUser={currentUser} suggestions={suggestions} />
          <Trending items={trending} />
        </aside>
      </main>
    </div>
  );
}
