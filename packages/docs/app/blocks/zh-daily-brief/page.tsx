'use client';
import { Layout, Section, Article } from 'newspaperui';

const cn = { fontFamily: 'var(--font-family-cjk-serif)' };
const cnRed = { color: 'var(--nui-accent-cjk-red)' };
const tnum = { fontVariantNumeric: 'tabular-nums' };

// —— 数据 ——
const NEW_ITEMS = [
  {
    product: 'WebMCP',
    vendor: 'OpenAI',
    source: 'ChatGPT Release Notes',
    title: '网站工具交给 Agent',
    what: 'ChatGPT Work 与 Codex 可在桌面内置浏览器中发现并调用网站通过 WebMCP 提供的工具；浏览器扩展也扩展到 Edge、Brave、Opera 与 Vivaldi。',
    why: '网站可以暴露结构化能力，不必让 Agent 只依赖视觉定位和点击，工具发现与调用路径因此更稳定。',
    who: '构建网页 Agent、网站工具接口或桌面自动化工作流的团队',
    action: '试用',
    actionDetail: '在低风险站点验证工具发现、权限确认与失败回退，再决定是否接入生产流程。',
  },
  {
    product: 'Claude Code 2.1.252',
    vendor: 'Anthropic',
    source: 'Claude Code Changelog',
    title: '清理四个执行卡点',
    what: '修复 macOS Bash 任务输出交换失败、首次保存 always allow 失效、弱网络下 Remote Control 长时间停顿，以及超大失败输出撑爆请求的问题。',
    why: '这些故障都发生在长任务和远程协作的关键路径；修复后可减少任务完成却迟迟不返回、授权无法持久化或会话被异常输出拖垮。',
    who: '使用后台任务、Remote Control、Claude Desktop 或 VS Code 承载 Claude Code 的开发者',
    action: '升级',
    actionDetail: '重点回归后台任务通知、首次授权保存和弱网络下的远程会话。',
  },
];

const MODEL_ITEMS = [
  {
    product: 'Gemini Omni 1.1 Flash',
    vendor: 'Google DeepMind',
    title: '续写视频并输出 4K',
    what: '新版本支持参考先前视频继续扩展、指定首尾帧生成过渡，并提供最高 4K 输出。',
    who: '生成式视频、广告素材与创意自动化开发者',
    action: '试用',
    date: '8.27',
  },
  {
    product: 'GLM-5.3-Flash',
    vendor: 'Z.ai · 智谱',
    title: '开源并开放 API',
    what: '智谱发布 GLM-5.3-Flash，提供官方 API，并开放标准版与 BF16 权重。',
    who: '需要开放权重、多模态能力或成本敏感推理的团队',
    action: '试用',
    date: '8.26',
  },
  {
    product: 'Qwen3.8-Flash-Next',
    vendor: 'Qwen',
    title: '预览 Qwen4 架构',
    what: '多模态 MoE 模型及 FP8 权重，定位为 Qwen4 架构的早期预览。',
    who: '开源模型、长上下文和 coding 场景开发者',
    action: '继续观察',
    date: '8.26',
  },
  {
    product: 'Gemini 3.5 Transcribe',
    vendor: 'Google DeepMind',
    title: '面向实时转写',
    what: '支持流式与非流式 API 的语音转文本模型，覆盖多语言、自定义词汇与说话人识别。',
    who: '语音 Agent、字幕和会议产品开发者',
    action: '试用',
    date: '8.26',
  },
];

