import './Button.css'

interface ButtonProps {
  ariaDescribedby?: string
  ariaLabel?: string
  ariaLabelledby?: string
  disabled?: boolean
  label: string
  onClick: () => void
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  validationType?: 'success' | 'warning' | 'error' | 'default'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = ({
  ariaDescribedby,
  ariaLabel,
  ariaLabelledby,
  disabled = false,
  label,
  onClick,
  size = 'medium',
  type = 'button',
  validationType = 'default',
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    `btn--${validationType}`,
    disabled ? 'btn--disabled' : '',
  ].join(' ')

  return (
    <button
      aria-disabled={disabled}
      aria-describedby={ariaDescribedby}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      role='button'
      type={type}
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
