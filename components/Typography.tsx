import React from 'react';
import './Typography.scss';

export interface TypographyProps {
  /**
   * The content to display
   */
  children: React.ReactNode;
  /**
   * Variant of the typography
   */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  /**
   * Alignment of the text
   */
  align?: 'left' | 'center' | 'right' | 'justify';
  /**
   * Font weight
   */
  weight?: 'normal' | 'medium' | 'bold';
  /**
   * Text color
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'text-primary' | 'text-secondary';
  /**
   * Custom class name
   */
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  align = 'left',
  weight = 'normal',
  color = 'text-primary',
  className = '',
}) => {
  const Component = variant.startsWith('h') ? (variant as keyof JSX.IntrinsicElements) : 'p';
  
  return (
    <Component
      className={`typography typography--${variant} typography--align-${align} typography--weight-${weight} typography--color-${color} ${className}`}
    >
      {children}
    </Component>
  );
};
