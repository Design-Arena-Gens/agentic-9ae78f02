"use client";

import { useMemo, useState } from "react";

const focusOptions = [
  {
    id: "ui-structure",
    label: "界面结构 / 信息架构",
    description: "拆解信息层级、版式节奏、交互路径，优化结构逻辑。",
    drills: ["重新绘制信息架构图", "重排关键界面组件", "列出交互分支与反馈"],
    inspiration: [
      "pttrns.com 的信息密度案例",
      "Mobbin 的流程拆解",
      "优秀产品的 onboarding 流程截图集",
    ],
  },
  {
    id: "visual-polish",
    label: "视觉升级 / 质感打造",
    description: "关注字体、留白、配色与组件质感，提升审美一致性。",
    drills: ["三套配色快速迭代", "字体层级对比实验", "关键按钮+状态视觉规范"],
    inspiration: [
      "Dribbble Top 20 今日精选",
      "拾设计公众号精选",
      "Real Nice 设计质感案例库",
    ],
  },
  {
    id: "interaction",
    label: "交互动效 / 体验细节",
    description: "拆解关键体验节点，构思反馈、动效与跨屏联动。",
    drills: [
      "写下 3 个关键体验故事线",
      "绘制微交互状态图",
      "制作 15s 动效 Storyboard",
    ],
    inspiration: [
      "LottieFiles 动效案例",
      "awwwards 交互手势专题",
      "Principle 社区精选",
    ],
  },
  {
    id: "branding",
    label: "品牌表达 / 叙事策略",
    description: "聚焦情绪调性、故事线、素材整合，构建品牌体验体系。",
    drills: ["品牌关键词三段式提炼", "海报封面视觉探索", "一句话价值主张重写"],
    inspiration: [
      "Behance 品牌视觉合集",
      "Minimal Gallery",
      "Pinterest Moodboard 搜集",
    ],
  },
];

const intensityMap: Record<number, string> = {
  1: "轻量复习",
  2: "常规打磨",
  3: "深度冲刺",
};

export function DailyRitualPlanner() {
  const [focusId, setFocusId] = useState<string>(focusOptions[0].id);
  const [intensity, setIntensity] = useState<number>(2);
  const [shouldShare, setShouldShare] = useState<boolean>(false);

  const focus = useMemo(
    () => focusOptions.find((option) => option.id === focusId),
    [focusId],
  );

  const timeAllocation = useMemo(() => {
    switch (intensity) {
      case 3:
        return [25, 40, 25];
      case 1:
        return [15, 30, 15];
      default:
        return [20, 35, 20];
    }
  }, [intensity]);

  return (
    <section className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-emerald-600">自定义练习</p>
        <h3 className="text-xl font-semibold text-zinc-900">
          今日案例输入 & 深度整理计划
        </h3>
        <p className="text-sm text-zinc-600">
          选择专注方向与强度，即刻生成你的 90 分钟案例锻炼配方。
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700">
              练习方向
            </label>
            <div className="grid gap-2">
              {focusOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFocusId(option.id)}
                  className={`flex flex-col items-start gap-1 rounded-xl border px-4 py-3 text-left transition ${
                    focusId === option.id
                      ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  <span className="text-sm font-semibold">{option.label}</span>
                  <span className="text-xs text-zinc-500">
                    {option.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-zinc-700">
              强度设定
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <input
                type="range"
                min={1}
                max={3}
                step={1}
                value={intensity}
                onChange={(event) => setIntensity(Number(event.target.value))}
                className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"
              />
              <div className="flex flex-col items-end text-right">
                <span className="text-xs font-medium text-zinc-500">
                  {intensityMap[intensity]}
                </span>
                <span className="text-sm font-semibold text-zinc-800">
                  强度 {intensity}
                </span>
              </div>
            </div>
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-50">
            <input
              type="checkbox"
              checked={shouldShare}
              onChange={(event) => setShouldShare(event.target.checked)}
              className="h-4 w-4 rounded border border-zinc-300 text-emerald-500 focus:ring-emerald-500"
            />
            将成果分享到社群打卡（推荐）
          </label>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
              阶段时间分配
            </p>
            <div className="mt-2 grid gap-2 text-sm font-medium text-zinc-700">
              <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                <span>01. 快速输入</span>
                <span>{timeAllocation[0]} 分钟</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                <span>02. 深度拆解</span>
                <span>{timeAllocation[1]} 分钟</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2">
                <span>03. 输出归档</span>
                <span>{timeAllocation[2]} 分钟</span>
              </div>
            </div>
          </div>

          {focus ? (
            <>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                  练习挑战
                </p>
                <ul className="mt-2 grid gap-2 text-sm text-zinc-700">
                  {focus.drills.map((drill) => (
                    <li
                      key={drill}
                      className="rounded-lg border border-transparent bg-white/80 px-3 py-2 font-medium shadow-sm"
                    >
                      {drill}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                  灵感素材源
                </p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600">
                  {focus.inspiration.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-lg border border-emerald-100 bg-white/70 px-3 py-2 text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : null}

          <div className="rounded-xl border border-white/60 bg-white/70 px-4 py-3 text-sm text-zinc-600 shadow-sm">
            <p>
              {shouldShare
                ? "今日任务完成后，整理 3 张截图 + 60 字总结，分享到与你同频的社群或朋友圈，强化反馈闭环。"
                : "建议在练习结束后仍产出最小成果：一张拆解图、一个关键流程说明。若时间允许，可再输出设计稿或总结帖。"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
