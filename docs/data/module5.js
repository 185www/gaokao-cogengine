window.CHEM_M5 = [
  {
    id: "chem-m5-d1-001",
    subject: "chemistry",
    depth: 1,
    module: "化学实验",
    cues: [
      { type: "direct", text: "写出蒸馏和分液的操作要点及适用场景对比" },
      { type: "contextual", text: "现需分离水和四氯化碳的混合物，应采用什么方法？具体操作步骤是什么？" }
    ],
    back: "蒸馏：适用于沸点差大的液体混合物\n操作要点：加碎瓷片防暴沸、温度计水银球在支管口处、冷凝水下进上出\n分液：适用于互不相溶的液体混合物\n操作要点：下层液体从下端放出，上层液体从上口倒出\n\n水与CCl₄互不相溶→分液法\nCCl₄密度>水，下层为CCl₄，下层从下端放出后，上层水从上口倒出",
    keywords: ["蒸馏沸点差", "分液不相溶", "温度计支管口", "冷凝水下进上出", "下层下端放"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "蒸馏时忘记加碎瓷片", explanation: "碎瓷片防止暴沸，不加会导致液体剧烈沸腾" },
      { mistake: "分液时上层液体也从下端放", explanation: "上层液体从上口倒出，防止污染" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["蒸馏", "分液", "分离提纯"]
  },
  {
    id: "chem-m5-d1-002",
    subject: "chemistry",
    depth: 1,
    module: "化学实验",
    cues: [
      { type: "direct", text: "写出实验室制取氨气NH₃的化学方程式及收集方法" },
      { type: "reverse", text: "实验室要制取一瓶干燥的氨气，写出所用试剂、干燥剂和收集方法" }
    ],
    back: "实验室制NH₃：\n2NH₄Cl + Ca(OH)₂ →△→ 2NH₃↑ + CaCl₂ + 2H₂O\n\n干燥剂：碱石灰（CaO+NaOH混合物），不能用浓H₂SO₄或CaCl₂（NH₃与它们反应）\n收集方法：向下排空气法（NH₃密度<空气）\n验满方法：湿润的红色石蕊试纸放在集气瓶口，变蓝即满\n尾气处理：用水或稀硫酸吸收（防倒吸）",
    keywords: ["2NH₄Cl+Ca(OH)₂→2NH₃↑+CaCl₂+2H₂O", "碱石灰干燥", "向下排空气", "红石蕊变蓝"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "用浓H₂SO₄干燥NH₃", explanation: "NH₃是碱性气体，与浓H₂SO₄反应生成(NH₄)₂SO₄，只能用碱石灰" },
      { mistake: "用向上排空气法收集NH₃", explanation: "NH₃分子量17<空气29，密度小，用向下排空气法" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["氨气", "气体制备", "收集方法"]
  },
  {
    id: "chem-m5-d1-003",
    subject: "chemistry",
    depth: 1,
    module: "化学实验",
    cues: [
      { type: "direct", text: "写出Cl⁻、SO₄²⁻、Fe³⁺的检验方法及对应反应现象" },
      { type: "contextual", text: "某无色溶液可能含Cl⁻和SO₄²⁻，设计检验方案（注意干扰排除）" }
    ],
    back: "离子检验：\n① Cl⁻：加AgNO₃溶液+稀HNO₃，产生白色沉淀（AgCl），不溶于稀硝酸\n② SO₄²⁻：加BaCl₂溶液+稀HCl，产生白色沉淀（BaSO₄），不溶于稀盐酸\n③ Fe³⁺：加KSCN溶液，溶液变血红色\n\nCl⁻和SO₄²⁻共存时的检验顺序：先加过量Ba(NO₃)₂检验SO₄²⁻，取上清液加AgNO₃检验Cl⁻",
    keywords: ["AgNO₃+HNO₃→AgCl↓白", "BaCl₂+HCl→BaSO₄↓白", "KSCN→血红色", "先SO₄²⁻后Cl⁻"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "检验Cl⁻时用稀HCl酸化", explanation: "加稀HCl会引入Cl⁻，干扰检验，应用稀HNO₃酸化" },
      { mistake: "Cl⁻和SO₄²⁻同时检验时不考虑干扰", explanation: "Ag₂SO₄是微溶物，可能干扰，应先除SO₄²⁻再检验Cl⁻" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["离子检验", "鉴别", "Cl⁻", "SO₄²⁻", "Fe³⁺"]
  },
  {
    id: "chem-m5-d1-004",
    subject: "chemistry",
    depth: 1,
    module: "化学实验",
    cues: [
      { type: "direct", text: "列举至少4种常用的实验安全措施（防倒吸、防暴沸、尾气处理等）" },
      { type: "contextual", text: "实验室用浓盐酸和MnO₂制Cl₂，尾气应该如何处理？为什么不能直接排入空气？" }
    ],
    back: "实验安全措施：\n① 防倒吸：倒置漏斗、安全瓶\n② 防暴沸：加碎瓷片或沸石\n③ 尾气处理：有毒气体必须吸收（Cl₂/SO₂用NaOH，CO点燃）\n④ 防爆炸：H₂/CO使用前验纯\n⑤ 防烫伤：拿热仪器用坩埚钳\n\nCl₂尾气处理：用NaOH溶液吸收，Cl₂+2NaOH→NaCl+NaClO+H₂O\nCl₂有毒，直接排空会污染环境",
    keywords: ["防倒吸漏斗", "防暴沸碎瓷片", "尾气处理NaOH", "Cl₂+2NaOH", "验纯"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "Cl₂尾气用水吸收", explanation: "Cl₂在水中溶解度不大，应用NaOH溶液完全吸收" },
      { mistake: "认为H₂不需要验纯", explanation: "H₂与空气混合加热可能爆炸，使用前必须验纯" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["实验安全", "尾气处理", "防倒吸"]
  },
  {
    id: "chem-m5-d2-001",
    subject: "chemistry",
    depth: 2,
    module: "化学实验",
    cues: [
      { type: "direct", text: "写出实验室制备氯气的完整装置流程：发生→净化→干燥→收集→尾气处理，并说明各步所用试剂" },
      { type: "contextual", text: "要制备一瓶干燥纯净的Cl₂，从下列试剂中选择：MnO₂、浓HCl、饱和食盐水、浓H₂SO₄、NaOH、水、CaCl₂" }
    ],
    back: "气体制备完整流程：\n① 发生：MnO₂+4HCl(浓)→△→MnCl₂+Cl₂↑+2H₂O\n② 净化（除HCl）：饱和食盐水（Cl₂在饱和NaCl中溶解度小）\n③ 干燥：浓H₂SO₄（Cl₂不与浓H₂SO₄反应）\n④ 收集：向上排空气法（Cl₂密度>空气）\n⑤ 尾气：NaOH溶液（Cl₂+2NaOH→NaCl+NaClO+H₂O）\n\n选择：MnO₂、浓HCl、饱和食盐水、浓H₂SO₄、NaOH",
    keywords: ["MnO₂+4HCl(浓)→", "饱和食盐水除HCl", "浓H₂SO₄干燥", "向上排空气", "NaOH尾气"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "干燥和除HCl顺序颠倒", explanation: "先除HCl后干燥，否则气体中HCl会消耗干燥剂" },
      { mistake: "用碱石灰干燥Cl₂", explanation: "Cl₂是酸性气体，与碱石灰反应，只能用浓H₂SO₄或CaCl₂" }
    ],
    sourceNode: "MnO₂+浓HCl",
    targetNode: "纯Cl₂",
    bridgeNodes: ["饱和食盐水除HCl", "浓H₂SO₄干燥", "向上排空气收集", "NaOH尾气处理"],
    relationType: "气体制备逻辑链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["气体制备", "Cl₂", "装置流程"]
  },
  {
    id: "chem-m5-d2-002",
    subject: "chemistry",
    depth: 2,
    module: "化学实验",
    cues: [
      { type: "direct", text: "一包固体可能含有NaCl、Na₂SO₄、Na₂CO₃中的一种或几种，设计实验方案确定其成分" },
      { type: "reverse", text: "如何证明某白色固体中同时含有Cl⁻、SO₄²⁻和CO₃²⁻？写出实验步骤" }
    ],
    back: "固体成分检验逻辑链：\n① 取少量溶于水\n② 先加过量Ba(NO₃)₂，有白色沉淀则含SO₄²⁻或CO₃²⁻\n③ 向沉淀中加稀HNO₃，若沉淀部分溶解且产生气泡→含CO₃²⁻，剩余沉淀→BaSO₄\n④ 取滤液加AgNO₃+HNO₃，白色沉淀→含Cl⁻\n\n注意：不能先加AgNO₃，因为Ag₂CO₃、Ag₂SO₄都会干扰",
    keywords: ["先Ba(NO₃)₂", "再加HNO₃", "沉淀部分溶解→CO₃²⁻", "AgNO₃最后", "AgCl↓"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "用HCl酸化时引入了Cl⁻", explanation: "检验Cl⁻时不能用盐酸，应使用HNO₃酸化" },
      { mistake: "不加过量Ba(NO₃)₂直接加AgNO₃", explanation: "Ag₂SO₄微溶、Ag₂CO₃沉淀会干扰Cl⁻检验" }
    ],
    sourceNode: "未知固体",
    targetNode: "组成判定",
    bridgeNodes: ["Ba(NO₃)₂沉淀", "HNO₃溶解检验CO₃²⁻", "AgNO₃检验Cl⁻"],
    relationType: "成分检验逻辑链",
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["物质检验", "实验方案"]
  },
  {
    id: "chem-m5-d3-001",
    subject: "chemistry",
    depth: 3,
    module: "化学实验",
    question: "某实验小组设计如下方案制备Fe(OH)₃胶体：\n向沸腾的蒸馏水中逐滴加入FeCl₃饱和溶液，继续煮沸至液体呈红褐色，停止加热。\n请判断该方案是否合理？如不合理请说明原因并改正。",
    solution: "该方案合理。\n制备Fe(OH)₃胶体的正确方法：\n① 将蒸馏水加热至沸腾\n② 逐滴加入FeCl₃饱和溶液（不能加过量）\n③ 继续煮沸至液体呈红褐色（不能过度加热，否则胶体聚沉）\n\n化学方程式：FeCl₃ + 3H₂O →△→ Fe(OH)₃(胶体) + 3HCl\n\n常见错误方案：将FeCl₃溶液加入NaOH溶液中，这会产生Fe(OH)₃沉淀而不是胶体",
    schema: "实验方案评价（胶体制备）",
    keySteps: [
      { step: "制备Fe(OH)₃胶体应把FeCl₃加入什么溶液中？", options: ["冷水中", "沸水中", "NaOH溶液中", "稀盐酸中"], correctIndex: 1 },
      { step: "Fe(OH)₃胶体是什么颜色？", options: ["白色", "红褐色", "黄色", "蓝色"], correctIndex: 1 },
      { step: "若将FeCl₃溶液加入NaOH溶液中，产物是什么？", options: ["Fe(OH)₃胶体", "Fe₂O₃沉淀", "Fe(OH)₃沉淀", "FeCl₂"], correctIndex: 2 }
    ],
    cues: [{ type: "direct", text: "评价Fe(OH)₃胶体制备方案" }],
    back: "方案合理。FeCl₃饱和溶液滴入沸水中得到Fe(OH)₃胶体（红褐色）。\nFeCl₃+3H₂O→△→Fe(OH)₃(胶体)+3HCl",
    keywords: ["沸水", "FeCl₃饱和溶液", "红褐色", "Fe(OH)₃胶体"],
    matchMode: "contains",
    commonMistakes: [
      { mistake: "误认为FeCl₃加入NaOH也能制胶体", explanation: "FeCl₃+NaOH→Fe(OH)₃↓沉淀，不是胶体" },
      { mistake: "过度加热导致胶体聚沉", explanation: "长时间煮沸会使胶体粒子聚集沉淀" }
    ],
    srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false },
    tags: ["胶体制备", "实验方案评价"]
  }
];
