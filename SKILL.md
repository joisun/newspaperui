# Skill: Agent-Driven 从 0 到 1 落地复杂前端项目

## 适用场景

- 从设计文档（design.md / PRD）出发，构建完整的组件库 / 应用
- 项目涉及多个 package / 多层架构（theme → utils → components → docs）
- 需要达到「生产级」视觉和代码质量
- 单人操作但希望并行推进多个模块

---

## 核心工作流（5 阶段）

```
需求分析 → 技术规划 → 并行实施 → 视觉验证 → 设计复评
   ↑                                              |
   └──── 如果复评 < 目标分 → 回到规划 ────────────┘
```

---

## 阶段 1：需求分析（不写代码）

### 1.1 读蓝本，提炼决策点

读 design.md，列出所有需要用户决策的方向性问题（不超过 4 个）。用 `AskUserQuestion` 一次性收集，避免来回。

**关键决策点模板**：
- 视觉风格基调？（给 2-3 个带 ASCII preview 的选项）
- 核心技术机制？（给 2-3 个方案对比）
- 交付物范围？（MVP vs 完整版）
- 现有代码处理？（保留 / 重写 / 增量）

### 1.2 派发探索 Agent（只读）

并行派 2 个 Explore agent：
- Agent A：探索现有代码结构、工具链版本、可复用的好东西
- Agent B：做领域调研（视觉系统 / 技术方案 / 竞品参考）

**产出**：结构化报告（缺口矩阵 + 可复用清单 + 调研结论）

---

## 阶段 2：技术规划（Plan Mode）

### 2.1 进入 Plan Mode

用 `EnterPlanMode`，基于阶段 1 的探索结果写 plan 文件。

### 2.2 Plan 文件结构

```markdown
# 项目名 重做/新建 计划

## Context（为什么做、做什么、预期结果）

## 范围与边界（保留什么 / 重写什么 / 不做什么）

## 1-N. 各 Package 详细设计
  - 文件清单
  - 关键代码模板（不是伪代码，是可直接落地的 TSX）
  - 依赖关系

## 实施顺序（Stage 1 → N，标注串行/并行）

## 验证方案（自动化 + 视觉清单）

## 风险与权衡
```

### 2.3 关键原则

- **Plan 里写真实代码模板**，不写「大概这样做」。Agent 执行时直接复制粘贴，减少发挥空间
- **标注依赖关系**：哪些 Stage 可并行、哪些必须串行
- **验证清单要具体**：不写「检查样式是否正确」，写「Headline fontSize ≥ 48px, fontWeight === 600」

---

## 阶段 3：并行实施

### 3.1 任务拆分

用 `TaskCreate` 按 Stage 建任务，用 `addBlockedBy` 标注依赖：

```
Stage 1 (基础设施) ← 无依赖，先做
Stage 2 (组件层)  ← blocked by Stage 1
Stage 3 (Demo)    ← blocked by Stage 2
Stage 4 (文档)    ← blocked by Stage 2（可与 Stage 3 并行）
Stage 5 (验证)    ← blocked by Stage 3 + 4
```

### 3.2 Agent 派发策略

| 场景 | 做法 |
|---|---|
| 有依赖的 Stage | 串行：等前一个 Agent 完成再派下一个 |
| 无依赖的 Stage | 并行：同一条消息里派多个 Agent |
| Agent 需要协调 | 用 `SendMessage` 通知另一个 Agent 上游已就绪 |

### 3.3 Agent Prompt 黄金模板

```
你需要在 [路径] 实现 [什么]。

## 上游依赖（已就绪）
[列出可 import 的模块和 API]

## 任务
### 1. [具体文件] — [完整代码]
### 2. [具体文件] — [完整代码]
...

## 验证步骤
[具体命令 + 期望输出]

## 约束
- 严格按上面代码写，不要发挥
- 不引入新依赖
- 完成后直接报告，不要询问
```

**关键**：给 Agent 的 prompt 越具体、代码越完整，产出质量越高。不要给 Agent 留设计决策空间。