const WATCH_ITEMS = [
  {
    product: 'Codex 0.151.0',
    vendor: 'OpenAI',
    title: '把 MCP 结果交给扩展处理',
    what: '稳定版允许扩展检查或替换 MCP tool result，增加可配置的 optional MCP 发现等待期，并修复权限恢复、sandbox 与模型切换中的多项问题。',
    who: '维护 Codex extensions、MCP servers、多 Agent 预算或受限执行环境的团队',
    action: '升级',
  },
  {
    product: 'MHS · MCP Hardware Suite',
    vendor: 'Anthropic',
    title: '把 MCP 延伸到物理设备',
    what: '研究预览用统一 driver 描述设备能力与安全边界，Agent 可通过 MCP、CLI 或 API 发现、读取和控制设备。',
    who: '科学 Agent、实验室自动化、机器人与设备集成团队',
    action: '继续观察',
  },
  {
    product: 'Grok Bot',
    vendor: 'xAI',
    title: '接入 X 社交信号',
    what: '可连接 X 账号，搜索帖子、读取时间线、检查提及；付费用户获得起始 API credits。',
    who: '构建社交研究、品牌监听、社区运营与内容 Agent 的团队',
    action: '试用',
  },
  {
    product: 'Claude Console',
    vendor: 'Anthropic',
    title: '把密钥绑定到账号',
    what: '可创建 personal key 与 service account key，并按 workspace 或管理权限限定作用域；旧 workspace key 保留为 legacy。',
    who: '管理 Claude API 组织权限、workspace 和自动化服务的团队',
    action: '迁移',
  },
];

// —— 组件 ——
function ColLabel({ children, red = false }: { children: string; red?: boolean }) {
  return (
    <div style={{
      ...cn,
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: '0.2em',
      color: red ? 'var(--nui-accent-cjk-red)' : 'var(--nui-text-muted)',
      marginBottom: '0.4rem',
    }}>{children}</div>
  );
}

