window.CHEM_M2 = [
  {
    id: "chem-m2-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "写出盖斯定律的内容及其应用方法" },
      { type: "contextual", text: "已知：① C(s)+O₂(g)→CO₂(g) ΔH=-393.5 kJ/mol ② CO(g)+½O₂(g)→CO₂(g) ΔH=-283 kJ/mol，求C(s)+½O₂(g)→CO(g)的ΔH" }
    ],
    back: "盖斯定律：化学反应的反应热只与始态和终态有关，与路径无关。\nΔH₃ = ΔH₁ - ΔH₂ = -393.5 - (-283) = -110.5 kJ/mol\n即 C(s)+½O₂(g)→CO(g) ΔH = -110.5 kJ/mol",
    keywords: ["-110.5", "盖斯定律", "路径无关", "ΔH₁-ΔH₂"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "符号搞反", explanation: "ΔH₃=ΔH₁-ΔH₂，从C+O₂→CO₂减去CO+½O₂→CO₂得到C→CO" },
      { mistake: "忘记ΔH的单位kJ/mol", explanation: "热化学方程式的ΔH必须带单位和正负号" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["盖斯定律", "反应热"]
  },
  {
    id: "chem-m2-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "写出铜锌原电池（H₂SO₄为电解质）的电极反应式和总反应式" },
      { type: "reverse", text: "一个原电池总反应为Zn+Cu²⁺→Zn²⁺+Cu，设计其正负极和电解质" }
    ],
    back: "铜锌原电池（稀H₂SO₄）：\n负极（Zn）：Zn - 2e⁻ → Zn²⁺（氧化反应）\n正极（Cu）：2H⁺ + 2e⁻ → H₂↑（还原反应）\n总反应：Zn + 2H⁺ → Zn²⁺ + H₂↑",
    keywords: ["Zn - 2e⁻ → Zn²⁺", "2H⁺ + 2e⁻ → H₂↑", "Zn + 2H⁺ → Zn²⁺ + H₂↑"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "正负极写反", explanation: "活泼金属Zn作负极失电子，不活泼Cu作正极，H⁺在正极得电子" },
      { mistake: "电子方向写错", explanation: "电子从负极沿导线流向正极，电流方向相反" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["原电池", "电极反应式"]
  },
  {
    id: "chem-m2-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "化学平衡状态的判断标志有哪些？列出至少4个" },
      { type: "compare", text: "对于反应N₂+3H₂⇌2NH₃，为什么混合气体平均分子量不变可以判断平衡，而压强不变在恒容条件下也可以判断平衡？二者等效吗？" }
    ],
    back: "化学平衡判断标志：\n① v正=v逆≠0\n② 各组分的浓度/百分含量不变\n③ 对于反应前后气体分子数不等的反应：总压强不变、平均分子量不变\n④ 对于有颜色的物质参加的反应：颜色不变\n⑤ 绝热体系：温度不变\n\nN₂+3H₂⇌2NH₃：反应前后气体分子数减少(4→2)，恒容下压强减小，压强不变则平衡；平均分子量=总质量/总物质的量，总质量不变，总物质量变化，所以平均分子量不变也说明平衡",
    keywords: ["v正=v逆", "浓度不变", "压强不变", "平均分子量不变"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为任何反应中压强不变都能判断平衡", explanation: "只有反应前后气体分子数不等的反应，压强不变才可作为平衡标志" },
      { mistake: "忽略百分含量不变的含义", explanation: "百分含量不变不等于浓度相等，而是浓度不再随时间变化" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["化学平衡", "平衡标志"]
  },
  {
    id: "chem-m2-d1-004",
    subject: "chemistry",
    depth: 1,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "写出三大守恒定律的表达式（以Na₂CO₃溶液为例）" },
      { type: "contextual", text: "在0.1 mol/L Na₂CO₃溶液中，比较c(Na⁺)、c(CO₃²⁻)、c(HCO₃⁻)、c(H⁺)、c(OH⁻)的大小" }
    ],
    back: "Na₂CO₃溶液三大守恒：\n① 电荷守恒：c(Na⁺)+c(H⁺)=2c(CO₃²⁻)+c(HCO₃⁻)+c(OH⁻)\n② 物料守恒：c(Na⁺)=2[c(CO₃²⁻)+c(HCO₃⁻)+c(H₂CO₃)]\n③ 质子守恒：c(OH⁻)=c(H⁺)+c(HCO₃⁻)+2c(H₂CO₃)\n\n离子浓度大小：c(Na⁺) > c(CO₃²⁻) > c(OH⁻) > c(HCO₃⁻) > c(H⁺)",
    keywords: ["电荷守恒", "物料守恒", "质子守恒", "c(Na⁺) > c(CO₃²⁻)"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "电荷守恒漏了c(H⁺)或系数", explanation: "CO₃²⁻带2个负电荷，前面必须乘系数2" },
      { mistake: "离子浓度排序错误", explanation: "CO₃²⁻水解生成HCO₃⁻和OH⁻，c(OH⁻) > c(HCO₃⁻)" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["三大守恒", "盐类水解"]
  },
  {
    id: "chem-m2-d1-005",
    subject: "chemistry",
    depth: 1,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "写出沉淀溶解平衡中Ksp与Q的关系及其对沉淀生成/溶解的判断" },
      { type: "contextual", text: "向含Ag⁺的溶液中滴加NaCl溶液，当c(Ag⁺)=1×10⁻⁵ mol/L时溶液是否开始沉淀？已知Ksp(AgCl)=1.8×10⁻¹⁰" }
    ],
    back: "Ksp与Q的关系：\n① Q < Ksp：不沉淀或沉淀溶解\n② Q = Ksp：恰好饱和\n③ Q > Ksp：有沉淀析出\n\n计算所需c(Cl⁻)=Ksp/c(Ag⁺)=1.8×10⁻¹⁰/1×10⁻⁵=1.8×10⁻⁵ mol/L\n当c(Cl⁻) > 1.8×10⁻⁵ mol/L时开始沉淀",
    keywords: ["Q < Ksp 不沉淀", "Q > Ksp 沉淀", "Ksp/c(Ag⁺)", "1.8×10⁻⁵"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Ksp和Q的关系记反", explanation: "Q > Ksp时才有沉淀析出，Q < Ksp时溶液未饱和" },
      { mistake: "忘记Ksp是常数", explanation: "Ksp只与温度有关，温度不变Ksp不变" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["沉淀溶解平衡", "Ksp"]
  },
  {
    id: "chem-m2-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "写出从原电池→电解池→电化学防腐的逻辑推理链" },
      { type: "contextual", text: "如何利用原电池原理防护铁质管道？写出牺牲阳极法和外加电流法的原理对比" }
    ],
    back: "电化学逻辑链：\n原电池：自发氧化还原→化学能→电能\n电解池：外加电源→电能→化学能（强制氧化还原）\n电化学防腐：\n① 牺牲阳极法（原电池原理）：用更活泼金属（Zn）作负极被腐蚀，Fe作正极被保护\n② 外加电流法（电解池原理）：Fe作阴极，外加电源负极连接Fe，正极连接惰性电极\n\n对比：牺牲阳极无需电源，但消耗Zn；外加电流需要电源，但保护更彻底",
    keywords: ["牺牲阳极法", "外加电流法", "Fe作正极", "Fe作阴极"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "把牺牲阳极法中Fe当作负极", explanation: "Fe被保护作正极，Zn活泼作负极被腐蚀" },
      { mistake: "外加电流法中Fe接正极", explanation: "Fe作为被保护金属应接电源负极，作阴极" }
    ],
    sourceNode: "原电池原理",
    targetNode: "电化学防腐",
    bridgeNodes: ["牺牲阳极法", "外加电流法", "负极为Zn", "Fe作阴极"],
    relationType: "电化学应用逻辑链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["电化学", "金属防护"]
  },
  {
    id: "chem-m2-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "化学反应原理",
    cues: [
      { type: "direct", text: "对于反应2NO₂⇌N₂O₄ ΔH<0，分析升高温度、增大压强、加入催化剂分别对平衡移动和转化率的影响" },
      { type: "contextual", text: "合成氨反应N₂+3H₂⇌2NH₃ ΔH<0，工业上为什么选择400~500℃高温而不是更低的温度？" }
    ],
    back: "平衡移动推理链：\n2NO₂⇌N₂O₄（ΔH<0，气体分子数减少）：\n① 升温：平衡向吸热方向（逆反应）移动，NO₂转化率↓\n② 增压：平衡向气体分子数减少方向（正反应）移动，NO₂转化率↑\n③ 催化剂：同等改变正逆反应速率，平衡不移动，转化率不变\n\n合成氨选400~500℃：虽然低温有利于平衡正向，但反应速率太慢，工业需兼顾速率和转化率",
    keywords: ["升温逆向", "增压正向", "催化剂不移动", "兼顾速率与转化率"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为升温使所有平衡都向正反应移动", explanation: "升温向吸热方向移动，需根据ΔH符号判断" },
      { mistake: "认为催化剂能提高转化率", explanation: "催化剂只改变反应速率，不改变平衡位置和转化率" }
    ],
    sourceNode: "条件变化",
    targetNode: "转化率变化",
    bridgeNodes: ["ΔH符号判断", "气体分子数变化", "勒夏特列原理"],
    relationType: "平衡移动推理链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["化学平衡", "转化率"]
  },
  {
    id: "chem-m2-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "化学反应原理",
    question: "某温度下，向2L密闭容器中投入1mol N₂和3mol H₂，发生反应N₂+3H₂⇌2NH₃，5min后达到平衡，测得N₂的浓度为0.2mol/L。\n求：① N₂的转化率 ② NH₃的平衡浓度 ③ 该温度下的平衡常数Kc",
    solution: "初始：c(N₂)=0.5mol/L, c(H₂)=1.5mol/L, c(NH₃)=0\nΔc(N₂)=0.5-0.2=0.3mol/L\nN₂ + 3H₂ ⇌ 2NH₃\nΔc: 0.3 0.9 0.6\n平衡: 0.2 0.6 0.6\n① N₂转化率=0.3/0.5×100%=60%\n② c(NH₃)=0.6mol/L\n③ Kc=(0.6)²/(0.2×(0.6)³)=0.36/(0.2×0.216)=0.36/0.0432=8.33",
    schema: "化学平衡三段式计算（始-变-平）",
    keySteps: [
      { step: "N₂的初始浓度是多少？", options: ["1 mol/L", "0.5 mol/L", "0.2 mol/L", "2 mol/L"], correctIndex: 1 },
      { step: "计算平衡常数Kc的表达式是？", options: ["[NH₃]²/([N₂][H₂]³)", "[NH₃]/([N₂][H₂])", "[N₂][H₂]³/[NH₃]²", "[NH₃]²/([N₂]³[H₂])"], correctIndex: 0 }
    ],
    cues: [{ type: "direct", text: "计算合成氨反应的平衡常数Kc：N₂+3H₂⇌2NH₃" }],
    back: "N₂转化率60%，c(NH₃)=0.6mol/L，Kc=8.33",
    keywords: ["60%", "0.6mol/L", "Kc=8.33"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "忘记容器体积换算浓度", explanation: "1mol N₂在2L容器中初始浓度为0.5mol/L，不是1mol/L" },
      { mistake: "Kc表达式写错", explanation: "Kc=[NH₃]²/([N₂][H₂]³)，产物系数作指数，反应物也是" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["平衡常数", "三段式"]
  }
];
