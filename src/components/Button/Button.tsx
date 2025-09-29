import { useId, useRef } from 'react';
import './Button.css';

export interface ButtonProps {
  ariaDescribedby?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  onClick: () => void;
  rounderCorners?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  validationType?: 'success' | 'warning' | 'error' | 'default';
  variant?: 'primary';
}

export const Button = ({
  ariaDescribedby,
  ariaLabel,
  ariaLabelledby,
  disabled = false,
  id,
  label,
  onClick,
  rounderCorners = false,
  size = 'medium',
  type = 'button',
  validationType = 'default',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = [
    'btn',
    rounderCorners ? 'btn--rounded' : '',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${validationType}`,
    disabled ? 'btn--disabled' : '',
  ].join(' ');

  const internalId = useId();
  const guid = useRef(id ?? internalId);

  if ([label, ariaLabel, ariaLabelledby].filter(Boolean).length > 1) {
    console.warn(
      '[Button]: Provide only one of `label`, `ariaLabel`, or `ariaLabelledby` to avoid conflicting accessible names.'
    );
  }

  return (
    <button
      aria-describedby={ariaDescribedby}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={classNames}
      disabled={disabled}
      id={guid.current}
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
