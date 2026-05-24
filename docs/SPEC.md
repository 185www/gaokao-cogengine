# 高考认知引擎 V3 - 技术规格

## 核心科学机制

1. **客观验证 > 主观自评** (Kruger & Dunning, 1999)
2. **线索多样性 > 单一重复** (Smith et al., 1978 编码特异性原理)
3. **过程反馈 > 结果反馈** (Hattie & Timperley, 2007 反馈模型)
4. **渐进交错 > 立即交错** (Rohrer et al., 2015)

## 算法规格

### SM-2 变体（含渐进交错控制）

```
Scheduler.calculateNextReview(srs, result):
  if result == "fail":
    srs.repetitions = 0
    srs.interval = 1
    srs.ease = max(1.3, srs.ease - 0.2)
    srs.interleavingReady = false
  else:
    srs.repetitions += 1
    if srs.repetitions == 1: srs.interval = 1
    elif srs.repetitions == 2: srs.interval = 3; srs.interleavingReady = true
    else: srs.interval = round(srs.interval * srs.ease)
    srs.ease = min(3.0, srs.ease + 0.05)
  srs.nextReview = Date.now() + srs.interval * 86400000
  srs.lastReview = Date.now()
  srs.totalReviews += 1
  if result == "pass": srs.correctCount += 1
  return srs
```

### 待复习队列排序（渐进交错）

- 锁定卡片（interleavingReady=false）：按模块分组排序，同模块内按nextReview升序
- 解锁卡片（interleavingReady=true）：随机打乱

### 线索选择

随机从卡片cues数组中选取，若无cues则返回direct类型。

### 关键词匹配

用户答案与keywords数组逐项比对（去除空格后小写匹配），需匹配≥2/3才算通过。

## 数据结构

卡片字段：id, subject, depth(1/2/3), module, cues[], back, keywords[], matchMode, commonMistakes[], srs{}, tags[]
深度2额外：sourceNode, targetNode, bridgeNodes, relationType
深度3额外：question, solution, schema, keySteps[]
