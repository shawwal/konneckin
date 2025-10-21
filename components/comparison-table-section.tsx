import React from 'react';

// --- Type Definitions for Props ---
interface TableData {
  headers: string[];
  rows: { [key: string]: string }[];
}

interface ComparisonTableProps {
  title: React.ReactNode;
  subtitle: string;
  tableData: TableData;
}

// --- Main Component ---
export function ComparisonTableSection({ title, subtitle, tableData }: ComparisonTableProps) {
  const { headers, rows } = tableData;
  const entityHeaders = headers.slice(1); // Get headers like PT PMA, KPPA, etc.

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Section Header --- */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-xl tracking-tight text-gray-800 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        </div>

        {/* --- Responsive Table Container --- */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
          {/* Mobile View: Card-based Layout (hidden on large screens) */}
          <div className="lg:hidden">
            {rows.map((row, rowIndex) => (
              <div key={rowIndex} className="p-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-3">{row[headers[0]]}</h3>
                <div className="space-y-2">
                  {entityHeaders.map((header, colIndex) => (
                    <div key={colIndex} className="grid grid-cols-2 gap-2 text-sm">
                      <span className="font-medium text-slate-600 dark:text-slate-400">{header}:</span>
                      <span className="text-slate-800 dark:text-slate-200" dangerouslySetInnerHTML={{ __html: row[header] }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View: Traditional Table (hidden on small screens) */}
          <div className="hidden lg:block">
            <table className="w-full text-left">
              <thead className="bg-slate-100 dark:bg-slate-700/50">
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className="p-4 text-sm font-semibold uppercase tracking-wider bg-primary text-white dark:text-slate-300">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-slate-200 dark:border-slate-700">
                    {headers.map((header, colIndex) => (
                      <td key={colIndex} className="p-4 text-sm text-slate-700 dark:text-slate-300 align-top">
                        {/* Use dangerouslySetInnerHTML to render <br> tags from data */}
                        <span dangerouslySetInnerHTML={{ __html: row[header] }} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
