'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: '概览',
    href: '/',
  },
  {
    title: '栅格系统',
    href: '/grid-system',
  },
  {
    title: '核心组件',
    href: '/components',
    items: [
      { title: 'Article', href: '/components/article' },
      { title: 'Layer', href: '/components/layer' },
      { title: '媒体组件', href: '/components/media' },
    ],
  },
  {
    title: '文本组件',
    href: '/text',
  },
  {
    title: '主题系统',
    href: '/theme',
  },
  {
    title: '示例',
    href: '/examples',
    items: [
      { title: '跨栏布局', href: '/examples/spanning' },
      { title: '响应式布局', href: '/examples/responsive' },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-64 border-r border-gray-200 bg-white h-screen sticky top-0 overflow-y-auto">
      <div className="p-6">
        <Link href="/" className="text-xl font-bold text-gray-900">
          NewspaperUI
        </Link>
        <p className="mt-1 text-sm text-gray-600">报纸布局组件库</p>
      </div>

      <div className="px-4 pb-6">
        {navigation.map((item) => (
          <div key={item.href} className="mb-4">
            <Link
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                pathname === item.href
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.title}
            </Link>

            {item.items && (
              <div className="ml-4 mt-2 space-y-1">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className={`block px-3 py-2 rounded-md text-sm ${
                      pathname === subItem.href
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
