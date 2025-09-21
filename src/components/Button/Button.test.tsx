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
  });
});
