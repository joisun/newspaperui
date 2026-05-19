'use client';

import { useState } from 'react';

interface DemoProps {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}

export function Demo({ title, description, code, children }: DemoProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="my-8 border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        )}
      </div>

      <div className="p-6 bg-white">
        {children}
      </div>

      {code && (
        <>
          <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {showCode ? '隐藏代码' : '查看代码'}
            </button>
          </div>

          {showCode && (
            <div className="border-t border-gray-200">
              <pre className="p-4 bg-gray-900 text-gray-100 overflow-x-auto text-sm">
                <code>{code}</code>
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  );
}
