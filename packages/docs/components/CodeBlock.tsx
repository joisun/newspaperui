'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'tsx', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-200">
      {title && (
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
          <span className="text-sm font-medium text-gray-700">{title}</span>
          <span className="text-xs text-gray-500">{language}</span>
        </div>
      )}

      <div className="relative">
        <button
          type="button"
          aria-label="Copy code"
          onClick={handleCopy}
          className="absolute top-2 right-2 min-h-11 min-w-11 px-3 py-2 text-xs bg-gray-700 hover:bg-gray-600 text-white"
        >
          {copied ? '已复制' : '复制'}
        </button>

        <pre className="p-4 pr-16 bg-gray-900 text-gray-100 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
