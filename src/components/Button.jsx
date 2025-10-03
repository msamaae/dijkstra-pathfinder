import React from 'react';

/**
 * Reusable button with different variants and states
 *
 * @param {string} variant - 'primary' | 'mode' | 'danger' | 'warning' | 'success'
 * @param {boolean} isActive - For mode buttons, indicates if this mode is selected
 * @param {boolean} disabled - Disabled state
 * @param {function} onClick - Click handler
 * @param {ReactNode} icon - Icon component (from lucide-react)
 * @param {ReactNode} children - Button text/content
 */
const Button = ({
  variant = 'primary',
  isActive = false,
  disabled = false,
  onClick,
  icon: Icon,
  children,
  className = '',
}) => {
  // Base classes shared by all buttons - retro arcade style with press-down effect
  const baseClasses = 'flex items-center justify-center gap-2 px-4 py-3 font-extrabold transition-all duration-100 uppercase text-xs tracking-wider border-2 rounded-none';

  // Disabled state classes
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'active:shadow-none active:translate-y-[4px]';

  // Variant-specific classes - retro arcade colors with sharp shadows
  const variantClasses = {
    // Primary action button (Visualize) - Lime green (matches theme)
    primary: isActive || !disabled
      ? 'bg-lime-500 text-gray-900 border-lime-600 shadow-[0_4px_0_0_#4d7c0f]'
      : 'bg-lime-500 text-gray-900 border-lime-600 shadow-[0_4px_0_0_#4d7c0f]',

    // Warning action button (Reset) - Yellow
    warning: isActive || !disabled
      ? 'bg-yellow-500 text-gray-900 border-yellow-600 shadow-[0_4px_0_0_#b45309]'
      : 'bg-yellow-500 text-gray-900 border-yellow-600 shadow-[0_4px_0_0_#b45309]',

    // Secondary action button (Clear Walls) - Orange
    secondary: isActive || !disabled
      ? 'bg-orange-500 text-gray-900 border-orange-600 shadow-[0_4px_0_0_#c2410c]'
      : 'bg-orange-500 text-gray-900 border-orange-600 shadow-[0_4px_0_0_#c2410c]',

    // Danger action button (Clear All) - Red
    danger: isActive || !disabled
      ? 'bg-red-600 text-white border-red-700 shadow-[0_4px_0_0_#7f1d1d]'
      : 'bg-red-600 text-white border-red-700 shadow-[0_4px_0_0_#7f1d1d]',

    // Mode button variants
    'mode-wall': isActive
      ? 'bg-purple-600 text-white border-purple-700 shadow-[0_4px_0_0_#581c87]'
      : 'bg-gray-800 text-purple-400 border-purple-400 shadow-[0_4px_0_0_#581c87] hover:bg-gray-700',

    'mode-start': isActive
      ? 'bg-lime-500 text-gray-900 border-lime-600 shadow-[0_4px_0_0_#4d7c0f]'
      : 'bg-gray-800 text-lime-400 border-lime-400 shadow-[0_4px_0_0_#4d7c0f] hover:bg-gray-700',

    'mode-end': isActive
      ? 'bg-red-600 text-white border-red-700 shadow-[0_4px_0_0_#7f1d1d]'
      : 'bg-gray-800 text-red-400 border-red-400 shadow-[0_4px_0_0_#7f1d1d] hover:bg-gray-700',
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${disabledClasses} ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default Button;

