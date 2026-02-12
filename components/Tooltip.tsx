import React, { useState } from 'react';
import './Tooltip.scss';

export interface TooltipProps {
  /**
   * Tooltip content
   */
  content: string;
  /**
   * Tooltip position
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * Children element
   */
  children: React.ReactNode;
}

/**
 * Tooltip component for displaying helpful hints
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = 'top',
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`tooltip tooltip--${position}`}>
          {content}
        </div>
      )}
    </div>
  );
};
