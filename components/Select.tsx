import React, { forwardRef } from 'react';
import './Select.scss';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Label for the select
   */
  label?: string;
  /**
   * Options for the select
   */
  options: SelectOption[];
  /**
   * Helper text or error message
   */
  helperText?: string;
  /**
   * Error state
   */
  error?: boolean;
  /**
   * Select full width
   */
  fullWidth?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  options,
  helperText,
  error = false,
  fullWidth = false,
  className = '',
  id,
  children,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`select-wrapper ${fullWidth ? 'select-wrapper--full-width' : ''} ${className}`}>
      {label && (
        <label htmlFor={selectId} className={`select-label ${error ? 'select-label--error' : ''}`}>
          {label}
        </label>
      )}
      <div className={`select-container ${error ? 'select-container--error' : ''} ${props.disabled ? 'select-container--disabled' : ''}`}>
        <select
          id={selectId}
          ref={ref}
          className="select-field"
          {...props}
        >
          {children || options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="select-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      {helperText && (
        <span className={`select-helper-text ${error ? 'select-helper-text--error' : ''}`}>
          {helperText}
        </span>
      )}
    </div>
  );
});

Select.displayName = 'Select';
