import React, { forwardRef } from 'react';
import './Textarea.scss';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Label for the textarea
   */
  label?: string;
  /**
   * Helper text or error message
   */
  helperText?: string;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Textarea full width
   */
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  helperText,
  error = false,
  fullWidth = false,
  className = '',
  id,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`textarea-wrapper ${fullWidth ? 'textarea-wrapper--full-width' : ''} ${className}`}>
      {label && (
        <label htmlFor={textareaId} className={`textarea-label ${error ? 'textarea-label--error' : ''}`}>
          {label}
        </label>
      )}
      <div className={`textarea-container ${error ? 'textarea-container--error' : ''} ${props.disabled ? 'textarea-container--disabled' : ''}`}>
        <textarea
          id={textareaId}
          ref={ref}
          className="textarea-field"
          {...props}
        />
      </div>
      {helperText && (
        <span className={`textarea-helper-text ${error ? 'textarea-helper-text--error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
