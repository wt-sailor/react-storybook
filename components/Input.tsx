import React, { forwardRef } from 'react';
import './Input.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the input
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
   * Input full width
   */
  fullWidth?: boolean;
  /**
   * Start icon
   */
  startIcon?: React.ReactNode;
  /**
   * End icon
   */
  endIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  helperText,
  error = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper--full-width' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className={`input-label ${error ? 'input-label--error' : ''}`}>
          {label}
        </label>
      )}
      <div className={`input-container ${error ? 'input-container--error' : ''} ${props.disabled ? 'input-container--disabled' : ''}`}>
        {startIcon && <span className="input-icon input-icon--start">{startIcon}</span>}
        <input
          id={inputId}
          ref={ref}
          className={`input-field ${startIcon ? 'input-field--with-start-icon' : ''} ${endIcon ? 'input-field--with-end-icon' : ''}`}
          {...props}
        />
        {endIcon && <span className="input-icon input-icon--end">{endIcon}</span>}
      </div>
      {helperText && (
        <span className={`input-helper-text ${error ? 'input-helper-text--error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';
