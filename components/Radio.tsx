import React, { forwardRef } from 'react';
import './Radio.scss';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label for the radio button
   */
  label?: string;
  /**
   * Error state
   */
  error?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  error = false,
  className = '',
  id,
  ...props
}, ref) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={`radio-wrapper ${className} ${props.disabled ? 'radio-wrapper--disabled' : ''}`}>
      <input
        type="radio"
        id={radioId}
        ref={ref}
        className={`radio-input ${error ? 'radio-input--error' : ''}`}
        {...props}
      />
      {label && (
        <label htmlFor={radioId} className={`radio-label ${error ? 'radio-label--error' : ''}`}>
          {label}
        </label>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';
