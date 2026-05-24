window.CHEM_M3 = [
  {
    id: "chem-m3-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "无机元素化合物",
    cues: [
      { type: "compare", text: "Na₂O与Na₂O₂分别与水反应，写出化学方程式并对比产物差异" },
      { type: "contextual", text: "某淡黄色粉末加入水中产生能使带火星木条复燃的气体，写出该反应方程式" }
    ],
    back: "Na₂O + H₂O → 2NaOH（无气体产生）\n2Na₂O₂ + 2H₂O → 4NaOH + O₂↑（产生氧气）\n\nNa₂O₂为淡黄色固体，Na₂O为白色固体\nNa₂O₂具有强氧化性，可用作供氧剂、漂白剂",
    keywords: ["Na₂O+H₂O→2NaOH", "2Na₂O₂+2H₂O→4NaOH+O₂↑", "淡黄色", "供氧剂"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Na₂O₂的方程式忘记配平", explanation: "2Na₂O₂+2H₂O→4NaOH+O₂↑，检查O守恒：左4O=右4O+2O" },
      { mistake: "Na₂O₂误写成Na₂O", explanation: "Na₂O与水反应不产生O₂，Na₂O₂遇水产生O₂" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["过氧化钠", "氧化钠", "钠的化合物"]
  },
  {
    id: "chem-m3-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "无机元素化合物",
    cues: [
      { type: "direct", text: "写出Al₂O₃和Al(OH)₃分别与HCl和NaOH反应的离子方程式" },
      { type: "reverse", text: "某金属氧化物既能溶于强酸又能溶于强碱，写出该氧化物与酸、碱反应的离子方程式" }
    ],
    back: "Al₂O₃ + 6H⁺ → 2Al³⁺ + 3H₂O\nAl₂O₃ + 2OH⁻ → 2AlO₂⁻ + H₂O\n\nAl(OH)₃ + 3H⁺ → Al³⁺ + 3H₂O\nAl(OH)₃ + OH⁻ → AlO₂⁻ + 2H₂O\n\n两性：既能与酸反应生成盐和水，又能与碱反应生成盐和水的性质",
    keywords: ["Al₂O₃+6H⁺→2Al³⁺+3H₂O", "Al₂O₃+2OH⁻→2AlO₂⁻+H₂O", "Al(OH)₃+3H⁺→Al³⁺+3H₂O", "Al(OH)₃+OH⁻→AlO₂⁻+2H₂O"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Al(OH)₃与碱反应产物写错", explanation: "Al(OH)₃ + OH⁻ → AlO₂⁻ + 2H₂O，不是生成Al³⁺" },
      { mistake: "Al₂O₃是两性氧化物但忘记它也能与碱反应", explanation: "Al₂O₃是两性氧化物，既能溶于酸也能溶于碱" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["铝", "两性", "Al₂O₃", "Al(OH)₃"]
  },
  {
    id: "chem-m3-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "无机元素化合物",
    cues: [
      { type: "direct", text: "写出Fe²⁺与Fe³⁺的三种相互转化方法及离子方程式" },
      { type: "contextual", text: "某实验室用FeCl₂溶液保存不当出现了黄色，如何检验是Fe³⁺？如何将其还原回Fe²⁺？" }
    ],
    back: "Fe²⁺→Fe³⁺（氧化）：\n① 2Fe²⁺+Cl₂→2Fe³⁺+2Cl⁻\n② 2Fe²⁺+H₂O₂+2H⁺→2Fe³⁺+2H₂O\n③ 4Fe²⁺+O₂+4H⁺→4Fe³⁺+2H₂O\n\nFe³⁺→Fe²⁺（还原）：\n① 2Fe³⁺+Fe→3Fe²⁺\n② 2Fe³⁺+Cu→2Fe²⁺+Cu²⁺\n③ 2Fe³⁺+2I⁻→2Fe²⁺+I₂\n\nFe³⁺检验：KSCN溶液变血红色",
    keywords: ["Fe²⁺+Cl₂→Fe³⁺", "2Fe³⁺+Fe→3Fe²⁺", "KSCN血红色", "Fe³⁺+H₂O₂"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Fe³⁺与Fe反应产物是Fe²⁺不是Fe", explanation: "2Fe³⁺+Fe→3Fe²⁺，铁单质被Fe³⁺氧化为Fe²⁺" },
      { mistake: "KSCN检验Fe²⁺无效", explanation: "KSCN只能检验Fe³⁺，Fe²⁺需先氧化为Fe³⁺再用KSCN检验" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["铁", "Fe²⁺", "Fe³⁺", "铁三角"]
  },
  {
    id: "chem-m3-d1-004",
    subject: "chemistry",
    depth: 1,
    module: "无机元素化合物",
    cues: [
      { type: "compare", text: "对比浓硫酸与稀硫酸的化学性质，列出3种以上差异" },
      { type: "direct", text: "写出浓硫酸与铜反应的化学方程式，并说明浓硫酸在此反应中的作用" }
    ],
    back: "浓硫酸 vs 稀硫酸：\n① 浓硫酸有强氧化性（Cu+H₂SO₄浓→△→CuSO₄+SO₂↑+2H₂O），稀硫酸无\n② 浓硫酸有吸水性、脱水性，稀硫酸无\n③ 浓硫酸使铁铝钝化，稀硫酸与铁反应生成H₂\n④ 浓硫酸与金属反应不产生H₂，稀硫酸与活泼金属反应产生H₂\n\nCu + 2H₂SO₄(浓) →△→ CuSO₄ + SO₂↑ + 2H₂O\n浓硫酸既作氧化剂又表现酸性",
    keywords: ["Cu+2H₂SO₄(浓)→CuSO₄+SO₂↑+2H₂O", "强氧化性", "吸水性", "脱水性", "钝化"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "误写Cu与稀硫酸反应", explanation: "Cu在金属活动顺序表中位于H之后，不与稀硫酸反应" },
      { mistake: "浓硫酸与金属反应产物写成H₂", explanation: "浓硫酸作氧化剂，自身被还原为SO₂，不是H₂" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["硫酸", "浓硫酸", "稀硫酸"]
  },
  {
    id: "chem-m3-d1-005",
    subject: "chemistry",
    depth: 1,
    module: "无机元素化合物",
    cues: [
      { type: "direct", text: "写出氯气的实验室制取方法及化学方程式" },
      { type: "contextual", text: "实验室要制取一瓶干燥纯净的Cl₂，写出所需试剂和各装置的作用" }
    ],
    back: "实验室制Cl₂：\nMnO₂ + 4HCl(浓) →△→ MnCl₂ + Cl₂↑ + 2H₂O\n\n装置流程：\n发生→饱和食盐水（除HCl）→浓H₂SO₄（干燥）→向上排空气法收集→NaOH尾气处理\n\nCl₂ + 2NaOH → NaCl + NaClO + H₂O",
    keywords: ["MnO₂+4HCl(浓)→MnCl₂+Cl₂↑+2H₂O", "饱和食盐水除HCl", "浓H₂SO₄干燥", "NaOH尾气处理"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "除HCl用NaOH溶液", explanation: "Cl₂也能与NaOH反应，除HCl应使用饱和食盐水（Cl₂在饱和食盐水中溶解度小）" },
      { mistake: "尾气处理用水吸收", explanation: "Cl₂在水中溶解度不大，必须用NaOH等碱溶液吸收" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氯气", "实验室制取", "气体制备"]
  },
  {
    id: "chem-m3-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "无机元素化合物",
    cues: [
      { type: "direct", text: "写出Na→Na₂O→Na₂O₂→Na₂CO₃→NaHCO₃的转化路线及每一步的化学方程式" },
      { type: "reverse", text: "要实现从Na₂O₂→Na₂CO₃的转化，可以有哪些路径？写出相关方程式" }
    ],
    back: "Na→Na₂O：4Na+O₂→2Na₂O（常温缓慢）\nNa→Na₂O₂：2Na+O₂→点燃→Na₂O₂\nNa₂O₂→Na₂CO₃：2Na₂O₂+2CO₂→2Na₂CO₃+O₂\nNa₂O→NaOH：Na₂O+H₂O→2NaOH\nNaOH+CO₂→Na₂CO₃+H₂O\nNa₂CO₃+CO₂+H₂O→2NaHCO₃\nNaHCO₃→△→Na₂CO₃+CO₂↑+H₂O",
    keywords: ["4Na+O₂→2Na₂O", "2Na+O₂→Na₂O₂", "Na₂O₂+CO₂→Na₂CO₃+O₂", "Na₂CO₃+CO₂+H₂O→2NaHCO₃"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Na在空气中燃烧生成Na₂O", explanation: "Na在空气中燃烧生成Na₂O₂（淡黄色），不是Na₂O（白色）" },
      { mistake: "Na₂CO₃与CO₂反应生成NaHCO₃忘记水", explanation: "必须在水溶液中反应：Na₂CO₃+CO₂+H₂O→2NaHCO₃" }
    ],
    sourceNode: "Na",
    targetNode: "NaHCO₃",
    bridgeNodes: ["Na₂O₂", "Na₂CO₃", "Na₂O", "NaOH"],
    relationType: "钠的转化链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["钠", "转化链"]
  },
  {
    id: "chem-m3-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "无机元素化合物",
    cues: [
      { type: "direct", text: "写出氨的工业合成（哈伯法）→氨催化氧化→NO→NO₂→HNO₃的完整转化链" },
      { type: "contextual", text: "工业上如何以N₂和H₂为原料制备硝酸？写出各步反应方程式及条件" }
    ],
    back: "工业制硝酸流程：\n① N₂+3H₂⇌高温高压催化剂⇌2NH₃（哈伯法）\n② 4NH₃+5O₂→催化剂加热→4NO+6H₂O（氨催化氧化）\n③ 2NO+O₂→2NO₂\n④ 3NO₂+H₂O→2HNO₃+NO（NO循环利用）\n\n总反应：NH₃+2O₂→HNO₃+H₂O",
    keywords: ["N₂+3H₂⇌2NH₃", "4NH₃+5O₂→4NO+6H₂O", "2NO+O₂→2NO₂", "3NO₂+H₂O→2HNO₃+NO"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "氨催化氧化产物直接写NO₂", explanation: "氨催化氧化第一步产物是NO，不是NO₂，NO继续被O₂氧化成NO₂" },
      { mistake: "NO₂与水反应产物漏了NO", explanation: "3NO₂+H₂O→2HNO₃+NO，生成的NO可以循环利用" }
    ],
    sourceNode: "N₂+H₂",
    targetNode: "HNO₃",
    bridgeNodes: ["NH₃", "NO", "NO₂"],
    relationType: "工业制硝酸转化链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氨", "硝酸", "工业制备"]
  },
  {
    id: "chem-m3-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "无机元素化合物",
    question: "某无色溶液A，加入NaOH溶液并加热产生使湿润红色石蕊试纸变蓝的气体B；另取A加入BaCl₂溶液产生白色沉淀C，C不溶于稀盐酸。A焰色反应呈黄色。推断A的化学式，并写出相关反应离子方程式。",
    solution: "推断逻辑：\n① 焰色反应黄色→含Na⁺\n② 加NaOH加热产生使红石蕊变蓝气体→气体B是NH₃→原溶液含NH₄⁺\n③ 加BaCl₂产生不溶于盐酸的白色沉淀→沉淀C是BaSO₄→原溶液含SO₄²⁻\n\n结论：A是NH₄Cl？不对，阴离子是SO₄²⁻，所以A是(NH₄)₂SO₄？但焰色黄说明有Na⁺，所以是Na⁺、NH₄⁺、SO₄²⁻的可能组合。常见答案为Na₂SO₄和NH₄Cl的混合，但更准确的是硫酸铵和钠盐混合。\n\n正确：A中可能含NH₄⁺、Na⁺、SO₄²⁻、Cl⁻等。\n\n离子方程式：\nNH₄⁺+OH⁻→△→NH₃↑+H₂O\nBa²⁺+SO₄²⁻→BaSO₄↓",
    schema: "无机推断（特征现象法）",
    keySteps: [
      { step: "使湿润红色石蕊试纸变蓝的气体是？", options: ["CO₂", "NH₃", "SO₂", "Cl₂"], correctIndex: 1 },
      { step: "不溶于稀盐酸的白色沉淀C是？", options: ["BaCO₃", "BaSO₄", "AgCl", "CaCO₃"], correctIndex: 1 },
      { step: "焰色反应呈黄色说明含有？", options: ["K⁺", "Na⁺", "Cu²⁺", "Ca²⁺"], correctIndex: 1 }
    ],
    cues: [{ type: "direct", text: "根据特征现象推断溶液中含有的离子" }],
    back: "A中含有NH₄⁺、Na⁺、SO₄²⁻。可能的物质组合：(NH₄)₂SO₄与Na₂SO₄混合。\nNH₄⁺+OH⁻→△→NH₃↑+H₂O\nBa²⁺+SO₄²⁻→BaSO₄↓",
    keywords: ["NH₄⁺", "Na⁺", "SO₄²⁻", "NH₃", "BaSO₄"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "看到BaSO₄沉淀只想到SO₄²⁻但忘记排除CO₃²⁻的干扰", explanation: "BaCO₃溶于稀盐酸，BaSO₄不溶，所以沉淀不溶于盐酸说明是BaSO₄" },
      { mistake: "忽略焰色反应对Na⁺的检验", explanation: "焰色反应黄色是Na⁺的特征，说明溶液中一定含Na⁺" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["无机推断", "特征反应"]
  }
];
