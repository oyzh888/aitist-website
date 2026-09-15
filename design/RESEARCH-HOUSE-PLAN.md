# Aitist v3 · 从「AI employee」改成一家研究公司 —— 计划书

**这份文件在做什么：** 2026-09-14 Steve 的要求是把 aitist.ai 从「AI 员工」改成
「像 OpenAI / Anthropic / DeepSeek 那样：底层做研究，上面孵化产品」。这份文件是**动手之前**
要拍板的东西 —— 定位一句话、信息架构、视觉规范、内容的出处规则、以及需要他决定的六件事。
**这一轮不写页面代码**；页面在他确认这份文件之后按 §6 的顺序做。

前置阅读：[`DIAGNOSIS.md`](./DIAGNOSIS.md)（上一版为什么「土」）、[`DIRECTIONS.md`](./DIRECTIONS.md)
（三个方向，当时选了 A）。这一版是**在同一个诊断上换定位**，不是重新开始。

> 术语：**定位（positioning）** = 一句话说清「你是谁、凭什么」；**IA（information
> architecture，信息架构）** = 站点有哪几页、导航几项、每页回答什么问题；**hero（首屏）** =
> 不滚动就能看到的那一屏；**mono（等宽字体）** = 每个字符一样宽，代码编辑器里那种，视觉上代表工程/数据。

---

## 0. 先说结论（一段话）

**现在这个站说的是「我们租给你 AI 员工」，这句话没法证明，也不值钱** —— 因为任何人都能
这么说。**我们真正有、且别人抄不走的东西是：一整套「怎么判断机器生成的想法是不是真的」的
机器，以及一个每天给它打分的市场。** 所以新站的主张只有一句：

> **生成想法已经变便宜了。判断哪个想法是真的，没有。**
> Aitist 是围绕这个缺口成立的研究公司；我们做的每一个产品，都是一块逼我们诚实的记分牌。

视觉上：**从现在的「暗色控制台」换到「纸本 / 科学仪器手册」** —— 暖米白底、近黑墨色、
一个工业橙、mono 小标签、整页只有**一个**会动的东西，而那个东西就是主张本身
（一堆候选进去、绝大多数被淘汰、极少数活下来）。理由见 §4。

---

## 1. 材料清单（这一轮实际查到了什么）

### 1.1 🔴 线上的站和 `main` 分支不是同一个东西

这件事以前会让「refactor 一下」无从下手，现在定了：

| | |
|---|---|
| 线上 aitist.ai 的真身 | 本仓库分支 **`zouyang/copy-vault-v2`** 的 **`deploy/site/index.html`**（单文件手写静态站，40,246 字节，10 个区块） |
| 部署方式 | Cloudflare Worker **`aitist-web`** + `[assets] directory = "./site"`（`deploy/wrangler.toml`），apex 与 www 两条 custom_domain 路由，2026-08-10 已切换 |
| `main` 上的 `src/` + `dist/` | **不是线上那个** —— 那是 Lovable/AI-Studio 导出的 React 版本，已经被 `snapshots/2026-08-09-aistudio-export/` 归档 |
| 线上与 `main` 的可见差异 | 线上是 Sunnyvale（`main` 的文案写 Oakland）、多出 EXAMPLE RUN 组件 / Human in the loop / How it works |
| Worker 最后修改 | 2026-09-11（另有 `tutorial-aitist`、`stripe-aitist`、`keys-demo` 等同账号 Worker，与本站无关） |

**结论：改站就是改 `deploy/site/`，并用同一个 Worker 重新 deploy。** 回滚路径已经写在
`deploy/DNS-ROLLBACK.md`，DNS 不需要动。

### 1.2 现在这个站的实测规范（要替换掉的东西）

