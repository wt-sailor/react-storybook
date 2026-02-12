import React, { useState } from 'react';
import './Tabs.scss';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];
  /**
   * Default active tab ID
   */
  defaultActiveId?: string;
  /**
   * Custom class name
   */
  className?: string;
  /**
   * Callback when tab changes
   */
  onChange?: (activeId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveId,
  className = '',
  onChange,
}) => {
  const [activeId, setActiveId] = useState<string>(defaultActiveId || items[0]?.id);

  const handleTabClick = (id: string) => {
    const tab = items.find(item => item.id === id);
    if (tab && !tab.disabled) {
      setActiveId(id);
      if (onChange) {
        onChange(id);
      }
    }
  };

  const activeContent = items.find(item => item.id === activeId)?.content;

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-header" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={activeId === item.id}
            aria-disabled={item.disabled}
            className={`tabs-trigger ${activeId === item.id ? 'tabs-trigger--active' : ''} ${item.disabled ? 'tabs-trigger--disabled' : ''}`}
            onClick={() => handleTabClick(item.id)}
            disabled={item.disabled}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tabs-content" role="tabpanel">
        {activeContent}
      </div>
    </div>
  );
};
