"use client";
import { Card, Skeleton } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <h1 className="text-center">
        <div className="text-5xl font-bold "> Next.js + TailwindCSS</div>
      </h1>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-4 p-8 w-full">
        {Array(4)
          .fill(4)
          .map((_) => (
            <Card className="w-full space-y-5 p-4" radius="2xl" key={_}>
              <Skeleton className="rounded-lg">
                <div className="h-48 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
