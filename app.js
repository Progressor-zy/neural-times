/* NEURAL·时报 — 数据与交互 */
const NEWS = [
  {
    id: 1,
    featured: true,
    category: "大模型",
    title: "DeepSeek 发布 V4.1-Flash-1017，首次开放自研搜索 API",
    desc: "10 月 17 日更新推理、编程与智能体能力，Terminal-Bench 4.0 由 31.2 升至 42.3 分；输出定价每百万 token 仅 0.6 美元，Search / Fetch 接口 5 元/千次。",
    source: "财联社 / Chosun Biz",
    author: "前沿观察",
    time: "10 月 17 日",
    read: 5,
    hot: 98,
    cover: "https://upload.wikimedia.org/wikipedia/commons/5/5e/DeepSeek_Android_App_%E6%88%AA%E5%9B%BE%282.4.1%29.jpg",
  },
  {
    id: 2,
    category: "AI 科研",
    title: "Claude 半小时破解 5 条国际密码标准椭圆曲线的种子生成方式",
    desc: "量子位报道称，悬置约 20 年的椭圆曲线种子来源问题在半小时内被找出生成方式，引发对国际密码标准可信度的讨论。",
    source: "量子位",
    author: "科研前线",
    time: "10 月 18 日",
    read: 5,
    hot: 96,
    cover: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Elliptic_curve_y%5E2%3Dx%5E3-x_on_finite_field_Z_61.PNG",
  },
  {
    id: 3,
    category: "科技",
    title: "苹果折叠屏 iPhone Duo 预购火爆，美国交付排到 2027 年初",
    desc: "10 月 16 日开启预购、起售价 15999 元，10 月 23 日发售；美国预计交付已滑至 2027 年 1 月下旬，转售平台出现明显加价。",
    source: "MacRumors",
    author: "科技前线",
    time: "10 月 16 日",
    read: 4,
    hot: 95,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Foldable_Smartphones.jpg/1920px-Foldable_Smartphones.jpg",
  },
  {
    id: 4,
    category: "芯片算力",
    title: "英伟达开源 Nemotron 3.5 Bolt：2 位量化后可跑 24GB 笔记本",
    desc: "74B 参数、激活 9B，2 位量化后体积由 148GB 压至 22.1GB（约降 85%），可运行在 24GB 显存的笔记本 GPU 上，实测约 84 TPS。",
    source: "NVIDIA 官方博客",
    author: "算力观察站",
    time: "10 月 16 日",
    read: 4,
    hot: 93,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/ASUS_NVIDIA_GeForce_210_silent_graphics_card_with_HDMI.JPG/1920px-ASUS_NVIDIA_GeForce_210_silent_graphics_card_with_HDMI.JPG",
  },
  {
    id: 5,
    category: "机器人",
    title: "报告：全球人形机器人收入前五均为中国企业",
    desc: "上半年全球人形机器人销量 3.6 万台、收入 5.4 亿美元，均超 2025 年全年；深圳前 8 个月机器人出口 111.3 亿元，同比增长 12.2 倍。",
    source: "弗若斯特沙利文 / 财联社",
    author: "机器人纪元",
    time: "10 月 17 日",
    read: 4,
    hot: 91,
    cover: "https://upload.wikimedia.org/wikipedia/commons/3/34/Valkyrie-robot-3.jpg",
  },
  {
    id: 6,
    category: "科技",
    title: "Meta 禁止字节跳动在 Facebook、Instagram 投放广告",
    desc: "该政策自 10 月 8 日起在美国、日本、加拿大等 7 国生效，字节自身及其第三方跳转 TikTok 的广告均被禁止。",
    source: "彭博社 / 路透社",
    author: "科技前线",
    time: "10 月 17 日",
    read: 3,
    hot: 90,
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Meta_HQ_2023.png/1280px-Meta_HQ_2023.png",
  },
  {
    id: 7,
    category: "科技",
    title: "SpaceX 连购频谱挑战三大运营商，FCC 批准 1.5 万颗新星链卫星",
    desc: "继约 200 亿美元收购 EchoStar 频谱后再购入低频段频谱，并获准新增约 1.5 万颗星链卫星，目标自建覆盖全美的移动网络。",
    source: "The Verge",
    author: "科技前线",
    time: "10 月 17 日",
    read: 4,
    hot: 88,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Starlink_Satellites_Overhead.jpg/1920px-Starlink_Satellites_Overhead.jpg",
  },
  {
    id: 8,
    category: "行业应用",
    title: "Anthropic 三季度营收 168 亿美元，IPO 估值预期被下调",
    desc: "三季度营收环比增长 45%，较上季度约 147% 的增速明显放缓；部分投资者把上市估值预期从约 2 万亿美元下调至约 1.5 万亿美元。",
    source: "路透社",
    author: "产业风云",
    time: "10 月 15 日",
    read: 4,
    hot: 87,
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Slack_offices%2C_Howard_Street%2C_San_Francisco_%28viewed_from_the_south-west%2C_January_2020%29.jpg/1280px-Slack_offices%2C_Howard_Street%2C_San_Francisco_%28viewed_from_the_south-west%2C_January_2020%29.jpg",
  },
  {
    id: 9,
    category: "大模型",
    title: "微软 AI 公布基础模型 MAI-Base-2，作为预训练底座",
    desc: "微软称其多基准较上代 MAI-Base-1 明显提升，主要用于下游专用模型的后训练与适配，目前已投入实际研发流程。",
    source: "Blognone",
    author: "前沿观察",
    time: "10 月 18 日",
    read: 3,
    hot: 86,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Aerial_Microsoft_West_Campus_August_2009.jpg/1920px-Aerial_Microsoft_West_Campus_August_2009.jpg",
  },
  {
    id: 10,
    category: "机器人",
    title: "小鹏 IRON 人形机器人亮相巴黎车展：76 自由度、2250 TOPS",
    desc: "搭载 3 颗自研图灵芯片合计约 2250 TOPS；计划 2026 年底在广州工厂量产，2027 年下半年在欧洲交付。",
    source: "XPENG 官方 / SpecsLib",
    author: "机器人纪元",
    time: "10 月 16 日",
    read: 4,
    hot: 84,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/XPeng_G6_%282023%29_DSC_1247.jpg/1920px-XPeng_G6_%282023%29_DSC_1247.jpg",
  },
  {
    id: 11,
    category: "观点",
    title: "Anthropic 联创克拉克：AI 或令美国 GDP 增近 50%",
    desc: "在 IMF 年会上，克拉克称到 2030 年美国产出或增近五成（GDP 升至约 44 万亿美元），并呼吁全球尽快建立 AI 监管框架。",
    source: "财联社",
    author: "深度编译",
    time: "10 月 18 日",
    read: 5,
    hot: 83,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/AI_Artificial_Intelligence_concept_%2852917075159%29.jpg/1920px-AI_Artificial_Intelligence_concept_%2852917075159%29.jpg",
  },
  {
    id: 12,
    category: "芯片算力",
    title: "物理 AI 芯片公司新芯航途完成战略轮融资，累计约 50 亿元",
    desc: "雷诺首次参投、奇瑞追加、长鑫科技入股；公司成立不足 3 年，主攻智能驾驶与机器人芯片。",
    source: "科创板日报",
    author: "算力观察站",
    time: "10 月 18 日",
    read: 3,
    hot: 81,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/EPROM_Microchip_SuperMacro.jpg/1920px-EPROM_Microchip_SuperMacro.jpg",
  },
  {
    id: 13,
    category: "科技",
    title: "星链对乌限速风波：泽连斯基称仅限乌境内，鲁比奥称美方无人下令",
    desc: "泽连斯基称限速仅发生在乌克兰境内、影响包括无人机拦截在内的能力；鲁比奥称美方无人下令，随后服务已恢复。",
    source: "新华社 / 中新网",
    author: "科技前线",
    time: "10 月 17 日",
    read: 3,
    hot: 79,
    cover: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Antena_y_terminal_de_usuario_Starlink_en_Capiov%C3%AD%2C_Provincia_de_Misiones%2C_Argentina.jpg/1920px-Antena_y_terminal_de_usuario_Starlink_en_Capiov%C3%AD%2C_Provincia_de_Misiones%2C_Argentina.jpg",
  },
  {
    id: 14,
    category: "科技",
    title: "NASA SunRISE 六星任务推迟至 2027 年中发射",
    desc: "6 颗「烤箱大小」卫星将以拼车方式由猎鹰重型发射，用于观测日冕射电暴并为可能影响卫星与电网的粒子风暴提供预警。",
    source: "NASA JPL",
    author: "科技前线",
    time: "10 月 16 日",
    read: 3,
    hot: 75,
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/SunRISE-FInal-Poster_full.jpg/1920px-SunRISE-FInal-Poster_full.jpg",
  },
];

