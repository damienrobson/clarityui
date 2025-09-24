import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Button, type ButtonProps } from '.';

describe('Button', () => {
  afterEach(cleanup);

  const Component = ({
    label = 'Test Button',
    ...props
  }: Omit<ButtonProps, 'label' | 'onClick'> & { label?: string }) => {
    const mockClickFn = vi.fn();

    return (
      <Button
        {...props}
        label={label}
        onClick={mockClickFn}
      />
    );
  };

  describe('Default style', () => {
    it("should render component with 'button' role and '.btn' class", () => {
      render(<Component />);

      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('btn');
    });

    it('should render label', () => {
      render(<Component label='Testing' />);

      expect(screen.getByText('Testing')).toBeInTheDocument();
    });

    it("should render as disabled when 'disabled' prop is true", () => {
      render(<Component disabled />);

      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('btn--disabled');
    });

    it("should render as enabled when 'disabled' prop is false", () => {
      render(<Component disabled={false} />);

      const button = screen.getByRole('button');
      expect(button).toBeEnabled();
    });

    it("should render at the correct size when 'size' prop is set to 'small'", () => {
      render(<Component size='small' />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--small');
      expect(button).toHaveStyle({
        minHeight: '32px',
        fontSize: '14px',
        minWidth: '96px',
      });
    });

    it("should render at the correct size when 'size' prop is set to 'medium'", () => {
      render(<Component size='medium' />);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--medium');
      expect(button).toHaveStyle({
        minHeight: '40px',
        fontSize: '16px',
        minWidth: '128px',
      });
    });

    it("should render at the correct size when 'size' prop is set to 'large'", () => {
      render(<Component size='large' />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--large');
      expect(button).toHaveStyle({
        minHeight: '48px',
        fontSize: '18px',
        minWidth: '160px',
      });
    });

    it("should have rounded corners when the `roundedCorners' prop is set to 'true'", () => {
      render(<Component rounderCorners />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--rounded');
      expect(button).toHaveStyle({
        minHeight: '40px',
        fontSize: '16px',
        minWidth: '128px',
        borderRadius: '12px',
      });
    });

    it('should call onClick when clicked', () => {
      const handleClick = vi.fn();
      render(
        <Button
          label='Click me'
          onClick={handleClick}
        />
      );
      screen.getByRole('button').click();
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = vi.fn();
      render(
        <Button
          label='Disabled'
          disabled
          onClick={handleClick}
        />
      );
      screen.getByRole('button').click();
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should apply aria-label when provided', () => {
      render(
        <Button
          label='Visible'
          ariaLabel='Accessible Label'
          onClick={() => {}}
        />
      );
      expect(screen.getByRole('button', { name: 'Accessible Label' })).toBeInTheDocument();
    });

    it('should use aria-labelledby when provided', () => {
      render(
        <>
          <span id='external-label'>External Label</span>
          <Button
            label='Ignored'
            ariaLabelledby='external-label'
            onClick={() => {}}
          />
        </>
      );
      expect(screen.getByRole('button', { name: 'External Label' })).toBeInTheDocument();
    });

    it('should apply aria-describedby when provided', () => {
      render(
        <>
          <span id='desc'>Extra description</span>
          <Button
            label='Described'
            ariaDescribedby='desc'
            onClick={() => {}}
          />
        </>
      );
      expect(screen.getByRole('button')).toHaveAttribute('aria-describedby', 'desc');
    });

    it("should apply 'primary' variant class", () => {
      render(<Component variant='primary' />);
      expect(screen.getByRole('button')).toHaveClass('btn--primary');
    });

    it("should apply 'success' validation type class", () => {
      render(<Component validationType='success' />);
      expect(screen.getByRole('button')).toHaveClass('btn--success');
    });

    it("should apply 'warning' validation type class", () => {
      render(<Component validationType='warning' />);
      expect(screen.getByRole('button')).toHaveClass('btn--warning');
    });

    it("should apply 'error' validation type class", () => {
      render(<Component validationType='error' />);
      expect(screen.getByRole('button')).toHaveClass('btn--error');
    });

    it('should default type to "button"', () => {
      render(<Component />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should support type="submit"', () => {
      render(<Component type='submit' />);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });
  });
});
