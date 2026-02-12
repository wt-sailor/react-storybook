import React from 'react';
import './Breadcrumbs.scss';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbsProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Custom separator character or element
   */
  separator?: React.ReactNode;
  /**
   * Custom class name
   */
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className = '',
}) => {
  return (
    <nav aria-label="Breadcrumb" className={`breadcrumbs ${className}`}>
      <ol className="breadcrumbs-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className={`breadcrumbs-item ${item.isActive || isLast ? 'breadcrumbs-item--active' : ''}`}>
              {item.href && !item.isActive && !isLast ? (
                <a href={item.href} className="breadcrumbs-link">
                  {item.label}
                </a>
              ) : (
                <span className="breadcrumbs-text" aria-current={item.isActive || isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              
              {!isLast && (
                <span className="breadcrumbs-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
