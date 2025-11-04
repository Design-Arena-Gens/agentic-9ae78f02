"use client";

import { useState } from "react";

type ChecklistItem = {
  label: string;
  hint?: string;
};

type ChecklistCardProps = {
  title: string;
  subtitle: string;
  items: ChecklistItem[];
};

export function ChecklistCard({ title, subtitle, items }: ChecklistCardProps) {
  const [completed, setCompleted] = useState<boolean[]>(
    () => new Array(items.length).fill(false),
  );

  const progress =
    completed.reduce((acc, value) => acc + (value ? 1 : 0), 0) /
    items.length *
    100;

  return (
    <section className="flex h-full flex-col gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md">
      <header>
        <p className="mb-2 text-sm font-medium text-zinc-500">{subtitle}</p>
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
      </header>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-1.5 rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <ul className="flex flex-1 flex-col gap-3 text-sm text-zinc-700">
        {items.map((item, index) => (
          <li key={item.label}>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl p-2 transition hover:bg-zinc-50">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border border-zinc-300 text-blue-500 focus:ring-blue-500"
                checked={completed[index]}
                onChange={() =>
                  setCompleted((prev) =>
                    prev.map((value, currentIndex) =>
                      currentIndex === index ? !value : value,
                    ),
                  )
                }
              />
              <span className="flex flex-col gap-1">
                <span className="font-medium">{item.label}</span>
                {item.hint ? (
                  <span className="text-xs text-zinc-500">{item.hint}</span>
                ) : null}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}
