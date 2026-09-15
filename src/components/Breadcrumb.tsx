import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; path?: string }[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0">
      <ol className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400">
        <li>
          <Link to="/" className="flex items-center hover:text-emerald-600 dark:hover:text-emerald-400 transition">
            <Home className="h-3.5 w-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            {item.path ? (
              <Link to={item.path} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-900 dark:text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