`--bg:#08090A` · `--surface:#101113` · `--line:#1E2024` · `--text:#F4F5F6` ·
`--muted:#8B9096` · `--accent:#C6F24E`（电光绿）· `--ok/#3DDC84` `--warn/#F5B942`；
字体 `Inter Tight` + `JetBrains Mono`；区块标签 `01 / Aitist … 10 / About`；
首屏 `Jobs Done.`；导航 6 项（AI Employees / How it Works / Pricing / About / Get Started）。

**这一套本身做得是对的**（它就是 `DIRECTIONS.md` 的方向 A「Operator Console」落地版）。
问题不在执行，在**它服务的是一个我们要放弃的定位**：暗色控制台 + 定价卡 = 工具供应商，
而不是研究机构。

### 1.3 三份互相冲突的对外说法（必须收敛到一个）

| 出处 | 它说 Aitist 是什么 | 状态 |
|---|---|---|
| 线上 aitist.ai + 本仓库 `content/` | **AI 员工供应商**（$299 / $799 / Custom，10 个岗位式 agent） | 活着，就是要改的 |
| `oyzh888/aitist-marketing-business`（私有） | **AI 原生营销/增长代理公司**（创作者投放、本地化内容） | 有 pitch deck（2026-07-04），对外说法与上面不兼容 |
| when2buy 官网的内容台账 | 「**When2Buy 是公司**，其余是内部/产品名」（2026-09-06 拍的） | 与「Aitist 是母公司」直接冲突 → **决策 D1** |

### 1.4 兄弟站现状：when2buy.ai 已经改叫 Winnow

2026-09-14 实拍：**浅色默认**、白底、超大近黑无衬线大写标题
（"A SELF-IMPROVING TRADING SYSTEM."）、**蓝色副标题**、mono 宽字距小标签、
首屏正下方一排四个大数字（+11.83% / 2.85 / −4.72% / 70%）、其后立刻是累计收益曲线；
基金名 **Winnow**（Wide Inference, Net-Optimised Weights），导航
Live record / Modelled book / Winnow / Method / Contact。

**这对 Aitist 的视觉有两个硬约束：**
1. **首屏不能也是「一排大数字 + 曲线」** —— 那是 Winnow 的活儿，母公司抄自己的产品页会显得没主张。
2. **强调色不能也是蓝** —— 两个站放在一起要能一眼分开。

### 1.5 对标站实测（这一轮新抓的 5 家，1440×900 真实 Chrome）

底色用像素众数统计（裁掉底部 5% 避开 cookie 条 → 降采样 160×100 → 取众数）：

| 站点 | 主背景 | 占视口 | 首屏主标题 | 首屏有产品入口吗 |
|---|---|---:|---|---|
| thinkingmachines.ai | `#ffffff` | 81.7% | 没有大标题，**整页是一篇长文** | 无 CTA、无数字、无插画 |
| ssi.inc | `#111213` | 70.4% | 「Superintelligence is within reach」 | **全页等宽字体**，无导航无 logo，一篇宣言 |
| sakana.ai | `#ffffff` | 92.0% | 「Building Frontier AI in Japan」 | 导航 Research / Solutions / Products / Careers / About |
| deepseek.com | 淡蓝渐变（无单一众数，`#ffffff` 仅 3.1%） | — | 「Into the Unknown」（3 词） | **首屏直接一个输入框** + Chat / API 两个药丸 |
| moonshot.ai | `#000000` | 69.0% | 「Seeking the optimal conversion from energy to intelligence」（8 词） | 同样一个输入框 + Try Kimi / Try API |