export default function ZhDailyBrief() {
  return (
    <Layout columns={24} maxWidth="1280px" padding="1.5rem 1rem">
      {/* 报头 */}
      <header style={{
        borderTop: '3px solid var(--nui-text-primary)',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        paddingTop: '1rem',
        paddingBottom: '0.75rem',
      }}>
        <div style={{
          ...cn,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-family-meta)',
              fontSize: '11px',
              color: 'var(--nui-text-muted)',
              letterSpacing: '0.25em',
              marginBottom: '0.4rem',
            }}>AGENT INTELLIGENCE BRIEF</div>
            <h1 style={{
              ...cn,
              fontSize: '56px',
              fontWeight: 900,
              margin: 0,
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: 'var(--nui-text-primary)',
            }}>开发者情报</h1>
          </div>
          <div style={{
            ...cn,
            textAlign: 'right',
            fontSize: '12px',
            color: 'var(--nui-text-secondary)',
            lineHeight: 1.7,
          }}>
            <div style={{ ...tnum }}>2026 年 9 月 1 日 · 星期二</div>
            <div>第 214 期 · 模型与 Agent 版</div>
          </div>
        </div>
      </header>

      {/* 栏目标题条 */}
      <div style={{
        ...cn,
        ...tnum,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 0',
        borderBottom: '1px solid var(--nui-rule-hairline)',
        fontSize: '12px',
        color: 'var(--nui-text-secondary)',
      }}>
        <span>
          今日新增 <strong style={{ color: 'var(--nui-accent-cjk-red)' }}>2</strong> 条
          {' '}· 模型发布留存 4 条 · 持续关注 4 条
        </span>
        <span>全部条目已核证官方来源</span>
      </div>

      {/* 头版判断区 */}
      <Section columns={24} gap="1.5rem" style={{ marginTop: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--nui-rule-hairline)' }}>
        <Article span={7}>
          <div style={{
            ...cn,
            borderLeft: '3px solid var(--nui-accent-cjk-red)',
            paddingLeft: '0.9rem',
            paddingTop: '0.25rem',
          }}>
            <ColLabel red>核证边界</ColLabel>
            <div style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--nui-text-body)' }}>
              两条新增已获官方证据。本期至少有一个可核实官方入口；DeepSeek 本期仍缺少可核实的一手入口。正文只对已确认事件下结论，不把覆盖缺口解释成厂商无动态。
            </div>
          </div>
        </Article>
        <Article span={17}>
          <ColLabel>头版判断</ColLabel>
          <h2 style={{
            ...cn,
            fontSize: '34px',
            fontWeight: 900,
            lineHeight: 1.2,
            color: 'var(--nui-text-primary)',
            margin: '0 0 0.6rem 0',
          }}>网页工具，正在成为 Agent 的原生接口</h2>
          <p style={{
            ...cn,
            fontSize: '14px',
            lineHeight: 1.9,
            color: 'var(--nui-text-body)',
            margin: 0,
          }}>
            在桌面内置浏览器中发现并调用网站提供的工具，网页不再只是被点击的界面。与此同时，Claude Code 修复了后台任务、Remote Control 与授权持久化中的四个高摩擦故障。今天的共同主题不是新模型，而是 Agent 执行链路变得更可用。
          </p>
        </Article>
      </Section>

      {/* 今日新增区 */}
      <div style={{ marginTop: '1.5rem' }}>
        <div style={{
          ...cn,
          ...cnRed,
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          marginBottom: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span>■ 今日新增 · 已核证</span>
          <span style={{ flex: 1, borderTop: '1px solid var(--nui-rule-hairline)' }} />
        </div>
        <Section columns={24} gap="1.5rem">
          {NEW_ITEMS.map((item, i) => (
            <Article key={i} span={12}>
              <div style={{ ...cn }}>
                {/* 品名 */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '0.4rem',
                  ...tnum,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--nui-text-primary)',
                  }}>{item.product}</div>
                  <div style={{
                    fontFamily: 'var(--font-family-meta)',
                    fontSize: '11px',
                    color: 'var(--nui-text-muted)',
                    letterSpacing: '0.1em',
                  }}>{item.vendor} · {item.source}</div>
                </div>
                {/* 标题 */}
                <h3 style={{
                  ...cn,
                  fontSize: '22px',
                  fontWeight: 900,
                  lineHeight: 1.3,
                  margin: '0 0 0.6rem 0',
                  color: 'var(--nui-text-primary)',
                }}>{item.title}</h3>
                {/* 事实 */}
                <p style={{ ...cn, fontSize: '13px', lineHeight: 1.85, color: 'var(--nui-text-body)', margin: '0 0 0.5rem 0' }}>
                  <strong style={{ color: 'var(--nui-text-primary)' }}>事实</strong> · {item.what}
                </p>
                {/* 价值 */}
                <p style={{ ...cn, fontSize: '13px', lineHeight: 1.85, color: 'var(--nui-text-body)', margin: '0 0 0.5rem 0' }}>
                  <strong style={{ color: 'var(--nui-text-primary)' }}>价值</strong> · {item.why}
                </p>
                {/* 影响 */}
                <p style={{ ...cn, fontSize: '13px', lineHeight: 1.85, color: 'var(--nui-text-secondary)', margin: '0 0 0.5rem 0' }}>
                  <strong style={{ color: 'var(--nui-text-primary)' }}>影响</strong> · {item.who}
                </p>
                {/* 行动 */}
                <div style={{
                  ...cn,
                  fontSize: '12px',
                  lineHeight: 1.7,
                  color: 'var(--nui-text-secondary)',
                  borderTop: '1px solid var(--nui-rule-hairline)',
                  paddingTop: '0.6rem',
                  marginTop: '0.5rem',
                  display: 'flex',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    ...cnRed,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>{item.action}</span>
                  <span>{item.actionDetail}</span>
                </div>
              </div>
            </Article>
          ))}
        </Section>
      </div>

      {/* 模型发布留存区 */}
      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '3px solid var(--nui-text-primary)' }}>
        <div style={{
          ...cn,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '0.9rem',
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--nui-text-primary)',
          }}>模型发布留存</div>
          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
            letterSpacing: '0.05em',
          }}>仍在至少七天留存期 · 未被同厂商更新版本取代</div>
        </div>
        <Section columns={24} gap="1.5rem">
          {MODEL_ITEMS.map((item, i) => (
            <Article key={i} span={6}>
              <div style={{
                ...cn,
                borderTop: '1px solid var(--nui-rule-hairline)',
                paddingTop: '0.75rem',
              }}>
                <div style={{
                  fontFamily: 'var(--font-family-meta)',
                  fontSize: '10px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.15em',
                  marginBottom: '0.4rem',
                  ...tnum,
                }}>{item.date} · {item.vendor.toUpperCase()}</div>
                <div style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: 'var(--nui-text-primary)',
                  marginBottom: '0.3rem',
                  ...tnum,
                }}>{item.product}</div>
                <h4 style={{
                  ...cn,
                  fontSize: '15px',
                  fontWeight: 900,
                  margin: '0 0 0.5rem 0',
                  color: 'var(--nui-text-primary)',
                  lineHeight: 1.3,
                }}>{item.title}</h4>
                <p style={{ ...cn, fontSize: '12.5px', lineHeight: 1.8, color: 'var(--nui-text-body)', margin: '0 0 0.5rem 0' }}>
                  {item.what}
                </p>
                <div style={{
                  ...cn,
                  fontSize: '11.5px',
                  lineHeight: 1.6,
                  color: 'var(--nui-text-muted)',
                  marginBottom: '0.5rem',
                }}>{item.who}</div>
                <div style={{
                  ...cn,
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--nui-text-primary)',
                  borderTop: '1px solid var(--nui-rule-hairline)',
                  paddingTop: '0.5rem',
                }}>{item.action}</div>
              </div>
            </Article>
          ))}
        </Section>
      </div>

      {/* 持续关注区 */}
      <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--nui-rule-hairline)' }}>
        <div style={{
          ...cn,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '0.9rem',
        }}>
          <div style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--nui-text-primary)',
          }}>持续关注 · 操作窗口</div>
          <div style={{
            fontFamily: 'var(--font-family-meta)',
            fontSize: '11px',
            color: 'var(--nui-text-muted)',
          }}>稳定版 · 设备接口 · 权限治理</div>
        </div>
        <Section columns={24} gap="1.5rem">
          {WATCH_ITEMS.map((item, i) => (
            <Article key={i} span={12}>
              <div style={{
                ...cn,
                borderTop: '1px solid var(--nui-rule-hairline)',
                paddingTop: '0.75rem',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '0 1rem',
                alignItems: 'baseline',
              }}>
                <div style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: '17px',
                  fontWeight: 700,
                  color: 'var(--nui-text-primary)',
                  whiteSpace: 'nowrap',
                  ...tnum,
                }}>{item.product}</div>
                <div style={{
                  ...cn,
                  fontSize: '11px',
                  color: 'var(--nui-text-muted)',
                  letterSpacing: '0.1em',
                }}>{item.vendor.toUpperCase()}</div>
              </div>
              <h4 style={{
                ...cn,
                fontSize: '16px',
                fontWeight: 900,
                margin: '0.3rem 0 0.5rem 0',
                color: 'var(--nui-text-primary)',
                lineHeight: 1.3,
              }}>{item.title}</h4>
              <p style={{ ...cn, fontSize: '12.5px', lineHeight: 1.8, color: 'var(--nui-text-body)', margin: '0 0 0.5rem 0' }}>
                {item.what}
              </p>
              <div style={{
                ...cn,
                fontSize: '12px',
                lineHeight: 1.6,
                color: 'var(--nui-text-secondary)',
                display: 'flex',
                gap: '0.5rem',
              }}>
                <span style={{ fontWeight: 700, color: 'var(--nui-text-primary)', flexShrink: 0 }}>{item.action}</span>
                <span>{item.who}</span>
              </div>
            </Article>
          ))}
        </Section>
      </div>

      {/* 页脚 */}
      <footer style={{
        marginTop: '2.5rem',
        paddingTop: '1rem',
        borderTop: '1px solid var(--nui-rule-hairline)',
        ...cn,
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '11px',
          color: 'var(--nui-text-muted)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <span>证据门槛：活跃，不等于发布 · 空占位页仅留候选池</span>
          <span style={{ ...tnum }}>下期 · 2026 年 9 月 2 日</span>
        </div>
      </footer>
    </Layout>
  );
}
