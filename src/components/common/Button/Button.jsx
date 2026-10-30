import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'dark-pill', 'outline-pill', 'outline', 'ghost'
  size = 'md',        // 'sm', 'md', 'lg'
  icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  type = 'button',
  ...rest
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon-wrapper">{icon}</span>}
      <span className="btn-label">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon-wrapper">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