加上 [`../../company-website/research/REFERENCES.md`](https://github.com/when2buy/company-website)
那 12 家（2026-09-05 实测）：Anthropic `#f0eee6` 44.8% · OpenAI `#ffffff` 67.8% ·
Cursor `#f7f7f4` · Linear `#08090a` · HRT `#060616` · XTX `#000000`。

**从 17 家里得出的、这一轮直接用的四条：**

1. **研究公司的官网分两种原型，没有第三种。**
   **(A) 宣言型** —— 首页**就是一篇论证**（Thinking Machines、SSI、Renaissance）：没有首屏插画、
   没有 CTA 按钮、没有数字排。**(B) 产品前置型** —— 一句诗化的 mission + **一个真的输入框**
   （DeepSeek、Moonshot、Mistral）。
   → **我们没有能放输入框的产品**（Winnow 不是给大众用的，Paseo 是内部工程工具）。
   **所以只能走 A，且 A 恰好更硬核。**
2. **暖米白（不是纯白）是前沿实验室的共识底色**；近黑是工程工具与量化交易公司的底色。
   17 家里用纯黑的只有 XTX 和 Moonshot。
3. **主标题中位数 ≈ 6 词；量化公司首屏一个业绩数字都不放**（Jane Street / Citadel /
   Renaissance / XTX / HRT 全部如此）。
4. **越可信的机构动效越少，而且集中在「一处」。** 17 家里没有一家提供明暗切换开关 ——
   每家只有一个「正确」的模式。

### 1.6 我们手上到底有什么可写的（清点结果，决定了内容能写多硬）

| 有 | 证据 | 能不能上公开站 |
|---|---|---|
| 一个跑着真钱的系统 + 公开的完整口径 | when2buy.ai 已公开发布业绩与 caveats | ✅ 但**只以「产品」身份出现并外链过去**，数字不搬到 aitist.ai |
| 一套写下来的回测完整性标准与闸门类别 | 私有研究仓库；when2buy 官网已公开到「有哪些环节」这一层 | ✅ 同一口径复用 |
| **公开发表的负面结果**（大规模候选被拒的比例、同一批交易两种口径差一个数量级） | when2buy 官网 §研究工厂 / §research at scale 已公开 | ✅ **这是最强的一块**，见 §3 |
| 一支真在跑的 agent 舰队与编排层（Paseo / OpenClaw） | 有代码、有多机部署、有调度 | ✅ 但要以「我们自己在用的工具」写，别吹成产品 |
| 基准测试（量化金融 benchmark、模型对比评测） | 公开仓库 | ✅ 可以列，**但要如实说 star 数≈0、还没人用** |
| 16 人 + 167→168 个仓库 + 30 天内动过 39 个 | GitHub API 可复算（2026-09-06 实测） | ✅ 必须带「measured on」日期 |
| **论文 / 引用 / 被采纳的模型** | **没有** | ❌ 所以**不能做 Anthropic 那种 Research index 页**（见 §3 的替代方案） |

---

## 2. 定位：一句话，和它下面的三层

### 2.1 为什么「AI employee」虚

不是修辞问题，是**不可证伪**：「我们提供 24/7 的 AI 员工」这句话，任何两个人加一个 API key
都能说，而且没人能检验。上一版为了让它显得可信，页面上放了 `98%` 效率、`$4.2k/mo` 节省、
硬编码的 sparkline —— `DIAGNOSIS.md` 已经把这个失败模式写清楚了：**假仪表盘比没有仪表盘更糟。**

### 2.2 换成什么（可证伪，且别人抄不走）

OpenAI / Anthropic 研究的是**能力**（怎么让模型更强）。
我们研究的是**验证**：机器现在每天能生成成千上万个想法，
**怎么知道哪一个是真的？** 这是所有 agent 产品共同的瓶颈，
而**金融市场是打分最快、最不讲情面的那个考官**。

**首屏（主张，6–8 词的骨架 + 一段展开）：**

> ## Verification is the bottleneck.
>
> Generating candidate ideas became cheap. Deciding which ones are true did not.
> Aitist is a research company built on that gap: we study how machine-generated
> work can be graded, and we ship the graders as products.
> Markets are our first domain because they score you fastest.

（最后那句是 when2buy 站上已有的说法，**同一句话在母公司这里正好成为「为什么第一站是市场」的桥**。）

### 2.3 三层结构（这就是 Steve 说的「底层研究、上面孵化产品」）

```
研究（我们在追的问题）
  · 怎么给「机器生成的结论」定价 —— 过拟合、独立样本数、事前登记、隐藏 holdout
  · 大规模 agent 运行的工程学 —— 编排、缓存、可复现、成本
  · 评测与基准 —— 尺子本身有没有量程（我们量过尺子失效的情形）
        ↓ 每条研究线都必须落到一个会被打分的地方
产品（记分牌）
  · Winnow — 系统化期权基金（真钱在跑，公开口径） → when2buy.ai
  · Paseo  — 我们自己每天在用的 agent 运行平台
  · Benchmarks & standards — 公开的基准与回测完整性标准
        ↓
组织（16 人 + 一支 agent 舰队；可复算的组织数字）
```

**一条纪律必须写在页面上**（不然就退回「AI 员工」那种不可证伪）：
> AI expands the search. People approve every allocation.
> 这不是一条从想法直通真钱的自动通道。

---

## 3. 可信度锚点：用「公开的负面结果」代替论文

**这是这份计划里最重要的一条判断。** 想抄 Anthropic 的 Research 页，我们填不满 ——
没有论文、没有引用、公开仓库 star 数 0–1。硬做出来只会是空架子。

**但我们有一个几乎没人做的东西：公开自己的淘汰率和自己被推翻的结论。**
- 大规模候选筛选里绝大多数被杀掉，**拒绝率本身就是产品**；
- **同一批交易、两种都算得对的口径，能差一个数量级** —— 我们把这个例子摆出来，
  并说明只有一个是对「你的夏普是多少」的诚实回答；
- 内部的过拟合审计**推翻过我们自己写在站上的两条说法**，我们改了，并留下改动记录；
- 研究池的真实分布是「中位数很平庸、少数才活下来」，而不是一张漂亮曲线。

**为什么这个比论文更有说服力：** 一个公开页面写「我们回测夏普 7」，懂行的人第一反应是
「样本内、几条腿凑的、哪个口径」。而写「我们池子里中位数很普通，而且我会告诉你那个漂亮数字
是怎么来的」—— **这个没人能反驳，也没人敢抄。**

→ 站上叫 **`Open work` / 公开的失败**，是首屏往下的第二块，不是藏在角落。
→ ⚠️ **决策 D6**：哪些内部审计数字可以以简化形式公开（当前 when2buy 站已公开的那一档默认可用；
未公开的内部数字**这一轮一律不写**）。

---

## 4. 视觉规范（锁死；这是要他点头的部分）

### 4.1 方向：`DIRECTIONS.md` 的 **B「Instrument」直接拿来用**

当时的结论是「B 是最大的差异化，但它要求排版必须完美，而且当时的内容撑不起严肃感」。
**现在内容变了 —— 研究公司的内容正好就是 B 想要的那种内容。** 加上 §1.4 的两条硬约束
（不能像 Winnow、不能用蓝）和 §1.5 的原型分析（只能走宣言型），三件事同时指向同一个方向。

**同时明确否掉两条：**
- ❌ 继续用暗色控制台（现状）：那个语言在说「我们是运维工具」，是要离开的定位。
- ❌ 抄 Winnow 的白底 + 蓝 + 大数字：母公司复制产品页 = 没有自己的主张。

### 4.2 色板（暖米白纸本 + 一个工业橙，橙每屏只出现一次）

| Token | 值 | 用在哪 |
|---|---|---|
| `--paper` | `#F2F0EA` | 页面底色（**不是纯白**；与 Anthropic `#f0eee6` 同族，比 Winnow 的白更暖） |
| `--paper2` | `#E9E6DE` | 次级面板、表格斑马纹 |
| `--ink` | `#111110` | 正文与标题（**不是纯黑**） |
| `--muted` | `#6B6A66` | 次级文字、口径小字 |
| `--rule` | `#111110` @ 12% | 发丝线；**结构性的，不是装饰** |
| `--accent` | `#FF4A18` 工业橙 | **每屏只用一次**：一个关键词 / 一个链接 / 图里活下来的那几个点 |
| `--kill` | `#111110` @ 28% | 图里被淘汰掉的点（灰，不是红 —— 淘汰不是错误） |

暗色模式：**不做用户切换开关**（17 家没有一家做）。只留一套。

### 4.3 字体（全部 OFL 开源、全部自托管、0 个外部请求）

| 用途 | 字体 | 理由 |
|---|---|---|
| 大标题 + 正文长文 | **Source Serif 4** | 屏幕阅读用的工作型衬线；论文/出版物的气质，与「研究公司」一致；也和 Thinking Machines 用衬线正文同源 |
| 标签 / 数字 / 表格 / 时间戳 | **IBM Plex Mono** | 等宽是量化与工程的身份标记（HRT 把整条导航都设成等宽） |
| 界面与表格文字 | **IBM Plex Sans** | 与 Plex Mono 同族，混排不打架 |

⛔ **不用 PP Editorial New**（商用授权，公开站要买）。⛔ **不用斜体衬线强调词**
（`DIAGNOSIS.md` §3：那是 AI 生成落地页最强的标记）。

### 4.4 排版骨架

- 12 列**显式网格**，发丝线可见；区块标签 `01 / THESIS` 用 mono 11px 全大写宽字距，压在发丝线上。
- 大标题 `clamp(44px, 7.5vw, 116px)`、字距 `-0.03em`、行高 `0.98`。
- 正文测量宽度 **62ch 上限**、行高 1.55。长文段落是一等公民（宣言型的核心）。
- 数字一律 **tabular figures（等宽数字）**，避免跳动。
- 页脚一行 mono 全大写：`RESEARCH · PRODUCTS · EVIDENCE`（对齐 when2buy 页脚那条的写法）。

### 4.5 动效：整页静止，只有一个东西会动 —— 而它就是主张

**那一个东西 = 淘汰漏斗（the funnel）。** 首屏右侧（手机上在标题下方）：
大量候选点从上方进入 → 经过几道闸 → **绝大多数变灰停住** → 极少数带橙色穿过。
一次循环约 6 秒，慢，无声，没有数字标注（数字在 Open work 那一节里给）。

- 用**原生 canvas**（沿用 `company-website` 的 `tools/fx.py` 那套约束）：devicePixelRatio 上限 2、
  IntersectionObserver + visibilitychange 双暂停、固定种子、小屏自动降点数。
- **`prefers-reduced-motion` 只画一帧静态图**（不是变慢，是不动）。
- 其余动效预算：**总共不超过 5 种行为**；滚动揭示**只改透明度、150ms、不做位移**
  （`DIAGNOSIS.md` §4 明确点了 `y:20` 的问题）。
- ⛔ 一个假的日志流 / 假仪表盘都不许有。EXAMPLE RUN 那个组件在新站里**删掉**
  （它已经标了「not live telemetry」，但一个研究公司的首屏不该靠模拟出来的东西撑）。

### 4.6 品牌标

沿用现有 logo（`deploy/site/logo-light.png` / `main` 上的三个 PNG）。
🔴 **两条已经被截图验证纠正过的教训必须带过来**（出处：when2buy 站 v4）：
① 单色版用**半透明实心**，不要空心描边（导航里只有 ~19px，空心会糊）；
② **logo SVG 必须内联进 HTML** —— `<img src=…svg>` 里的 `currentColor` 不继承宿主页面颜色，
在深色上会变成黑对黑、完全看不见。
→ 顺带一件事：现在只有 PNG，**需要一个矢量版**（可按 when2buy 那次的做法逐像素描摹）。

---

## 5. 信息架构与内容计划

### 5.1 导航 5 项（对标 Sakana 的结构，去掉我们撑不起的 Solutions）

`Research` · `Products` · `Method` · `Open` · `About` ＋ 右侧一个 `Contact ↗`

第一版做成**单页 + 锚点**（和 when2buy 站一致，成本最低、最不容易出现空页），
`Research` / `Method` 之后可以各自独立成页。

### 5.2 区块（首页顺序即论证顺序）

| # | 区块 | 回答什么 | 内容来源 / 状态 |
|---|---|---|---|
| 01 | **Thesis** | 我们是谁、为什么存在 | §2.2 的三段，无数字、无 CTA 按钮、无插画；右侧只有那个漏斗 |
| 02 | **Open work（公开的失败）** | 凭什么信我们 | §3；只用**已公开**口径的数字，每条带「measured on」与口径 |
| 03 | **Research** | 底层在追什么问题 | 三条研究线（验证与定价 / agent 运行工程学 / 评测与基准），每条一段话 + 一句「我们已经知道自己错在哪」 |
| 04 | **Products** | 上面孵化出了什么 | Winnow（真钱在跑 → 外链 when2buy.ai）· Paseo（自用的 agent 平台）· Benchmarks & standards。**每个都标真实状态**（live / internal / open source, 0 users） |
| 05 | **Method** | 你们怎么工作 | 复用 when2buy 已审定的口径：五个阶段、独立 critic、隐藏 holdout、闸门**类别**。⛔ 不写阈值 / 参数 / 标的 |
| 06 | **Organization** | 你们是谁 | 16 人 + agent 舰队 + 可复算的仓库数（带日期与复算命令） |
| 07 | **Two doors** | 你想干什么 | `Join us`（招人）· `For capital partners` → Winnow。⛔ **不放价目表** |

### 5.3 文案红线（发布前必须实跑扫描，0 命中才发）

沿用 when2buy 站的那套扫描器，扫**可见文本**（剥掉 script/style/svg）：

| 类别 | 要求 |
|---|---|
| 内部/策略代号、sleeve 版本号、具体标的代码 | **0** |
| 券商 / 平台 / 账户 / 机器名 / 内部路径 | **0** |
| **雇主相关的任何东西**（公司名、内部项目、内部域名、内部算力） | **0** —— 这是硬红线 |
| 未公开的业绩数字（含内部审计里的过拟合指标） | **0**（决策 D6 之前一律不写） |
| 编造的精度（效率百分比、节省金额、假 sparkline） | **0** —— `DIAGNOSIS.md` §5 |
| 外部资源请求（CDN / Google Fonts / 第三方 JS） | **0**；唯一允许的外链是 when2buy.ai 与 GitHub |
| 每个数字是否带 measured-on 日期与口径 | **必须** |

---

## 6. 怎么做（顺序、工具、验证）

### 6.1 技术选型：**沿用手写静态 + Python 生成器，不用 React**

线上那版已经是单文件手写静态站，而 `main` 上的 React 版是被归档的实验。新站继续走静态，
并把 `company-website` 那套**纯标准库 Python 生成器**（`tools/build.py` / `copy.py` /
`fx.py` / `qa_web.py`）移植过来 —— 好处是：零依赖、零外部请求、字体自托管、
构建就是 `python3 tools/build.py`，而且 QA 脚本可以直接复用。

### 6.2 阶段

| 阶段 | 产出 | 说明 |
|---|---|---|
| **P0（本文件）** | 这份计划 | 等 Steve 拍 §7 的六个决策 |
| **P1 · 样张** | **一屏**（Thesis + 漏斗动效 + 一个 Open work 卡片）×2 个变体：B-paper（推荐）与 B-dark（保留暗色的对照） | 发到公网可打开的链接给他二选一。**这一步才是真正的「把 style 定下来」**，因为纸本方向的成败在 4px 级别的排版精度上 |
| **P2 · 全站** | 七个区块全部落地 + 字体自托管 + logo 矢量化 + 内联 | 单页 + 锚点 |
| **P3 · 验证** | 390 / 1000 / 1440 三档溢出实跑、红线扫描、外部请求计数、**截图逐屏人工验一遍** | 「截图验证」不可省 —— 上一次正是它抓出了 logo 黑对黑 |
| **P4 · 上线** | 把新站放到 `deploy/site/`，旧站原样留在 `deploy/site-v1/` | 同一个 Worker `aitist-web` 重新 deploy，**DNS 不动**；回滚 = 把目录换回去再 deploy |

### 6.3 上线的既有约束（已核实）

- 部署命令需要 Node ≥22：`PATH=<node22-bin>:$PATH npx -y wrangler@4 deploy --config deploy/wrangler.toml`（本机 node22 的路径见 `deploy/wrangler.toml` 注释）
- `not_found_handling = "404-page"`（fail-closed，不要改成 fallback 到 index）
- apex + www 两条 `custom_domain` 路由已经归这个 Worker；**要交还给别人必须先摘路由**（`deploy/DNS-ROLLBACK.md`）
- 🔴 **不碰邮件相关 DNS 记录**（MX / SPF）；不碰其它子域。

---

## 7. 需要 Steve 拍的六件事

| # | 问题 | 我的建议 | 不定会怎样 |
|---|---|---|---|
| **D1** | **品牌层级**：对外说 Aitist 是母公司、When2Buy/Winnow 是它孵化的产品吗？（when2buy 站的台账里 2026-09-06 拍过「**When2Buy 是公司**」，两者直接冲突） | **Aitist 是母公司/研究机构；Winnow 是基金产品；When2Buy 是那条产品线的对外站点。** 需要同步改 when2buy 站页脚一行说明 | 首屏第一句就写不出来 —— 整份计划卡在这 |
| **D2** | 法律主体与注册地（页脚要写） | `Aitist, Inc.` + Sunnyvale, CA（线上现在写的就是 Sunnyvale） | 页脚只能继续留 `[TBD]` |
| **D3** | 现有的「AI 员工」生意（$299/$799 定价、10 个岗位式 agent）和 `aitist-marketing-business` 那套营销代理说法，对外**保留、下架、还是收进某个产品页**？ | **公开站下架**（定价与岗位目录都撤），营销业务用单独的私有材料对客户讲 | 新站会同时有两种人格，等于没改 |
| **D4** | 视觉方向：**暖米白纸本 + 工业橙**（推荐）还是保留现在的暗色控制台？ | 走纸本；P1 会给两个样张让你对比着选 | P1 做两版就是为这个，不算阻塞 |
| **D5** | 对外邮箱与「招人」是不是真的（有 Careers 就会有人投） | 母公司用 `hello@aitist.ai`；Winnow 那边继续用 `when2buy@aitist.ai` | 两扇门只能指向锚点，转化为零 |
| **D6** | 内部过拟合审计的数字，可以以简化形式公开吗？ | **这一轮只用 when2buy 站已公开的那一档**；其余等你单独批 | §02 会弱一档，但不阻塞 |

**D1 是唯一真正阻塞的。** D2–D6 我都可以按上面的建议先做，做完再改成本很低。

---

## 附：这一轮抓的原始材料放在哪

- 5 家新对标站截图 + when2buy.ai 现状截图：`ref2-{deepseek,thinkingmachines,moonshot,ssi,sakana,when2buy-live}.png`
  （1440×900，2026-09-14，真实 Chrome）。**故意没有提交进这个公开仓库** —— 里面是别家官网的画面；
  需要看就本地重抓，方法与配色统计口径写在 §1.5。
- 12 家旧对标站的实测表与截图：`when2buy/company-website` 的 `research/REFERENCES.md` + `research/shots/`
- 上一版的诊断与三个方向：本目录 `DIAGNOSIS.md` / `DIRECTIONS.md` / `OPENING.md`
- 线上站真身：本仓库 `zouyang/copy-vault-v2` 分支的 `deploy/site/index.html`
