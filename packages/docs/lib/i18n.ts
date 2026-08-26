export const locales = ['zh', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'zh';

export const i18n: {
  languages: string[];
  defaultLanguage: Locale;
  hideLocale: 'default-locale';
} = {
  languages: [...locales],
  defaultLanguage: defaultLocale,
  hideLocale: 'default-locale',
} as const;

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : defaultLocale;
}

export function localizePath(pathname: string, locale: Locale): string {
  const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return locale === defaultLocale
    ? pathWithoutLocale
    : `/en${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith('/') || href.startsWith('//')) return href;

  const suffixIndex = href.search(/[?#]/u);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : href.slice(suffixIndex);
  return `${localizePath(pathname, locale)}${suffix}`;
}

export const messages = {
  zh: {
    localeName: '中文',
    switchLocale: '切换到 English',
    nav: {
      docs: '文档',
      components: '组件',
      blocks: '版式',
      create: '创建',
      home: 'NewspaperUI 首页',
      primary: '主导航',
      mobile: '移动端导航',
      openMenu: '打开菜单',
      closeMenu: '关闭菜单',
      light: '浅色',
      dark: '深色',
    },
    home: {
      title: '为 React 打造的编辑排版组件。',
      galleryLabel: 'NewspaperUI 完整报纸 Demo 图库',
      previewLabel: (title: string) => `${title} 完整报纸页面`,
      previousPreview: '上一张预览',
      nextPreview: '下一张预览',
      choosePreview: '选择报纸预览',
      showPreview: (index: number, total: number, title: string) =>
        `显示第 ${index} 张预览，共 ${total} 张：${title}`,
    },
    install: {
      copy: '复制',
      copied: '已复制',
      failed: '复制失败',
      ariaLabel: '复制安装命令',
    },
    blocks: {
      kicker: '生产级版式 · 复制、调整、发布',
      title: '报纸版式',
      subtitle: '六套完整编辑布局，覆盖中文、英文与日文排版。',
      block: '版式',
      view: '查看版式',
      descriptions: [
        '思源宋体、克制朱红与高密度头版结构。',
        '人物访谈、文化评论与多层引用排版。',
        '克制的长篇阅读体验，配合拉引与安静的叙事节奏。',
        '24 列横排日文编辑布局。',
        '传统 vertical-rl 排版与响应式框架。',
        '双栏评论、专家观点与读者来信的完整结构。',
      ],
    },
    create: {
      viewLabel: '主题创建器视图',
      editor: '编辑器',
      preview: '预览',
      kicker: '创建主题',
      title: '自定义',
      presets: '预设',
      customize: '自定义',
      copied: '✓ 已复制！',
      copyCss: '复制 CSS',
      downloadCss: '下载 CSS',
      downloadJson: '下载 JSON',
      controls: {
        pageBackground: '页面背景',
        primaryText: '主要文本',
        bodyText: '正文文本',
        accentColor: '强调色',
        hairlineRule: '细分隔线',
        gutter: '栏间距',
        mastheadFont: '报头字体',
        bodyFont: '正文字体',
      },
    },
    demo: {
      ariaLabel: (title: string) => `${title} Demo`,
      livePreview: '实时预览',
      source: '源码',
      sourceCopied: '源码已复制',
      copySource: '复制源码',
      copied: '已复制',
      copy: '复制',
      hideSource: '隐藏源码',
      viewSource: '查看源码',
      copiedStatus: '源码已复制到剪贴板。',
      copyFailed: '复制失败，请选择源码后手动复制。',
    },
    propsTable: {
      property: '属性',
      type: '类型',
      defaultValue: '默认值',
      description: '说明',
    },
    themeToggle: {
      light: '浅色模式',
      dark: '深色模式',
    },
    fumadocs: {
      search: '搜索',
      searchNoResult: '未找到结果',
      toc: '本页目录',
      tocNoHeadings: '本页没有标题',
      lastUpdate: '最后更新于',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      chooseTheme: '选择主题',
      editOnGithub: '在 GitHub 上编辑',
    },
  },
  en: {
    localeName: 'English',
    switchLocale: 'Switch to 中文',
    nav: {
      docs: 'Docs',
      components: 'Components',
      blocks: 'Blocks',
      create: 'Create',
      home: 'NewspaperUI home',
      primary: 'Primary navigation',
      mobile: 'Mobile navigation',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      light: 'Light',
      dark: 'Dark',
    },
    home: {
      title: 'Editorial components for React.',
      galleryLabel: 'NewspaperUI full newspaper demo gallery',
      previewLabel: (title: string) => `${title} complete newspaper page`,
      previousPreview: 'Previous preview',
      nextPreview: 'Next preview',
      choosePreview: 'Choose newspaper preview',
      showPreview: (index: number, total: number, title: string) =>
        `Show preview ${index} of ${total}: ${title}`,
    },
    install: {
      copy: 'Copy',
      copied: 'Copied',
      failed: 'Copy failed',
      ariaLabel: 'Copy install command',
    },
    blocks: {
      kicker: 'Production blocks · Copy, adapt, publish',
      title: 'Newspaper Blocks',
      subtitle: 'Six complete editorial layouts across Chinese, English, and Japanese typography.',
      block: 'Block',
      view: 'View block',
      descriptions: [
        'Source Han Serif, restrained vermilion, and a dense front-page structure.',
        'Portrait interviews, cultural criticism, and layered pull-quote typography.',
        'Measured long-form reading with pull quotes and a quiet story rhythm.',
        'A 24-column horizontal Japanese editorial layout.',
        'Traditional vertical-rl composition with responsive framing.',
        'A complete two-column opinion layout with expert views and reader letters.',
      ],
    },
    create: {
      viewLabel: 'Theme creator view',
      editor: 'Editor',
      preview: 'Preview',
      kicker: 'Create Theme',
      title: 'Customize',
      presets: 'Presets',
      customize: 'Customize',
      copied: '✓ Copied!',
      copyCss: 'Copy CSS',
      downloadCss: 'Download CSS',
      downloadJson: 'Download JSON',
      controls: {
        pageBackground: 'Page Background',
        primaryText: 'Primary Text',
        bodyText: 'Body Text',
        accentColor: 'Accent Color',
        hairlineRule: 'Hairline Rule',
        gutter: 'Gutter',
        mastheadFont: 'Masthead Font',
        bodyFont: 'Body Font',
      },
    },
    demo: {
      ariaLabel: (title: string) => `${title} demo`,
      livePreview: 'Live preview',
      source: 'Source',
      sourceCopied: 'Source copied',
      copySource: 'Copy source',
      copied: 'Copied',
      copy: 'Copy',
      hideSource: 'Hide source',
      viewSource: 'View source',
      copiedStatus: 'Source copied to clipboard.',
      copyFailed: 'Copy failed. Select the source and copy it manually.',
    },
    propsTable: {
      property: 'Property',
      type: 'Type',
      defaultValue: 'Default',
      description: 'Description',
    },
    themeToggle: {
      light: 'Light Mode',
      dark: 'Dark Mode',
    },
    fumadocs: {
      search: 'Search',
      searchNoResult: 'No results found',
      toc: 'On this page',
      tocNoHeadings: 'No headings',
      lastUpdate: 'Last updated on',
      chooseLanguage: 'Choose a language',
      nextPage: 'Next',
      previousPage: 'Previous',
      chooseTheme: 'Choose a theme',
      editOnGithub: 'Edit on GitHub',
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