const TICKER = [
  ["模型", "DeepSeek 更新 V4.1-Flash-1017：开放自研搜索 API，输出每百万 token 0.6 美元"],
  ["研究", "Claude 半小时破解 5 条国际密码标准椭圆曲线的种子生成方式"],
  ["芯片", "英伟达开源 Nemotron 3.5 Bolt：2 位量化后可跑 24GB 笔记本"],
  ["科技", "苹果折叠屏 iPhone Duo 预购火爆，美国交付排到 2027 年初"],
  ["产业", "报告：全球人形机器人收入前五均为中国企业"],
  ["太空", "SpaceX 连购频谱，FCC 批准 1.5 万颗新星链卫星"],
];

const TAGS = ["DeepSeek", "Anthropic", "英伟达", "人形机器人", "折叠屏", "SpaceX", "星链", "开源", "机器人", "芯片算力"];

const CATEGORIES = ["全部", "大模型", "芯片算力", "机器人", "AI 科研", "行业应用", "科技", "观点"];

/* ---------- 渲染：Hero ---------- */
function renderHero() {
  const hero = NEWS.find(n => n.featured);
  const subs = [NEWS[1], NEWS[2]];
  document.getElementById("heroSection").innerHTML = `
    <div class="hero-grid">
      <article class="hero-main" onclick="openArticle(${hero.id})">
        <img src="${hero.cover}" alt="${hero.title}" loading="eager" />
        <div class="hero-main-body">
          <span class="badge">头条 · ${hero.category}</span>
          <h1>${hero.title}</h1>
          <p>${hero.desc}</p>
          <div class="meta"><span>${hero.source}</span><span>·</span><span>${hero.time}</span><span>·</span><span>${hero.read} 分钟阅读</span></div>
        </div>
      </article>
      <div class="hero-side">
        ${subs.map(s => `
          <article class="hero-sub" onclick="openArticle(${s.id})">
            <img src="${s.cover}" alt="${s.title}" loading="lazy" />
            <div class="hero-sub-body">
              <span class="badge">${s.category}</span>
              <h3>${s.title}</h3>
            </div>
          </article>`).join("")}
      </div>
    </div>`;
}

