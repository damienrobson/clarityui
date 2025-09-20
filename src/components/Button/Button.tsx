interface ButtonProps {
  label: string
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      {...props}
    >
      {label}
    </button>
  )
}

export default Button
