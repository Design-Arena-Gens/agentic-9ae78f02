import { ChecklistCard } from "@/components/checklist-card";
import { DailyRitualPlanner } from "@/components/daily-ritual-planner";
import { WorkflowTimeline } from "@/components/workflow-timeline";

export default function Home() {
  const checklists = [
    {
      title: "灵感输入 · 选择高价值案例",
      subtitle: "阶段 01 · Input",
      items: [
        {
          label: "设定今日主题与预期成果",
          hint: "例如：ToB 产品可视化、金融类配色、面向新手的引导体验。",
        },
        {
          label: "浏览 3 个高质量案例渠道并收藏",
          hint: "Mobbin、Pttrns、awwwards、线下体验拍摄。",
        },
        {
          label: "记录案例首因印象与亮点",
          hint: "快速记录 3 个吸引你的设计细节或体验点。",
        },
        {
          label: "写下想验证的设计问题",
          hint: "明确拆解方向：结构、视觉、动效、叙事等。",
        },
      ],
    },
    {
      title: "深度拆解 · 建立结构化认知",
      subtitle: "阶段 02 · Deconstruct",
      items: [
        {
          label: "梳理用户任务路径与业务目标",
          hint: "场景 > 触发 > 行为 > 反馈；补充转化 KPI。",
        },
        {
          label: "拆分界面信息层级与组件关系",
          hint: "列出布局逻辑、视觉优先级、组件复用模式。",
        },
        {
          label: "分析交互节奏与体验亮点",
          hint: "录屏标注关键手势、动效、过渡方式。",
        },
        {
          label: "总结 2-3 条可迁移设计策略",
          hint: "提炼成通用方法论，注明适用场景与前提。",
        },
      ],
    },
    {
      title: "输出归档 · 沉淀可复用资产",
      subtitle: "阶段 03 · Archive",
      items: [
        {
          label: "生成最小可分享成果",
          hint: "信息图、总结长图或 500 字拆解文。",
        },
        {
          label: "同步到知识库模板",
          hint: "Notion / 自建库：标签、关键词、截图、关键 insights。",
        },
        {
          label: "给作品打上检索标签",
          hint: "例如：SaaS、Onboarding、低视觉负担。",
        },
        {
          label: "反思今日收获与下一步应用",
          hint: "记录一个可以立刻应用的改进点或实验。",
        },
      ],
    },
  ];

  const timeline = [
    {
      stage: "热身输入",
      focus: "快速聚焦主题、明确选题标准，筛选最佳案例。",
      duration: "20 分钟",
      checkpoints: [
        "浏览灵感库 > 收藏 1-2 个优质案例",
        "记录吸引你的交互/视觉细节",
        "写下想验证的问题陈述",
      ],
    },
    {
      stage: "结构拆解",
      focus: "围绕场景、结构、交互、视觉四层深挖设计逻辑。",
      duration: "40 分钟",
      checkpoints: [
        "绘制任务流或服务蓝图",
        "拆分布局与信息层级",
        "捕捉交互反馈与动效节奏",
        "总结可迁移设计策略",
      ],
    },
    {
      stage: "输出整理",
      focus: "完成总结、更新知识库，并规划应用场景。",
      duration: "20 分钟",
      checkpoints: [
        "输出图文总结或关键组件稿",
        "上传到 Notion / 本地库并打标签",
        "写下下一次实践的行动点",
      ],
    },
  ];

  const archiveFields = [
    {
      name: "案例基础信息",
      items: ["名称 / 链接", "来源渠道", "行业 & 产品类型", "采集日期"],
    },
    {
      name: "体验背景",
      items: ["目标人群与场景", "任务流程图", "业务指标 & 成功判据"],
    },
    {
      name: "设计拆解",
      items: [
        "结构层：信息层级、路径逻辑",
        "表现层：视觉风格、组件设计",
        "交互层：反馈、动效、状态",
        "策略层：设计原理、方法论",
      ],
    },
    {
      name: "应用与反思",
      items: [
        "可迁移场景",
        "需要注意的前提 / 限制",
        "个人灵感与下一步实验",
      ],
    },
  ];

  const weeklyRhythms = [
    {
      title: "周一 · 行业趋势扫描",
      focus: "聚焦业务、场景、商业模式，形成设计机会洞察。",
      action: "收集 3 个行业案例，梳理业务链路，提炼趋势关键词。",
    },
    {
      title: "周二 · 结构拆解强化",
      focus: "深入分析信息架构与界面节奏，提升系统思维。",
      action: "对 1 个案例绘制结构图与组件系统，标注交互逻辑。",
    },
    {
      title: "周三 · 视觉质感训练",
      focus: "训练视觉语言一致性与质感表达能力。",
      action: "重构关键界面视觉语言，输出配色、字体、元素规范。",
    },
    {
      title: "周四 · 体验细节创作",
      focus: "加强交互反馈、动态体验与微交互设计。",
      action: "为 3 个关键节点设计反馈方案，制作动效 Storyboard。",
    },
    {
      title: "周五 · 复盘与分享",
      focus: "整合一周收获，产出总结并获取反馈。",
      action: "整理「本周最强洞察」卡片，分享到社群或团队内。",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 font-sans">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 lg:px-12 lg:py-20">
        <header className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-14 shadow-sm">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_theme(colors.blue.100),_transparent_55%)] lg:block" />
          <div className="relative z-10 flex max-w-3xl flex-col gap-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Daily Design Workout
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Ritual System
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                每日设计锻炼：高质量案例输入与整理流程
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600">
                为专业设计师打造的持续精进体系，帮助你在 90 分钟内高效完成案例输入、
                深度拆解与输出归档，沉淀可复用的设计认知资产。
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2 rounded-full border border-transparent bg-slate-100 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                高质量灵感输入
              </div>
              <div className="flex items-center gap-2 rounded-full border border-transparent bg-slate-100 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                案例拆解结构化
              </div>
              <div className="flex items-center gap-2 rounded-full border border-transparent bg-slate-100 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-violet-500" />
                输出归档闭环
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-semibold text-blue-600">流程概览</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                以「输入-拆解-归档」为主轴构建每日训练节奏
              </h2>
            </div>
            <p className="text-sm leading-7 text-slate-600">
              每个阶段都聚焦一个关键问题：找准高价值案例、拆出可复用方法、形成长期知识库。
              三阶段联动，配合强度调节与输出标准，确保每天的训练既有新鲜输入，也有系统沉淀。
            </p>
            <div className="grid gap-4">
              {[
                {
                  title: "01 捕捉输入 · 建立灵感雷达",
                  description:
                    "明确每日主题与评价标准，快速筛选 1-2 个高价值案例，记录第一印象与可学习点。",
                  border: "border-blue-100",
                  text: "text-blue-600",
                  background: "bg-blue-50",
                },
                {
                  title: "02 深度拆解 · 结构化认知",
                  description:
                    "以场景、目标、路径、细节四层框架逐层拆解，归纳设计方法与可迁移策略。",
                  border: "border-violet-100",
                  text: "text-violet-600",
                  background: "bg-violet-50",
                },
                {
                  title: "03 输出归档 · 搭建资产库",
                  description:
                    "形成至少一张信息图或文字总结，并同步到知识库，确保检索、对比、复用。",
                  border: "border-emerald-100",
                  text: "text-emerald-600",
                  background: "bg-emerald-50",
                },
              ].map((stage) => (
                <div
                  key={stage.title}
                  className={`rounded-2xl border ${stage.border} ${stage.background} px-5 py-4`}
                >
                  <h3 className={`text-lg font-semibold ${stage.text}`}>
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <p className="text-sm font-semibold text-slate-500">重点提示</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">
                三个关键成功信号
              </h3>
            </div>
            <ul className="flex flex-col gap-4 text-sm text-slate-600">
              <li className="rounded-xl border border-transparent bg-white p-4 shadow-sm">
                <span className="mb-1 block text-sm font-semibold text-blue-600">
                  输入有源头
                </span>
                关注行业前沿产品、设计奖项与本地体验，保持每日 10 分钟高质量浏览并做标记。
              </li>
              <li className="rounded-xl border border-transparent bg-white p-4 shadow-sm">
                <span className="mb-1 block text-sm font-semibold text-violet-600">
                  拆解有框架
                </span>
                使用标准化模板记录：业务目标、用户任务、界面结构、交互反馈、视觉策略。
              </li>
              <li className="rounded-xl border border-transparent bg-white p-4 shadow-sm">
                <span className="mb-1 block text-sm font-semibold text-emerald-600">
                  输出可复用
                </span>
                每次归档要有标签、关键词、可迁移场景，确保下次项目能快速检索参考。
              </li>
            </ul>
          </div>
        </section>

        <WorkflowTimeline stages={timeline} />

        <section className="grid gap-6 lg:grid-cols-3">
          {checklists.map((checklist) => (
            <ChecklistCard key={checklist.title} {...checklist} />
          ))}
        </section>

        <DailyRitualPlanner />

        <section className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-violet-600">
                知识库模板
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                标准化归档结构，确保长期可检索、可复用
              </h2>
            </div>
            <p className="text-sm text-slate-600">
              使用 Notion / Coda / 飞书文档等搭建案例知识库。建议一条记录对应一个案例，
              通过关联属性连接练习主题、项目灵感库与方法论卡片。
            </p>
            <div className="grid gap-4">
              {archiveFields.map((field) => (
                <div
                  key={field.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                >
                  <h3 className="text-sm font-semibold text-slate-700">
                    {field.name}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {field.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 rounded-xl border border-transparent bg-white px-3 py-2 shadow-sm"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                建议的数据库属性
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                快速复用的标签体系
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-slate-700">
              <li className="rounded-xl border border-transparent bg-white/80 px-4 py-3 shadow-sm">
                <span className="font-semibold text-emerald-600">
                  训练主题
                </span>
                ：结构、视觉、动效、叙事、服务体验等，支持交叉筛选。
              </li>
              <li className="rounded-xl border border-transparent bg-white/80 px-4 py-3 shadow-sm">
                <span className="font-semibold text-emerald-600">
                  业务标签
                </span>
                ：行业、产品生命周期、商业目标（转化、留存、教育）。
              </li>
              <li className="rounded-xl border border-transparent bg-white/80 px-4 py-3 shadow-sm">
                <span className="font-semibold text-emerald-600">
                  方法论卡片
                </span>
                ：将洞察提炼成可复用公式或检查清单，形成连接节点。
              </li>
              <li className="rounded-xl border border-transparent bg-white/80 px-4 py-3 shadow-sm">
                <span className="font-semibold text-emerald-600">
                  输出成果链接
                </span>
                ：Dribbble、Figma、飞书文档、幻灯片等。
              </li>
            </ul>
            <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm text-slate-600 shadow-sm">
              每周五统一整理标签与引用，检查是否有洞察可转化为
              「设计策略卡片」或「项目灵感合集」。
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-sky-600">
                周度节奏建议
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                5 天循环，强化输入与输出的节拍差
              </h2>
              <p className="text-sm text-slate-600">
                将每日训练嵌入到周度主题中，构建持续渐进的成长曲线。
                周末用来复盘与复刻，放大收获，避免无目的的刷案例。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm text-slate-500 shadow-sm">
              每天下班后 90 分钟的设计练习，也需要节奏与主题的变化。
              通过主题循环保持新鲜感，避免陷入机械拆解。
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {weeklyRhythms.map((rhythm) => (
              <div
                key={rhythm.title}
                className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {rhythm.title}
                </span>
                <strong className="text-lg text-slate-900">
                  {rhythm.focus}
                </strong>
                <p className="flex-1 text-sm text-slate-600">{rhythm.action}</p>
                <div className="rounded-xl border border-transparent bg-white px-4 py-2 text-xs font-medium text-slate-500 shadow-sm">
                  输出检查：是否产生洞察 / 模板 / 组件，可否复用？
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