/* ---------- 渲染：快讯滚动 ---------- */
function renderTicker() {
  const items = TICKER.map(([b, t]) => `<span><b>${b}</b>${t}</span>`).join("");
  document.getElementById("tickerTrack").innerHTML = items + items; // 复制一份实现无缝滚动
}

/* ---------- 渲染：分类 Tab ---------- */
let activeCategory = "全部";
function renderTabs() {
  document.getElementById("categoryTabs").innerHTML = CATEGORIES.map(c =>
    `<button class="tab ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
  document.querySelectorAll(".tab").forEach(btn =>
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      renderTabs();
      renderGrid();
    })
  );
}

/* ---------- 渲染：新闻网格 ---------- */
function renderGrid() {
  const kw = document.getElementById("searchInput").value.trim().toLowerCase();
  const list = NEWS.filter(n => {
    const catOk = activeCategory === "全部" || n.category === activeCategory;
    const kwOk = !kw || (n.title + n.desc + n.source + n.category).toLowerCase().includes(kw);
    return catOk && kwOk;
  });

  const grid = document.getElementById("newsGrid");
  document.getElementById("emptyTip").hidden = list.length > 0;

  grid.innerHTML = list.map((n, i) => `
    <article class="card" style="animation-delay:${i * 60}ms" onclick="openArticle(${n.id})">
      <div class="card-cover"><img src="${n.cover}" alt="${n.title}" loading="lazy" /></div>
      <div class="card-body">
        <span class="card-cat">${n.category}${n.hot >= 85 ? ' · <span class="hot-flag">HOT</span>' : ""}</span>
        <h3 class="card-title">${n.title}</h3>
        <p class="card-desc">${n.desc}</p>
        <div class="card-meta">
          <span>${n.source}</span><span class="dot"></span>
          <span>${n.time}</span><span class="dot"></span>
          <span>${n.read} 分钟</span>
        </div>
      </div>
    </article>`).join("");
}

/* ---------- 渲染：热榜 & 关键词 ---------- */
function renderSidebar() {
  const top5 = [...NEWS].sort((a, b) => b.hot - a.hot).slice(0, 5);
  document.getElementById("trendList").innerHTML = top5.map(n =>
    `<li onclick="openArticle(${n.id})">${n.title}</li>`
  ).join("");
  document.getElementById("tagCloud").innerHTML = TAGS.map(t => `<span>${t}</span>`).join("");
}

/* ---------- 性能排行榜（Elo：LMArena，2026-10-20；性能：Artificial Analysis 等公开测试） ---------- */
const ORG_COLORS = {
  Google: "#4285f4", Anthropic: "#d97757", Meta: "#0082fb", Moonshot: "#8b5cf6",
  OpenAI: "#10a37f", Alibaba: "#ff6a00", Xiaomi: "#ff6900", "Z.ai": "#6366f1",
  xAI: "#52525b", DeepSeek: "#4d6bfe",
};

const LEADERBOARD = [
  { name: "Gemini 4 Argon", variant: "High", org: "Google", elo: 1524, votes: "4.9k", license: "closed", flag: "pre", speed: 144, ttft: 2.49, price: [2, 10] },
  { name: "Muse Wonder", variant: "Max", org: "Meta", elo: 1510, votes: "5.1k", license: "closed", flag: "new", speed: 172, ttft: 31.23, price: [4, 20] },
  { name: "Claude Opus 5.5", variant: "High", org: "Anthropic", elo: 1509, votes: "9.5k", license: "closed", flag: "new", speed: 78, ttft: 7.70, price: [4, 20] },
  { name: "Claude Fable 5", variant: "High", org: "Anthropic", elo: 1504, votes: "43.4k", license: "closed", speed: 58, ttft: null, price: [10, 50] },
  { name: "Claude Opus 4.6", variant: "High", org: "Anthropic", elo: 1503, votes: "82.6k", license: "closed", speed: 56, ttft: 1.65, price: [5, 25] },
  { name: "Claude Fable 5.1", variant: "Max", org: "Anthropic", elo: 1503, votes: "15.6k", license: "closed", flag: "new", speed: 56, ttft: 1.61, price: [10, 50] },
  { name: "Claude Opus 4.7", variant: "High", org: "Anthropic", elo: 1501, votes: "65.1k", license: "closed", speed: 90, ttft: 1.69, price: [5, 25] },
  { name: "Claude Opus 4.6", variant: "", org: "Anthropic", elo: 1497, votes: "87.4k", license: "closed", speed: 56, ttft: 1.65, price: [5, 25] },
  { name: "Gemini 3.8 Flash", variant: "High", org: "Google", elo: 1496, votes: "41.4k", license: "closed", flag: "pre", speed: 299, ttft: 8.42, price: [0.75, 3.75] },
  { name: "Muse Spark 1.3", variant: "Max", org: "Meta", elo: 1495, votes: "19.3k", license: "closed", speed: 265, ttft: 20.78, price: [1.25, 4.25] },
  { name: "Claude Opus 4.7", variant: "", org: "Anthropic", elo: 1494, votes: "66.2k", license: "closed", speed: 90, ttft: 1.69, price: [5, 25] },
  { name: "Muse Spark 1.2", variant: "xHigh", org: "Meta", elo: 1492, votes: "9.6k", license: "closed", speed: null, ttft: null, price: [1.25, 4.25] },
  { name: "Claude Opus 5", variant: "Max", org: "Anthropic", elo: 1491, votes: "33.7k", license: "closed", speed: 74, ttft: null, price: [5, 25] },
  { name: "Muse Spark 1.1", variant: "", org: "Meta", elo: 1490, votes: "44.8k", license: "closed", speed: null, ttft: null, price: [1.25, 4.25] },
  { name: "Claude Opus 5", variant: "High", org: "Anthropic", elo: 1490, votes: "69.3k", license: "closed", speed: 74, ttft: null, price: [5, 25] },
  { name: "Muse Spark", variant: "", org: "Meta", elo: 1489, votes: "14.1k", license: "closed", speed: null, ttft: null, price: null },
  { name: "Gemini 3.7 Flash", variant: "High", org: "Google", elo: 1489, votes: "29.2k", license: "closed", flag: "pre", speed: 299, ttft: 8.42, price: [0.75, 3.75] },
  { name: "Kimi K3", variant: "Max", org: "Moonshot", elo: 1488, votes: "34.3k", license: "oss", speed: 55, ttft: null, price: [3, 15] },
  { name: "Gemini 3.1 Pro", variant: "", org: "Google", elo: 1487, votes: "129.5k", license: "closed", speed: 131, ttft: null, price: [1, 6] },
  { name: "Gemini 3 Pro", variant: "", org: "Google", elo: 1485, votes: "42.1k", license: "closed", speed: null, ttft: null, price: [2, 12] },
  { name: "GPT-5.6 Sol", variant: "xHigh", org: "OpenAI", elo: 1484, votes: "41.8k", license: "closed", speed: 73, ttft: 1.31, price: [4, 20] },
  { name: "GPT-6.1 Sol", variant: "Max", org: "OpenAI", elo: 1483, votes: "7.5k", license: "closed", flag: "new", speed: 45, ttft: 2.17, price: [2, 10] },
  { name: "Gemini 3.6 Flash", variant: "High", org: "Google", elo: 1483, votes: "36.1k", license: "closed", speed: 148, ttft: null, price: [0.75, 3.75] },
  { name: "Qwen3.8 Max", variant: "", org: "Alibaba", elo: 1482, votes: "29.4k", license: "oss", speed: 86, ttft: null, price: [2, 6] },
  { name: "Claude Opus 4.8", variant: "High", org: "Anthropic", elo: 1482, votes: "64.0k", license: "closed", speed: 92, ttft: 1.23, price: [5, 25] },
  { name: "GPT-5.5", variant: "High", org: "OpenAI", elo: 1481, votes: "69.3k", license: "closed", speed: 60, ttft: 1.31, price: [5, 30] },
  { name: "GLM 5.3 Max", variant: "", org: "Z.ai", elo: 1481, votes: "24.0k", license: "oss", speed: 67, ttft: null, price: [1.4, 4.4] },
  { name: "MiMo V2.6 Pro", variant: "", org: "Xiaomi", elo: 1480, votes: "4.1k", license: "oss", speed: 46, ttft: 2.97, price: [0.435, 0.87] },
  { name: "Gemini 3.5 Flash", variant: "High", org: "Google", elo: 1477, votes: "48.0k", license: "closed", speed: 268, ttft: 6.75, price: null },
  { name: "Grok 4.20 Beta", variant: "", org: "xAI", elo: 1475, votes: "27.8k", license: "closed", speed: 117, ttft: 0.59, price: null },
  { name: "DeepSeek V4.1 Flash", variant: "Max", org: "DeepSeek", elo: 1473, votes: "8.1k", license: "oss", speed: 210, ttft: 0.96, price: [0.3, 1.2] },
  { name: "Grok 4.1", variant: "", org: "xAI", elo: 1459, votes: "—", license: "closed", speed: null, ttft: null, price: null },
];

const ELO_FLOOR = 1450; // 柱状条基线，拉开视觉差距
const ELO_TOP = Math.max(...LEADERBOARD.map(m => m.elo));
const voteNum = v => (parseFloat(v) || 0) * 1000; // "77.2k" → 77200

// 榜单视图状态
let lbSort = "elo";
let lbOssOnly = false;

// 排行维度：get 取排序值，fmt 生成领奖台展示值，dir 为更优方向
const METRIC = {
  elo:   { sub: "ARENA ELO", get: m => m.elo,             fmt: m => m.elo,               dir: "desc" },
  speed: { sub: "TOK/S",     get: m => m.speed,           fmt: m => Math.round(m.speed), dir: "desc" },
  ttft:  { sub: "TTFT 秒",   get: m => m.ttft,            fmt: m => m.ttft.toFixed(2),   dir: "asc"  },
  price: { sub: "输出 $/1M", get: m => m.price?.[1],      fmt: m => `$${m.price[1]}`,    dir: "asc"  },
  votes: { sub: "投票数",    get: m => voteNum(m.votes),  fmt: m => m.votes,             dir: "desc" },
};

function flagHtml(flag) {
  if (flag === "new") return '<span class="lb-flag new">NEW</span>';
  if (flag === "pre") return '<span class="lb-flag pre">Preliminary</span>';
  return "";
}

function renderLeaderboard() {
  const metric = METRIC[lbSort];
  const view = LEADERBOARD
    .filter(m => !lbOssOnly || m.license === "oss")
    .sort((a, b) => {
      const va = metric.get(a), vb = metric.get(b);
      if (va == null && vb == null) return b.elo - a.elo;
      if (va == null) return 1;
      if (vb == null) return -1;
      return metric.dir === "asc" ? va - vb : vb - va;
    });

  const barW = elo => Math.round(((elo - ELO_FLOOR) / (ELO_TOP - ELO_FLOOR)) * 100);
  const avatar = m =>
    `<span class="lb-avatar" style="--org:${ORG_COLORS[m.org] || "#64748b"}">${m.org[0]}</span>`;

  document.getElementById("lbSource").textContent =
    `LMArena Elo · 更新于 2026-10-20 · 共 ${view.length} 款模型${lbOssOnly ? "（仅开源）" : ""} · 性能数据：Artificial Analysis`;

  // 领奖台：2 / 1 / 3 排列
  const podiumOrder = [1, 0, 2];
  document.getElementById("podium").innerHTML = podiumOrder.map(i => {
    const m = view[i];
    return `
      <div class="podium-card p${i + 1}">
        ${m.flag ? `<span class="podium-flag">${flagHtml(m.flag)}</span>` : ""}
        <div class="podium-medal">${i + 1}</div>
        <div class="podium-name">${m.name}${m.variant ? ` <small>(${m.variant})</small>` : ""}</div>
        <div class="podium-org">${m.org}</div>
        <div class="podium-elo">${metric.get(m) == null ? "—" : metric.fmt(m)}<small>${metric.sub}</small></div>
      </div>`;
  }).join("");

  // 完整表格
  document.getElementById("lbBody").innerHTML = view.map((m, i) => `
    <tr class="${i < 3 ? "top3" : ""}" style="animation-delay:${Math.min(i, 12) * 35}ms">
      <td class="col-rank"><span class="lb-rank">${i + 1}</span></td>
      <td>
        <div class="lb-model">
          ${avatar(m)}
          <div>
            <div class="lb-model-name">${m.name}${m.variant ? ` (${m.variant})` : ""}${flagHtml(m.flag)}</div>
            <div class="lb-model-org">${m.org}</div>
          </div>
        </div>
      </td>
      <td class="col-license"><span class="lb-license ${m.license}">${m.license === "oss" ? "开源" : "闭源"}</span></td>
      <td class="col-score">
        <div class="lb-score-cell">
          <span class="lb-elo">${m.elo}</span>
          <span class="lb-bar"><i style="width:${barW(m.elo)}%"></i></span>
        </div>
      </td>
      <td class="col-speed">${m.speed == null
        ? '<span class="lb-perf muted">—</span>'
        : `<span class="lb-perf">${m.speed}<span class="unit"> tok/s</span></span>`}</td>
      <td class="col-ttft">${m.ttft == null
        ? '<span class="lb-perf muted">—</span>'
        : `<span class="lb-perf">${m.ttft.toFixed(2)}<span class="unit"> s</span></span>`}</td>
      <td class="col-price">${m.price
        ? `<span class="lb-perf">$${m.price[0]} / $${m.price[1]}</span>`
        : '<span class="lb-perf muted">—</span>'}</td>
      <td class="col-votes"><span class="lb-votes">${m.votes}</span></td>
    </tr>`).join("");
}

/* ---------- 新闻详情内容 ---------- */
const DETAILS = {
  1: {
    points: ["10 月 17 日更新，重点提升推理、编程与智能体能力", "Terminal-Bench 4.0 由 31.2 分升至 42.3 分", "输出定价 0.6 美元/百万 token", "首次开放自研搜索与网页抓取 API，5 元/千次"],
    body: [
      "据财联社等报道，DeepSeek 于 10 月 17 日更新 V4.1-Flash-1017 版本，官方称本次更新聚焦推理、编程与智能体（Agent）能力的提升。",
      "在公开的编程智能体基准 Terminal-Bench 4.0 上，该版本得分由上一版本的 31.2 分提升至 42.3 分。",
      "价格方面，输出定价为每百万 token 0.6 美元；同时首次开放自研的 Search（搜索）与 Fetch（网页抓取）接口，定价 5 元/千次。",
      "需要说明：上述基准分数以官方公布为准，实际表现建议结合自有场景测试评估。"
    ],
    tags: ["DeepSeek", "大模型", "API"]
  },
  2: {
    points: ["约半小时内找出 5 条国际密码标准椭圆曲线种子的生成方式", "相关问题在学界悬置约 20 年", "引发对标准曲线来源可信度的讨论", "结果尚待独立复核"],
    body: [
      "据量子位报道，Anthropic 的 Claude 在约半小时内找出了 5 条国际密码标准椭圆曲线种子的生成方式，而这一悬案在学界已悬置约 20 年。",
      "椭圆曲线的「种子」决定了曲线的具体参数。若种子来源不可验证，外界难以完全排除参数被刻意构造的可能，长期以来被视为密码标准透明度上的一个缺口。",
      "该进展在密码学社区引发讨论，焦点在于国际标准曲线的可信度是否需要重新审视。",
      "需要提醒：上述结果目前主要来自单一来源披露，仍待同行独立复核，不宜据此直接推断相关标准已被攻破。"
    ],
    tags: ["AI 科研", "密码学", "Anthropic"]
  },
  3: {
    points: ["10 月 16 日开启预购，起售价 15999 元", "10 月 23 日正式发售", "美国预计交付已滑至 2027 年 1 月下旬", "转售平台出现明显加价"],
    body: [
      "据 MacRumors 报道，苹果折叠屏机型 iPhone Duo 于 10 月 16 日开启预购，起售价 15999 元，10 月 23 日正式发售。",
      "预购开启后需求迅速超出供应，美国市场的预计交付时间已滑至 2027 年 1 月下旬。",
      "在部分转售平台上，该机型出现明显加价，个别报价被炒至约 5000 美元。",
      "需要说明：交付时间会随产能与地区变化，以上为报道时的估计值。"
    ],
    tags: ["科技", "苹果", "消费电子"]
  },
  4: {
    points: ["总参数 74B、激活 9B 的开放模型", "2 位量化后体积由 148GB 压至 22.1GB，约降 85%", "可运行在 24GB 显存的笔记本 GPU 上", "官方实测约 84 TPS"],
    body: [
      "英伟达在官方博客宣布开源 Nemotron 3.5 Bolt，这是一个总参数 74B、推理时激活 9B 的模型。",
      "配合 2 位量化，模型体积从 148GB 压缩至 22.1GB，降幅约 85%，从而可以运行在配备 24GB 显存的笔记本 GPU（RTX Spark）上。",
      "官方给出的实测吞吐约为 84 TPS。",
      "需要说明：量化会带来一定精度损失，实际效果建议自行测试。"
    ],
    tags: ["英伟达", "开源", "芯片算力"]
  },
  5: {
    points: ["上半年全球销量 3.6 万台、收入 5.4 亿美元", "两项数据均超过 2025 年全年", "收入前五名厂商均为中国企业", "深圳前 8 月机器人出口 111.3 亿元，同比增 12.2 倍"],
    body: [
      "据弗若斯特沙利文与财联社，2026 年上半年全球人形机器人销量达 3.6 万台、收入 5.4 亿美元，两项数据均超过 2025 年全年。",
      "报告显示，收入排名前五的厂商均为中国企业；深圳前 8 个月机器人出口额达 111.3 亿元，同比增长 12.2 倍。",
      "这表明人形机器人正从演示阶段加速走向规模化交付，中国厂商在出货与出口上占据领先位置。"
    ],
    tags: ["机器人", "人形机器人", "产业"]
  },
  6: {
    points: ["政策自 10 月 8 日起在美、日、加等 7 国生效", "字节自身广告与第三方跳转 TikTok 的广告均被禁", "被视为两大平台竞争进一步升级", "字节尚未公布应对方案"],
    body: [
      "据彭博社与路透社报道，Meta 已禁止字节跳动在 Facebook 与 Instagram 上投放广告。",
      "该政策自 10 月 8 日起在美国、日本、加拿大等 7 个国家生效，字节自身及其第三方跳转至 TikTok 的广告均在被禁之列。",
      "外界普遍将其视为两大短视频平台竞争升级的信号。截至报道时，字节跳动尚未公布应对方案。"
    ],
    tags: ["科技", "Meta", "互联网平台"]
  },
  7: {
    points: ["继约 200 亿美元收购 EchoStar 频谱后再购低频段频谱", "FCC 批准约 1.5 万颗新星链卫星", "目标自建覆盖全美的移动网络", "对传统三大运营商构成挑战"],
    body: [
      "据 The Verge 报道，SpaceX 在约 200 亿美元收购 EchoStar 频谱之后，又购入一批低频段频谱，用于自建移动网络。",
      "与此同时，美国联邦通信委员会（FCC）批准其新增约 1.5 万颗星链卫星。",
      "分析认为，SpaceX 正试图以「卫星 + 频谱」的组合直接挑战美国的三大地面运营商。",
      "需要说明：频谱交易与卫星部署均需分阶段获批与建设，落地节奏存在不确定性。"
    ],
    tags: ["科技", "SpaceX", "星链"]
  },
  8: {
    points: ["三季度营收 168 亿美元，环比增长 45%", "上季度环比增速约为 147%", "增速明显放缓", "部分投资者把 IPO 估值预期从约 2 万亿下调至约 1.5 万亿美元"],
    body: [
      "据路透社，Anthropic 三季度营收为 168 亿美元，环比增长 45%，增速较上季度约 147% 的水平明显放缓。",
      "伴随增速回落，部分投资者把其 IPO 估值预期从约 2 万亿美元下调至约 1.5 万亿美元。",
      "需要说明：营收与估值预期均以媒体报道为准，最终数据以公司正式披露为准。"
    ],
    tags: ["Anthropic", "行业应用", "融资"]
  },
  9: {
    points: ["微软 AI 公布新基础模型 MAI-Base-2", "定位为预训练底座，供下游后训练使用", "官方称多基准较 MAI-Base-1 明显提升", "具体评测细节尚未完全公开"],
    body: [
      "据 Blognone 报道，微软 AI 公布了新的基础模型 MAI-Base-2。",
      "该模型定位为预训练底座，主要用于下游专用模型的后训练与适配，微软称其在多个基准上较上一代 MAI-Base-1 有明显提升。",
      "需要说明：目前公开的评测细节有限，具体能力以官方后续披露与第三方复现为准。"
    ],
    tags: ["大模型", "微软", "基础模型"]
  },
  10: {
    points: ["76 个自由度", "搭载 3 颗自研图灵芯片，合计约 2250 TOPS", "计划 2026 年底在广州工厂量产", "2027 年下半年在欧洲交付"],
    body: [
      "据小鹏官方，人形机器人 IRON 在巴黎车展亮相，具备 76 个自由度。",
      "其算力由 3 颗自研图灵芯片提供，合计约 2250 TOPS。",
      "量产与交付方面，小鹏计划 2026 年底在广州工厂量产，2027 年下半年在欧洲交付。",
      "需要说明：上述时间表为公司规划，实际进度可能调整。"
    ],
    tags: ["机器人", "小鹏", "人形机器人"]
  },
  11: {
    points: ["克拉克在 IMF 年会预测到 2030 年美国产出或增近五成", "对应 GDP 或升至约 44 万亿美元", "呼吁全球尽快建立 AI 监管框架", "属长期宏观预测，存在较大不确定性"],
    body: [
      "据财联社，Anthropic 联合创始人克拉克在 IMF 年会上表示，到 2030 年人工智能可能使美国产出增加接近 50%，对应 GDP 或升至约 44 万亿美元。",
      "他同时呼吁各国尽快就 AI 建立监管框架，以在释放生产率红利的同时控制风险。",
      "需要说明：这属于长期宏观预测，涉及模型假设较多，实际结果存在较大不确定性。"
    ],
    tags: ["观点", "Anthropic", "宏观经济"]
  },
  12: {
    points: ["雷诺首次参投、奇瑞追加、长鑫科技入股", "公司成立不足 3 年，累计融资约 50 亿元", "主攻智能驾驶与机器人芯片", "定位为物理 AI 芯片公司"],
    body: [
      "据科创板日报，物理 AI 芯片公司新芯航途完成战略轮融资，雷诺首次参投，奇瑞追加投资，长鑫科技入股。",
      "公司成立不足 3 年，累计融资约 50 亿元，主要方向为智能驾驶与机器人芯片。",
      "车企与存储厂商同时入局，被视为产业链对「物理 AI」芯片需求的提前布局。"
    ],
    tags: ["芯片算力", "融资", "智能驾驶"]
  },
  13: {
    points: ["泽连斯基称限速仅发生在乌克兰境内", "称限速影响包括无人机拦截在内的能力", "鲁比奥称美方无人下令限速", "随后服务已恢复"],
    body: [
      "据新华社与中新网报道，围绕星链在乌克兰境内被限速的风波，泽连斯基表示限速仅发生在乌克兰境内，并称其影响了包括无人机拦截在内的能力。",
      "美国方面，鲁比奥称美方无人下令对星链限速。此后相关服务已恢复。",
      "需要说明：事件细节来自多方表态，具体技术原因未见完整公开说明。"
    ],
    tags: ["科技", "星链", "通信"]
  },
  14: {
    points: ["任务推迟至 2027 年中发射", "由 6 颗「烤箱大小」卫星组成", "以拼车方式由猎鹰重型发射", "用于观测日冕射电暴并预警粒子风暴"],
    body: [
      "据 NASA JPL，SunRISE 任务推迟至 2027 年中发射。",
      "该任务由 6 颗「烤箱大小」的卫星组成，将以拼车方式搭乘猎鹰重型火箭升空。",
      "卫星编队将用于观测日冕射电暴，并为可能影响卫星与电网的粒子风暴提供预警。"
    ],
    tags: ["科技", "太空", "NASA"]
  }
};

/* ---------- 交互 ---------- */
function openArticle(id) {
  const n = NEWS.find(x => x.id === id);
  if (!n) return;
  const d = DETAILS[n.id] || {};
  const points = d.points || [];
  const body = d.body || [n.desc];
  const tags = d.tags || [n.category];

  // 相关阅读：优先同分类，不足则用其他分类补齐
  const sameCat = NEWS.filter(x => x.id !== n.id && x.category === n.category);
  const others = NEWS.filter(x => x.id !== n.id && x.category !== n.category);
  const related = [...sameCat, ...others].slice(0, 3);

  document.getElementById("articleModal").innerHTML = `
    <div class="modal-panel" role="dialog" aria-modal="true" aria-label="${n.title}">
      <button class="modal-close" onclick="closeArticle()" aria-label="关闭">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="modal-hero">
        <img src="${n.cover}" alt="${n.title}" />
        <div class="modal-hero-mask"></div>
        <div class="modal-hero-text">
          <span class="badge">${n.category}</span>
          <h2>${n.title}</h2>
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-meta">
          <span>${n.source}</span><span class="dot"></span>
          <span>${n.author}</span><span class="dot"></span>
          <span>${n.time}</span><span class="dot"></span>
          <span>${n.read} 分钟阅读</span>
        </div>

        <div class="modal-share">
          <span class="share-label">分享</span>
          <button class="share-btn" onclick="copyArticleLink(${n.id})" title="复制链接">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/></svg>
            复制链接
          </button>
          <button class="share-btn" onclick="shareTo('x', ${n.id})">X</button>
          ${navigator.share ? `<button class="share-btn" onclick="shareTo('system', ${n.id})">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M8 7l4-4 4 4M5 13v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6"/></svg>
            系统分享
          </button>` : ""}
        </div>

        ${points.length ? `
        <div class="modal-points">
          <h4>核心要点</h4>
          <ul>${points.map(p => `<li>${p}</li>`).join("")}</ul>
        </div>` : ""}

        <div class="modal-article">${body.map(p => `<p>${p}</p>`).join("")}</div>

        <div class="modal-tags">${tags.map(t => `<span>#${t}</span>`).join("")}</div>

        <div class="modal-related">
          <h4>相关阅读</h4>
          ${related.map(r => `
            <div class="related-item" onclick="openArticle(${r.id})">
              <img src="${r.cover}" alt="${r.title}" loading="lazy" />
              <div>
                <div class="related-cat">${r.category}</div>
                <div class="related-title">${r.title}</div>
                <div class="related-time">${r.source} · ${r.time}</div>
              </div>
            </div>`).join("")}
        </div>
      </div>
    </div>`;

  const mask = document.getElementById("articleModal");
  mask.hidden = false;
  document.body.classList.add("modal-open");
  mask.querySelector(".modal-panel").scrollTop = 0;
}

function closeArticle() {
  const mask = document.getElementById("articleModal");
  mask.hidden = true;
  mask.innerHTML = "";
  document.body.classList.remove("modal-open");
}

/* ---------- 分享 ---------- */
function articleUrl(id) {
  return `${location.origin}${location.pathname}#news-${id}`;
}

function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => t.classList.remove("show"), 2200);
}

