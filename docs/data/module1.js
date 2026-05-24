window.CHEM_M1 = [
  {
    id: "chem-m1-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "用双线桥法表示反应 2KMnO₄ + 16HCl(浓) → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O 的电子转移" },
      { type: "contextual", text: "某反应中KMnO₄与浓盐酸反应制取Cl₂，请标出该反应中电子转移的方向和数目" }
    ],
    back: "2KMnO₄ + 16HCl(浓) → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O\n双线桥：Mn从+7→+2，得5e⁻×2=10e⁻；Cl从-1→0，失1e⁻×10=10e⁻",
    keywords: ["2KMnO₄", "16HCl", "5Cl₂", "10e⁻", "+7→+2", "-1→0"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "电子转移数算错", explanation: "KMnO₄中Mn从+7降到+2，得5e⁻；2个KMnO₄共得10e⁻" },
      { mistake: "忘记标注方向箭头", explanation: "双线桥必须从反应物指向生成物同一元素，箭头方向代表电子转移" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氧化还原", "双线桥", "配平"]
  },
  {
    id: "chem-m1-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "列举5种常见氧化剂及其对应的还原产物" },
      { type: "reverse", text: "哪些物质可以作为氧化剂？它们被还原后分别生成什么？" }
    ],
    back: "常见氧化剂及还原产物：\n① KMnO₄(酸性)→Mn²⁺ ② K₂Cr₂O₇→Cr³⁺ ③ 浓H₂SO₄→SO₂ ④ HNO₃(浓)→NO₂ ⑤ HNO₃(稀)→NO ⑥ H₂O₂→H₂O ⑦ Cl₂→Cl⁻ ⑧ Fe³⁺→Fe²⁺",
    keywords: ["KMnO₄→Mn²⁺", "浓H₂SO₄→SO₂", "HNO₃→NO₂", "H₂O₂→H₂O", "Cl₂→Cl⁻"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "把浓H₂SO₄的还原产物写成SO₃", explanation: "浓H₂SO₄作氧化剂时自身被还原为SO₂，不是SO₃" },
      { mistake: "忘记区分浓稀硝酸", explanation: "浓硝酸被还原为NO₂，稀硝酸被还原为NO" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氧化剂", "还原产物", "氧化还原"]
  },
  {
    id: "chem-m1-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "写出离子方程式书写的四步规则" },
      { type: "contextual", text: "在书写CaCO₃与盐酸反应的离子方程式时，哪些物质要拆成离子？哪些不能拆？" }
    ],
    back: "离子方程式书写规则：\n① 写：写出化学方程式\n② 拆：将可溶性强电解质拆成离子，难溶物、弱电解质、气体、单质、氧化物不拆\n③ 删：删去两边相同离子\n④ 查：检查原子守恒、电荷守恒\n\n示例：CaCO₃+2HCl→CaCl₂+H₂O+CO₂↑\n离子式：CaCO₃+2H⁺→Ca²⁺+H₂O+CO₂↑",
    keywords: ["写", "拆", "删", "查", "原子守恒", "电荷守恒"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "把CaCO₃拆成离子", explanation: "CaCO₃难溶于水，不能拆，保留化学式" },
      { mistake: "忘记电荷守恒检查", explanation: "离子方程式两边电荷总数必须相等" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["离子方程式", "拆分规则"]
  },
  {
    id: "chem-m1-d1-004",
    subject: "chemistry",
    depth: 1,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "离子共存的判断条件有哪些？列出所有不能大量共存的情况" },
      { type: "compare", text: "Fe³⁺和SCN⁻为什么不能大量共存？Fe²⁺和OH⁻能共存吗？" }
    ],
    back: "离子不能大量共存的条件：\n① 生成沉淀：如Ag⁺+Cl⁻→AgCl↓\n② 生成气体：如H⁺+CO₃²⁻→H₂O+CO₂↑\n③ 生成弱电解质：如H⁺+CH₃COO⁻→CH₃COOH\n④ 发生氧化还原：如Fe³⁺+I⁻→Fe²⁺+I₂\n⑤ 发生络合：如Fe³⁺+3SCN⁻→Fe(SCN)₃\n⑥ 双水解：如Al³⁺+3HCO₃⁻→Al(OH)₃↓+3CO₂↑",
    keywords: ["沉淀", "气体", "弱电解质", "氧化还原", "络合", "双水解"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "忽略Fe³⁺与I⁻的氧化还原反应", explanation: "Fe³⁺具有较强氧化性，I⁻有较强还原性，两者发生氧化还原" },
      { mistake: "遗漏双水解反应", explanation: "Al³⁺与HCO₃⁻、CO₃²⁻等发生彻底双水解" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["离子共存", "离子反应"]
  },
  {
    id: "chem-m1-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "根据已知反应：① Cl₂+2Fe²⁺→2Cl⁻+2Fe³⁺ ② Cl₂+2Br⁻→2Cl⁻+Br₂ ③ Br₂+2Fe²⁺→2Br⁻+2Fe³⁺，推断氧化性：Cl₂、Br₂、Fe³⁺由强到弱的顺序" },
      { type: "contextual", text: "某溶液中同时含有Fe²⁺和Br⁻，通入Cl₂后哪个先被氧化？说明理由" }
    ],
    back: "氧化性传递链：Cl₂ > Br₂ > Fe³⁺\n推理：由①得Cl₂氧化Fe²⁺→Fe³⁺，Cl₂氧化性>Fe³⁺；由③得Br₂氧化Fe²⁺→Fe³⁺，Br₂氧化性<Cl₂（因为Cl₂先氧化Fe²⁺还是Br⁻取决于氧化性顺序）\n通Cl₂入含Fe²⁺和Br⁻的溶液：Fe²⁺先被氧化（因为还原性Fe²⁺>Br⁻）",
    keywords: ["Cl₂ > Br₂ > Fe³⁺", "Fe²⁺先被氧化", "还原性 Fe²⁺ > Br⁻"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为Br⁻先被氧化", explanation: "Fe²⁺的还原性比Br⁻强，所以Cl₂先氧化Fe²⁺" }
    ],
    sourceNode: "Cl₂",
    targetNode: "Fe³⁺",
    bridgeNodes: ["Br₂", "Fe²⁺", "Br⁻"],
    relationType: "氧化性传递链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氧化性比较", "传递链"]
  },
  {
    id: "chem-m1-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "氧化还原与离子反应",
    cues: [
      { type: "direct", text: "某溶液中含有Na⁺、Mg²⁺、Cl⁻、SO₄²⁻四种离子，设计实验方案依次检验Mg²⁺、Cl⁻、SO₄²⁻，写出操作步骤和离子方程式" },
      { type: "reverse", text: "如何从含Ag⁺、Ba²⁺、Na⁺的混合溶液中逐一除去Ag⁺和Ba²⁺？写出相关离子方程式" }
    ],
    back: "检验逻辑链：\n① 先加过量NaOH检验Mg²⁺：Mg²⁺+2OH⁻→Mg(OH)₂↓白色沉淀\n② 取上清液加过量Ba(NO₃)₂检验SO₄²⁻：Ba²⁺+SO₄²⁻→BaSO₄↓白色\n③ 取上清液加AgNO₃检验Cl⁻：Ag⁺+Cl⁻→AgCl↓白色\n\n顺序不能错：先加AgNO₃会同时与Cl⁻和SO₄²⁻反应（Ag₂SO₄微溶干扰）",
    keywords: ["先Mg²⁺", "再SO₄²⁻", "后Cl⁻", "Mg(OH)₂", "BaSO₄", "AgCl"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "先检验Cl⁻再检验SO₄²⁻", explanation: "AgCl和Ag₂SO₄都可能沉淀，干扰SO₄²⁻检验，必须先除去SO₄²⁻再加AgNO₃" }
    ],
    sourceNode: "未知溶液",
    targetNode: "离子鉴定结论",
    bridgeNodes: ["Mg(OH)₂↓", "BaSO₄↓", "AgCl↓", "检验顺序"],
    relationType: "检验逻辑链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReport: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["离子检验", "方案设计"]
  },
  {
    id: "chem-m1-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "氧化还原与离子反应",
    question: "配平下列氧化还原方程式，并标出电子转移：\n___KMnO₄ + ___H₂C₂O₄ + ___H₂SO₄ → ___MnSO₄ + ___K₂SO₄ + ___CO₂↑ + ___H₂O",
    solution: "2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂↑ + 8H₂O\nMn: +7→+2, 得5e⁻×2=10e⁻\nC: +3→+4, 失1e⁻×10=10e⁻",
    schema: "半反应配平法（酸性条件）",
    keySteps: [
      { step: "Mn在反应前后的化合价变化是？", options: ["+7→+2，得电子", "+7→+6，失电子", "+2→+7，失电子", "+7→+4，得电子"], correctIndex: 0 },
      { step: "C在H₂C₂O₄中的化合价是？", options: ["+2", "+3", "+4", "0"], correctIndex: 1 }
    ],
    cues: [{ type: "direct", text: "配平KMnO₄与H₂C₂O₄在酸性条件下的反应" }],
    back: "2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ → 2MnSO₄ + K₂SO₄ + 10CO₂↑ + 8H₂O",
    keywords: ["2KMnO₄", "5H₂C₂O₄", "10CO₂", "8H₂O"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "H₂O的系数算错", explanation: "检查H守恒：左边H₂C₂O₄含10H，H₂SO₄含6H，共16H，右边H₂O应配8" },
      { mistake: "忘记K₂SO₄的系数", explanation: "左边2K，右边K₂SO₄和MnSO₄中，K₂SO₄系数应为1" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氧化还原配平", "半反应法"]
  }
];
