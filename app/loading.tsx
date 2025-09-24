"use client";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="p-6 py-12 bg-white dark:bg-[#081224] transition-colors duration-300">
      {/* Heading Skeleton */}
      <div className="mb-6">
        <Skeleton className="h-10 w-48 rounded-lg" />
        <Skeleton className="mt-4 h-6 w-64 rounded-md" />
      </div>

      {/* Grid of Skeleton Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((_, idx) => (
          <div key={idx} className="flex flex-col space-y-3">
            {/* Image Skeleton */}
            <Skeleton className="h-40 w-full rounded-xl" />

            {/* Text Skeletons */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-3/4 rounded-md" />
            </div>

            {/* Button Skeleton */}
            <Skeleton className="h-10 w-32 rounded-lg mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
