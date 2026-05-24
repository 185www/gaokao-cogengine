window.CHEM_M4 = [
  {
    id: "chem-m4-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "有机化学",
    cues: [
      { type: "direct", text: "写出乙烯与下列试剂的反应方程式：① Br₂的CCl₄溶液 ② H₂O（催化剂） ③ H₂（催化剂）" },
      { type: "contextual", text: "某无色气体通入溴水中使溴水褪色，该气体分子量28，写出该气体与Br₂反应及与H₂O加成的化学方程式" }
    ],
    back: "CH₂=CH₂ + Br₂ → CH₂BrCH₂Br（1,2-二溴乙烷，溴水褪色）\nCH₂=CH₂ + H₂O →催化剂→ CH₃CH₂OH（乙醇，工业制乙醇）\nCH₂=CH₂ + H₂ →催化剂→ CH₃CH₃（乙烷）\n\n乙烯使溴水褪色是加成反应，使KMnO₄褪色是氧化反应",
    keywords: ["CH₂=CH₂+Br₂→CH₂BrCH₂Br", "CH₂=CH₂+H₂O→CH₃CH₂OH", "CH₂=CH₂+H₂→CH₃CH₃"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "乙烯与Br₂反应写成了取代反应", explanation: "乙烯含C=C双键，与Br₂发生的是加成反应，不是取代" },
      { mistake: "乙烯水化制乙醇的条件漏写催化剂", explanation: "乙烯与水在常温下不反应，需催化剂（如H₃PO₄/硅藻土）和高温高压" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["乙烯", "加成反应", "烯烃"]
  },
  {
    id: "chem-m4-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "有机化学",
    cues: [
      { type: "direct", text: "写出苯的三种典型反应（溴代、硝化、加氢）的化学方程式" },
      { type: "contextual", text: "某无色液体能使溴水褪色但不与Br₂的CCl₄溶液反应，该液体可能是苯吗？写出苯与Br₂在催化剂作用下的反应" }
    ],
    back: "苯的三种典型反应：\n① 溴代：C₆H₆ + Br₂ →FeBr₃→ C₆H₅Br + HBr（取代反应）\n② 硝化：C₆H₆ + HNO₃ →浓H₂SO₄△→ C₆H₅NO₂ + H₂O（取代反应）\n③ 加氢：C₆H₆ + 3H₂ →催化剂△→ C₆H₁₂（环己烷，加成反应）\n\n苯能使溴水褪色（萃取使水层无色）但不与Br₂的CCl₄溶液反应（苯环不含典型C=C）",
    keywords: ["C₆H₆+Br₂→C₆H₅Br+HBr", "C₆H₆+HNO₃→C₆H₅NO₂+H₂O", "C₆H₆+3H₂→C₆H₁₂"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "苯的溴代写成苯与HBr反应", explanation: "苯与Br₂在FeBr₃催化下反应生成溴苯和HBr，溴原子取代H原子" },
      { mistake: "认为苯的溴代和乙烯一样使溴水褪色", explanation: "苯能萃取Br₂使水层褪色，但苯与Br₂的CCl₄溶液不反应" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["苯", "取代反应", "加成反应"]
  },
  {
    id: "chem-m4-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "有机化学",
    cues: [
      { type: "direct", text: "写出酯化反应的原理和化学方程式（以乙酸和乙醇为例）" },
      { type: "reverse", text: "分子式为C₄H₈O₂的酯可能由哪些酸和醇酯化生成？写出其中乙酸乙酯的合成反应" }
    ],
    back: "酯化反应：酸脱羟基醇脱氢\nCH₃COOH + C₂H₅OH ⇌浓H₂SO₄△⇌ CH₃COOC₂H₅ + H₂O（乙酸乙酯）\n\n条件：浓H₂SO₄作催化剂和吸水剂，加热\n反应类型：取代反应（也是酯化反应）\n可逆反应：酯化反应是可逆的",
    keywords: ["CH₃COOH+C₂H₅OH→CH₃COOC₂H₅+H₂O", "酸脱羟基醇脱氢", "浓H₂SO₄", "可逆"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "酯化反应写酸脱氢醇脱羟基", explanation: "正确是酸脱羟基（-OH），醇脱氢（-H）" },
      { mistake: "忘记可逆符号", explanation: "酯化反应是可逆反应，必须使用可逆符号⇌" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["酯化反应", "羧酸", "醇"]
  },
  {
    id: "chem-m4-d1-004",
    subject: "chemistry",
    depth: 1,
    module: "有机化学",
    cues: [
      { type: "direct", text: "写出同分异构体的定义，并列出C₄H₁₀的所有同分异构体结构简式" },
      { type: "contextual", text: "分子式为C₄H₁₀O的醇有多少种同分异构体？写出它们的结构简式" }
    ],
    back: "同分异构体：分子式相同、结构不同的化合物\n\nC₄H₁₀的两种同分异构体：\n① CH₃CH₂CH₂CH₃（正丁烷）\n② CH₃CH(CH₃)CH₃（异丁烷）\n\nC₄H₁₀O的醇有4种：\n① CH₃CH₂CH₂CH₂OH（1-丁醇）\n② CH₃CH₂CH(OH)CH₃（2-丁醇）\n③ CH₃CH(CH₃)CH₂OH（2-甲基-1-丙醇）\n④ CH₃C(OH)(CH₃)CH₃（2-甲基-2-丙醇）",
    keywords: ["分子式相同结构不同", "正丁烷CH₃CH₂CH₂CH₃", "异丁烷CH₃CH(CH₃)₂", "4种丁醇"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "同分异构体与同系物混淆", explanation: "同分异构体分子式相同，同系物相差一个或多个CH₂" },
      { mistake: "漏写2-甲基-2-丙醇（叔丁醇）", explanation: "C₄H₁₀O的醇有4种，包括三级醇" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["同分异构体", "烷烃", "醇"]
  },
  {
    id: "chem-m4-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "有机化学",
    cues: [
      { type: "direct", text: "写出乙烯→乙醇→乙醛→乙酸→乙酸乙酯的完整转化路线及条件" },
      { type: "contextual", text: "以乙烯为原料合成乙酸乙酯，设计合成路线并写出各步方程式" }
    ],
    back: "转化路线：\n① CH₂=CH₂ + H₂O →催化剂△→ CH₃CH₂OH（乙烯水化）\n② CH₃CH₂OH + CuO →△→ CH₃CHO + Cu + H₂O 或 2CH₃CH₂OH+O₂→Cu△→2CH₃CHO+2H₂O\n③ CH₃CHO + 2Cu(OH)₂ →△→ CH₃COOH + Cu₂O↓ + 2H₂O 或 2CH₃CHO+O₂→催化剂→2CH₃COOH\n④ CH₃COOH + CH₃CH₂OH ⇌浓H₂SO₄△⇌ CH₃COOC₂H₅ + H₂O",
    keywords: ["乙烯→乙醇→乙醛→乙酸→乙酸乙酯", "水化", "催化氧化", "酯化"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "乙醇氧化为乙醛的条件写成KMnO₄", explanation: "乙醇氧化为乙醛常用Cu/O₂催化氧化，KMnO₄会将乙醇直接氧化为乙酸" },
      { mistake: "乙醛氧化为乙酸的条件漏写", explanation: "乙醛可用银氨溶液或新制Cu(OH)₂氧化为乙酸" }
    ],
    sourceNode: "乙烯",
    targetNode: "乙酸乙酯",
    bridgeNodes: ["乙醇", "乙醛", "乙酸"],
    relationType: "羟醛酸酯转化链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["转化链", "烃的衍生物"]
  },
  {
    id: "chem-m4-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "有机化学",
    cues: [
      { type: "direct", text: "卤代烃在有机合成中起什么桥梁作用？写出氯乙烷通过消去和水解反应转化为其他物质的方程式" },
      { type: "reverse", text: "如何从溴乙烷制备乙二醇（HOCH₂CH₂OH）？写出合成路线" }
    ],
    back: "卤代烃的桥梁作用：\n① 消去（NaOH/醇/△）→生成烯烃\n② 水解（NaOH/H₂O/△）→生成醇\n\nCH₃CH₂Cl + NaOH →醇△→ CH₂=CH₂ + NaCl + H₂O\nCH₃CH₂Cl + NaOH →H₂O△→ CH₃CH₂OH + NaCl\n\n从溴乙烷制备乙二醇：\nCH₃CH₂Br →NaOH/醇△→ CH₂=CH₂ →Br₂→ CH₂BrCH₂Br →NaOH/H₂O△→ HOCH₂CH₂OH",
    keywords: ["消去生成烯烃", "水解生成醇", "卤代烃桥梁", "NaOH/醇", "NaOH/H₂O"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "消去反应条件和水解反应混淆", explanation: "消去用NaOH醇溶液加热，水解用NaOH水溶液加热" },
      { mistake: "从溴乙烷制乙二醇路线跳步骤", explanation: "先消去得乙烯，再加Br₂得二溴乙烷，再水解得乙二醇" }
    ],
    sourceNode: "卤代烃",
    targetNode: "烯烃/醇",
    bridgeNodes: ["NaOH/醇消去", "NaOH/H₂O水解"],
    relationType: "卤代烃桥梁作用",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["卤代烃", "消去", "水解"]
  },
  {
    id: "chem-m4-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "有机化学",
    question: "有机物A的分子式为C₄H₈O₂。A在稀H₂SO₄中加热水解生成B和C。B能发生银镜反应，C能使紫色石蕊变红。\n① 推断A、B、C的结构简式\n② 写出A→B+C的水解方程式\n③ B发生银镜反应的化学方程式",
    solution: "① 推理：A为酯（C₄H₈O₂），水解得B（能银镜→含-CHO）和C（使石蕊变红→羧酸）\nB可能为甲酸（HCOOH，能银镜）或其它含醛基物质\nC含两个碳以上羧酸\n\nA可能的酯为HCOOCH₂CH₂CH₃（甲酸丙酯）或HCOOCH(CH₃)₂（甲酸异丙酯）\n或CH₃COOCH₂CH₃（乙酸乙酯）→水解得乙醇（不能银镜）和乙酸→排除\n所以B是HCOOH（甲酸），C是CH₃CH₂CH₂OH（丙醇）或CH₃CH(OH)CH₃（异丙醇）\n\n更可能是：HCOOCH₂CH₂CH₃\nA：HCOOCH₂CH₂CH₃（甲酸丙酯）\nB：HCOOH（甲酸）\nC：CH₃CH₂CH₂OH（丙醇）\n\n② HCOOCH₂CH₂CH₃ + H₂O →H⁺△→ HCOOH + CH₃CH₂CH₂OH\n③ HCOOH + 2Ag(NH₃)₂OH →△→ (NH₄)₂CO₃ + 2Ag↓ + 2NH₃ + H₂O",
    schema: "有机推断（基于性质逆推结构）",
    keySteps: [
      { step: "A的分子式C₄H₈O₂，在稀H₂SO₄中水解，说明A属于哪类物质？", options: ["羧酸", "醇", "酯", "醛"], correctIndex: 2 },
      { step: "B能发生银镜反应，说明B含有什么官能团？", options: ["-COOH", "-CHO", "-OH", "-COO-"], correctIndex: 1 },
      { step: "C能使紫色石蕊变红，说明C是？", options: ["醛", "羧酸", "醇", "酯"], correctIndex: 1 }
    ],
    cues: [{ type: "direct", text: "根据分子式和水解产物性质推断酯的结构" }],
    back: "A：HCOOCH₂CH₂CH₃（甲酸丙酯）\nB：HCOOH（甲酸）\nC：CH₃CH₂CH₂OH（丙醇）",
    keywords: ["HCOOCH₂CH₂CH₃", "HCOOH", "CH₃CH₂CH₂OH", "酯水解"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为C₄H₈O₂一定是乙酸乙酯", explanation: "C₄H₈O₂有同分异构体，如甲酸丙酯、甲酸异丙酯等，需根据水解产物判断" },
      { mistake: "忘记甲酸也能发生银镜反应", explanation: "甲酸结构中含有醛基（-CHO），同样能发生银镜反应" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["有机推断", "酯水解", "银镜反应"]
  }
];
