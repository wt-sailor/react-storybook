import React, { forwardRef } from 'react';
import './Checkbox.scss';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label for the checkbox
   */
  label?: string;
  /**
   * Error state
   */
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  error = false,
  className = '',
  id,
  ...props
}, ref) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`checkbox-wrapper ${className} ${props.disabled ? 'checkbox-wrapper--disabled' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        ref={ref}
        className={`checkbox-input ${error ? 'checkbox-input--error' : ''}`}
        {...props}
      />
      {label && (
        <label htmlFor={checkboxId} className={`checkbox-label ${error ? 'checkbox-label--error' : ''}`}>
          {label}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
