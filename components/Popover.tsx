import React, { useState, useRef, useEffect } from 'react';
import './Popover.scss';

export interface PopoverProps {
  /**
   * Popover content
   */
  content: React.ReactNode;
  /**
   * Popover position
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Trigger element
   */
  children: React.ReactNode;
  /**
   * Popover title
   */
  title?: string;
}

/**
 * Popover component for displaying rich content
 */
export const Popover: React.FC<PopoverProps> = ({
  content,
  position = 'bottom',
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="popover-wrapper" ref={popoverRef}>
      <div className="popover-trigger" onClick={() => setIsOpen(!isOpen)}>
        {children}
      </div>
      {isOpen && (
        <div className={`popover popover--${position}`}>
          {title && <div className="popover__title">{title}</div>}
          <div className="popover__content">{content}</div>
        </div>
      )}
    </div>
  );
};
