"use client";

type WorkflowStage = {
  stage: string;
  focus: string;
  duration: string;
  checkpoints: string[];
};

type WorkflowTimelineProps = {
  stages: WorkflowStage[];
};

export function WorkflowTimeline({ stages }: WorkflowTimelineProps) {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-blue-50/60 p-6 shadow-sm">
      <header className="mb-4 flex flex-col gap-1">
        <p className="text-sm font-medium text-blue-600">每日节奏</p>
        <h3 className="text-xl font-semibold text-zinc-900">
          90 分钟设计锻炼仪式
        </h3>
        <p className="text-sm text-zinc-600">
          控制节奏，保持强度。适用于工作日的高效案例练习流程。
        </p>
      </header>

      <ol className="space-y-4">
        {stages.map((stage, index) => (
          <li
            key={stage.stage}
            className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-500/10 text-base font-semibold text-blue-600">
              {index + 1}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-lg font-semibold text-zinc-900">
                  {stage.stage}
                </h4>
                <span className="rounded-full border border-blue-100 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600">
                  {stage.duration}
                </span>
              </div>
              <p className="text-sm text-zinc-600">重点：{stage.focus}</p>
              <ul className="grid gap-2 text-sm text-zinc-700 sm:grid-cols-2">
                {stage.checkpoints.map((checkpoint) => (
                  <li
                    key={checkpoint}
                    className="flex items-start gap-2 rounded-xl border border-zinc-100 bg-zinc-50/80 px-3 py-2 text-xs font-medium text-zinc-700"
                  >
                    <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500" />
                    {checkpoint}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
