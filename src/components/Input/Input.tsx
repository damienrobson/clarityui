import { useId, useRef, type ChangeEvent } from 'react';

export interface InputProps {
  ariaDescribedby?: string;
  ariaLabel?: string;
  ariaLabelledby?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  rounderCorners?: boolean;
  size?: 'small' | 'medium' | 'large';
  type?: 'email' | 'number' | 'password' | 'tel' | 'text';
  value: string;
}

export const Input = ({
  ariaDescribedby,
  ariaLabel,
  ariaLabelledby,
  disabled = false,
  id,
  label,
  onChange,
  placeholder,
  readOnly = false,
  required = false,
  rounderCorners = false,
  size = 'medium',
  type = 'text',
  value,
}: InputProps) => {
  const classNames = [
    'inpt',
    readOnly ? 'inpt--read-only' : '',
    rounderCorners ? 'inpt--rounded' : '',
    `inpt--${size}`,
    disabled ? 'inpt--disabled' : '',
  ].join(' ');

  const internalId = useId();
  const guid = useRef(id ?? internalId);

  if ([label, ariaLabel, ariaLabelledby].filter(Boolean).length > 1) {
    console.warn(
      '[Input]: Provide only one of `label`, `ariaLabel`, or `ariaLabelledby` to avoid conflicting accessible names.'
    );
  }

  if (readOnly) {
    return (
      <div>
        <label htmlFor={guid.current}>{label}</label>
        <div
          id={guid.current}
          className={classNames}
        >
          {value}
        </div>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={guid.current}>{label}</label>
      <input
        aria-describedby={ariaDescribedby}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        className={classNames}
        disabled={disabled}
        id={guid.current}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </div>
  );
};

export default Input;
