import ClassNames from 'classnames';

export default function Button({ 
  children, 
  primary, 
  secondary, 
  success, 
  danger, 
  warning, 
  outline, 
  rounded,
  ...rest
}) {
  const classes = ClassNames(rest.children,
    'p-3 text-sm font-medium',
    {
      // Conditional styles
      'border border-blue-500 bg-blue-500 text-white': primary,
      'border border-gray-500 bg-gray-500 text-white': secondary,
      'border border-green-500 bg-green-500 text-white': success,
      'border border-red-500 bg-red-500 text-white': danger,
      'border border-yellow-500 bg-yellow-500 text-white': warning,
      'bg-transparent text-current': outline, 
      'rounded-full': rounded, 
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