### 3.4 每个 Stage 完成后

- 跑 `pnpm build` + `pnpm test` 确认不破坏
- 标记 TaskUpdate status=completed
- 解锁下游 Stage

---

## 阶段 4：视觉验证

### 4.1 自动化验证

```bash
pnpm build          # 全包构建
pnpm test           # 全测试通过
pnpm dev            # 启动 dev server
```

### 4.2 Playwright DOM 实测

不依赖截图肉眼判断，用 `browser_evaluate` 直接读 computed style：

```javascript
// 验证字体、字号、颜色、布局属性
const cs = getComputedStyle(element);
return {
  fontFamily: cs.fontFamily,
  fontSize: cs.fontSize,
  fontWeight: cs.fontWeight,
  columnCount: cs.columnCount,
  backgroundColor: cs.backgroundColor,
};
```

### 4.3 视觉验收清单

提前在 Plan 里写好 10-15 项具体的验收条件，每项都是可自动化检测的：

```
- [ ] Masthead fontFamily 包含 "Cormorant Garamond"
- [ ] Headline fontSize >= 48px
- [ ] BodyText columnCount === "3"
- [ ] body backgroundColor === "rgb(247, 244, 237)"
```

---

## 阶段 5：设计复评

### 5.1 派发 UI Designer Agent

给 Designer Agent：
- 截图路径
- 关键文件路径
- 第一次评估结果（如果是迭代）
- 明确的评分维度和输出格式

### 5.2 目标分数

- 首次实现目标：≥ 8/10
- 迭代后目标：≥ 9/10
- 如果 < 目标分，回到阶段 2 重新规划问题区域

---

## 反模式（避免）

| 反模式 | 正确做法 |
|---|---|
| 给 Agent 模糊指令「实现组件库」 | 给完整代码模板 + 文件路径 |
| 一个 Agent 做所有事 | 按 Stage 拆分，每个 Agent 职责单一 |
| 先写代码再想设计 | Plan Mode 先对齐，用户批准再动手 |
| 只跑 build 就算完成 | Playwright 实测 computed style |
| 截图肉眼看「差不多」 | 量化验收清单（字号/颜色/布局属性） |
| 一次性全部并行 | 按依赖关系分层，基础设施必须先完成 |
| Agent 报错就放弃 | 分析根因，调整 prompt 重试（最多 3 次） |

---

## 时间分配参考

| 阶段 | 占比 | 说明 |
|---|---|---|
| 需求分析 + 探索 | 15% | 磨刀不误砍柴工 |
| 技术规划 | 20% | Plan 越详细，实施越快 |
| 并行实施 | 45% | Agent 并行，人只做协调 |
| 验证 + 复评 | 15% | 量化验收，不靠感觉 |
| 迭代修复 | 5% | 如果规划到位，这步很轻 |

---

## 可复用的 Agent 类型

| Agent 类型 | 用途 |
|---|---|
| Explore | 只读探索代码结构、生成报告 |
| UI Designer | 视觉系统调研、设计复评打分 |
| Frontend Developer | 写代码、跑构建、跑测试 |
| Minimal Change Engineer | 精准修复特定问题，不扩大范围 |

---

## Checklist：启动新项目时

1. [ ] 有 design.md / PRD 蓝本？
2. [ ] 用 AskUserQuestion 收集 3-4 个方向性决策？
3. [ ] 派 Explore agent 做现状分析 + 领域调研？
4. [ ] 进入 Plan Mode 写详细计划（含代码模板）？
5. [ ] 用户批准 plan？
6. [ ] 按依赖关系拆 TaskCreate + addBlockedBy？
7. [ ] Stage 1 基础设施先串行完成？
8. [ ] Stage 2+ 尽量并行派发？
9. [ ] 每个 Stage 完成后跑 build + test？
10. [ ] Playwright 量化验收 10+ 项？
11. [ ] Designer Agent 复评 ≥ 目标分？
12. [ ] 同步 design.md / README？
