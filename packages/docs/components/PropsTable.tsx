'use client';

import { useLocale } from './LocaleContext';

interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  data: PropDefinition[];
}

export function PropsTable({ data }: PropsTableProps) {
  const { messages } = useLocale();

  return (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-3 px-4 font-semibold text-gray-900">{messages.propsTable.property}</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900">{messages.propsTable.type}</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900">{messages.propsTable.defaultValue}</th>
            <th className="text-left py-3 px-4 font-semibold text-gray-900">{messages.propsTable.description}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((prop) => (
            <tr key={prop.name} className="border-b border-gray-200">
              <td className="py-3 px-4">
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {prop.name}
                  {prop.required && <span className="text-red-500 ml-1">*</span>}
                </code>
              </td>
              <td className="py-3 px-4">
                <code className="text-sm text-blue-600">{prop.type}</code>
              </td>
              <td className="py-3 px-4">
                {prop.default ? (
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">{prop.default}</code>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
