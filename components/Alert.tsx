import React, { useState } from 'react';
import './Alert.scss';

export interface AlertProps {
  /**
   * Alert variant
   */
  variant?: 'info' | 'success' | 'warning' | 'error';
  /**
   * Alert title
   */
  title?: string;
  /**
   * Alert message
   */
  message: string;
  /**
   * Show close button
   */
  closable?: boolean;
  /**
   * Close handler
   */
  onClose?: () => void;
}

/**
 * Alert component for displaying notifications and messages
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  closable = false,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`alert alert--${variant}`} role="alert">
      <div className="alert__content">
        {title && <div className="alert__title">{title}</div>}
        <div className="alert__message">{message}</div>
      </div>
      {closable && (
        <button className="alert__close" onClick={handleClose} aria-label="Close">
          ×
        </button>
      )}
    </div>
  );
};