async function copyArticleLink(id) {
  const url = articleUrl(id);
  try {
    await navigator.clipboard.writeText(url);
    showToast("链接已复制到剪贴板");
  } catch {
    showToast("复制失败，请手动复制：" + url);
  }
}

function shareTo(platform, id) {
  const n = NEWS.find(x => x.id === id);
  if (!n) return;
  const url = articleUrl(id);

  if (platform === "system") {
    navigator.share({ title: n.title, text: n.desc, url }).catch(() => {});
    return;
  }

  const target = {
    x: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`【NEURAL·时报】${n.title}`)}`,
  }[platform];

  if (target) window.open(target, "_blank", "noopener,width=640,height=540");
}

function bindEvents() {
  // 搜索
  document.getElementById("searchInput").addEventListener("input", renderGrid);

  // 排行榜排序 / 筛选
  document.querySelectorAll(".lb-seg").forEach(btn => {
    btn.addEventListener("click", () => {
      lbSort = btn.dataset.sort;
      document.querySelectorAll(".lb-seg")
        .forEach(b => b.classList.toggle("active", b === btn));
      renderLeaderboard();
    });
  });
  document.getElementById("lbOssBtn").addEventListener("click", e => {
    lbOssOnly = !lbOssOnly;
    e.currentTarget.classList.toggle("active", lbOssOnly);
    e.currentTarget.setAttribute("aria-pressed", String(lbOssOnly));
    renderLeaderboard();
  });

  // 详情弹窗：点击遮罩 / Esc 关闭
  document.getElementById("articleModal").addEventListener("click", e => {
    if (e.target.id === "articleModal") closeArticle();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeArticle();
  });

  // 头部滚动阴影 + 回到顶部
  const header = document.getElementById("siteHeader");
  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", scrollY > 10);
    backTop.classList.toggle("show", scrollY > 500);
  }, { passive: true });
  backTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  // 移动端菜单
  document.getElementById("menuToggle").addEventListener("click", () =>
    document.getElementById("mainNav").classList.toggle("open"));

  // 订阅表单
  document.getElementById("newsletterForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("emailInput").value.trim();
    document.getElementById("newsletterMsg").textContent = `已订阅成功！每日简报将发送至 ${email}`;
    e.target.reset();
  });

  // 关键词点击 → 搜索
  document.getElementById("tagCloud").addEventListener("click", e => {
    if (e.target.tagName !== "SPAN") return;
    const input = document.getElementById("searchInput");
    input.value = e.target.textContent;
    renderGrid();
    document.getElementById("latest").scrollIntoView({ behavior: "smooth" });
  });
}

/* ---------- 启动 ---------- */
renderHero();
renderTicker();
renderTabs();
renderGrid();
renderSidebar();
renderLeaderboard();
bindEvents();
