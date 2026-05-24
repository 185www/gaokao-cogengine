window.CHEM_M6 = [
  {
    id: "chem-m6-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "物质结构与周期律",
    cues: [
      { type: "direct", text: "叙述同周期、同主族元素原子半径、电离能、电负性的变化规律" },
      { type: "contextual", text: "比较Na、Mg、Al原子半径大小；比较F、Cl、Br的电负性大小" }
    ],
    back: "元素周期律：\n① 同周期从左到右：原子半径↓，电离能↑（有波动），电负性↑，金属性↓，非金属性↑\n② 同主族从上到下：原子半径↑，电离能↓，电负性↓，金属性↑，非金属性↓\n\n具体：\n原子半径：Na>Mg>Al，F<Cl<Br\n电负性：F>Cl>Br，Na<Mg<Al\n第一电离能：Na<Mg>Al（Mg的3s全满更稳定，I₁大于Al）",
    keywords: ["同周期半径↓电离能↑", "同主族半径↑电离能↓", "电负性同周期↑同族↓", "Mg电离能>Al"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为同周期电离能一直增大", explanation: "Mg(3s²)的I₁大于Al(3s²3p¹)，因为全满结构更稳定" },
      { mistake: "电负性和电离能变化趋势混淆", explanation: "电负性同周期增大，同族减小；电离能同周期增大（有波动），同族减小" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["元素周期律", "原子半径", "电离能", "电负性"]
  },
  {
    id: "chem-m6-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "物质结构与周期律",
    cues: [
      { type: "direct", text: "判断下列物质中的化学键类型：NaCl、HCl、NH₃、NH₄Cl、Na₂O₂，并说明判断依据" },
      { type: "compare", text: "NH₃和NH₄Cl中的化学键有什么不同？为什么NH₃是共价化合物而NH₄Cl是离子化合物？" }
    ],
    back: "化学键类型判断：\n① NaCl：离子键（活泼金属+非金属）\n② HCl：共价键（非金属+非金属，极性键）\n③ NH₃：共价键（N-H极性键，分子间有氢键）\n④ NH₄Cl：离子键（NH₄⁺与Cl⁻间）+ 共价键（N-H）+ 配位键\n⑤ Na₂O₂：离子键（Na⁺与O₂²⁻间）+ 共价键（O-O非极性键）\n\n离子化合物含离子键，共价化合物只含共价键",
    keywords: ["NaCl离子键", "HCl共价键极性", "NH₄Cl离子+共价+配位", "Na₂O₂离子+共价"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为NH₄Cl是共价化合物", explanation: "NH₄Cl中NH₄⁺与Cl⁻之间存在离子键，属于离子化合物" },
      { mistake: "Na₂O₂只有离子键", explanation: "Na₂O₂中O-O之间是非极性共价键，既有离子键又有共价键" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["化学键", "离子键", "共价键", "配位键"]
  },
  {
    id: "chem-m6-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "物质结构与周期律",
    cues: [
      { type: "direct", text: "比较四大晶体类型（离子晶体、原子晶体、分子晶体、金属晶体）的构成粒子和熔沸点特征" },
      { type: "contextual", text: "下列物质属于哪种晶体：NaCl、金刚石、干冰、Cu、SiO₂、I₂？按熔沸点从高到低排序" }
    ],
    back: "四大晶体类型：\n① 离子晶体：阴阳离子+离子键，熔沸点较高（NaCl、CaO）\n② 原子晶体：原子+共价键，熔沸点很高（金刚石、SiC、SiO₂）\n③ 分子晶体：分子+分子间力，熔沸点低（干冰、I₂、H₂O）\n④ 金属晶体：阳离子+自由电子+金属键，导电导热（Fe、Cu、Na）\n\n熔沸点排序：金刚石(原子) > SiO₂(原子) > NaCl(离子) > Cu(金属) > I₂(分子) > 干冰(分子)",
    keywords: ["原子晶体最高", "分子晶体最低", "离子晶体较高", "金属晶体导电"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "认为SiO₂属于分子晶体", explanation: "SiO₂是原子晶体（Si-O共价键三维网状结构），不是分子晶体" },
      { mistake: "认为分子晶体熔沸点都低于离子晶体", explanation: "水（分子晶体）因氢键作用熔沸点较高，需具体分析" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["晶体类型", "熔沸点"]
  },
  {
    id: "chem-m6-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "物质结构与周期律",
    cues: [
      { type: "direct", text: "已知某元素的原子序数为17，写出其电子排布式→在周期表中的位置→该元素的性质（金属性/非金属性、最高价氧化物对应水化物酸碱性）" },
      { type: "reverse", text: "某元素位于第3周期VIIA族，写出其电子排布式及其最高价氧化物对应水化物的化学式" }
    ],
    back: "原子序数17→Cl（氯）：\n① 电子排布式：1s²2s²2p⁶3s²3p⁵ 或 [Ne]3s²3p⁵\n② 周期表位置：第3周期第VIIA族\n③ 非金属性强，最高价含氧酸：HClO₄（高氯酸，最强无机酸）\n\n推理链：电子排布→周期=最大电子层数=3，族=价电子数=7→VIIA→非金属→最高价+7→Cl₂O₇对应水化物HClO₄",
    keywords: ["1s²2s²2p⁶3s²3p⁵", "第3周期VIIA族", "HClO₄", "非金属"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Cl的最高价含氧酸写成HClO₃", explanation: "Cl最高正价+7，对应含氧酸为HClO₄（高氯酸），HClO₃是氯酸（+5价）" },
      { mistake: "电子排布式3p⁵写成3p⁶", explanation: "Cl原子序数17，3s²3p⁵价电子共7个" }
    ],
    sourceNode: "原子序数17",
    targetNode: "HClO₄",
    bridgeNodes: ["[Ne]3s²3p⁵", "第3周期VIIA族", "最高正价+7"],
    relationType: "位-构-性推理链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["位构性", "元素周期表"]
  },
  {
    id: "chem-m6-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "物质结构与周期律",
    cues: [
      { type: "direct", text: "写出CO₂、H₂O、NH₃、CH₄四种分子的空间构型、中心原子杂化方式及分子极性" },
      { type: "contextual", text: "根据VSEPR理论和杂化轨道理论，推断BF₃和NF₃的分子构型是否相同？为什么？" }
    ],
    back: "分子构型与杂化：\nCO₂：sp杂化，直线形，非极性\nH₂O：sp³杂化，V形（角形），极性\nNH₃：sp³杂化，三角锥形，极性\nCH₄：sp³杂化，正四面体形，非极性\n\nBF₃ vs NF₃：\nBF₃：sp²杂化，平面三角形，非极性\nNF₃：sp³杂化，三角锥形，极性\n不同，因为B无孤对电子（sp²），N有1对孤对电子（sp³）",
    keywords: ["CO₂sp直线", "H₂Osp³V形", "NH₃sp³三角锥", "CH₄sp³正四面体", "BF₃sp²三角形"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "H₂O和NH₃的孤对电子数算错", explanation: "H₂O中O有2对孤对电子，NH₃中N有1对孤对电子" },
      { mistake: "CO₂是sp杂化写成sp²", explanation: "CO₂中C形成2个σ键+2个π键，sp杂化，键角180°" }
    ],
    sourceNode: "分子式",
    targetNode: "分子极性",
    bridgeNodes: ["VSEPR理论→价层电子对数", "杂化方式", "孤对电子数", "空间构型"],
    relationType: "分子构型推导链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["分子构型", "杂化轨道", "VSEPR"]
  },
  {
    id: "chem-m6-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "物质结构与周期律",
    question: "已知某种离子晶体的晶胞结构为NaCl型，晶胞参数a=564pm。\n① 每个NaCl晶胞中含多少个Na⁺和Cl⁻？\n② 计算Na⁺与Cl⁻之间的最短距离\n③ 若NaCl的摩尔质量为58.5g/mol，计算该晶体的密度（Nₐ=6.02×10²³）",
    solution: "① NaCl晶胞：Cl⁻位于顶点和面心（8×⅛+6×½=4个），Na⁺位于棱心和体心（12×¼+1=4个）\n每个晶胞含4个NaCl\n② Na⁺-Cl⁻最短距离 = a/2 = 564/2 = 282pm\n③ 密度ρ = (4×58.5)/(Nₐ×a³)\n= 234/(6.02×10²³ × (5.64×10⁻¹⁰)³)\n= 234/(6.02×10²³ × 1.80×10⁻²⁸)\n= 234/(1.084×10⁻⁴)\n≈ 2.16 g/cm³",
    schema: "晶胞计算（NaCl型）",
    keySteps: [
      { step: "NaCl晶胞中每个顶点Cl⁻被几个晶胞共用？", options: ["2个", "4个", "6个", "8个"], correctIndex: 3 },
      { step: "Na⁺-Cl⁻最短距离等于？", options: ["a", "a/2", "a/√2", "a√3/2"], correctIndex: 1 }
    ],
    cues: [{ type: "direct", text: "计算NaCl晶体的密度" }],
    back: "① 每个晶胞4个NaCl\n② 最短距离282pm\n③ 密度≈2.16 g/cm³",
    keywords: ["4个NaCl", "282pm", "2.16 g/cm³"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "顶点Cl⁻按1个计算", explanation: "顶点Cl⁻被8个晶胞共用，每个晶胞占⅛" },
      { mistake: "单位换算忘记pm→cm", explanation: "1pm=10⁻¹²m=10⁻¹⁰cm，a=564pm=5.64×10⁻¹⁰m=5.64×10⁻⁸cm" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["晶胞计算", "NaCl", "密度"]
  }
];
