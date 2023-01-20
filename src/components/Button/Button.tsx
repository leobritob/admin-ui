import classnames from 'classnames';

enum ButtonVariants {
  PRIMARY = 'primary',
  LIGHT = 'light',
}

type ButtonVariantsTypes = 'primary' | 'light';

type Props = {
  variant?: ButtonVariantsTypes;
  children: React.ReactNode;
  onClick?: VoidFunction;
  className?: string;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button({ variant = ButtonVariants.PRIMARY, children, onClick, className, ...props }: Props) {
  return (
    <button
      {...props}
      onClick={onClick}
      className={classnames(
        'flex items-center justify-betwen gap-3 cursor-pointer px-4 py-3 rounded-md transition-all duration-150 outline-none hover:ring-2 ring-black/5',
        {
          'bg-teal-500 text-white hover:bg-teal-600': variant === ButtonVariants.PRIMARY,
          'bg-white border border-gray-200 text-black ring-gray-200': variant === ButtonVariants.LIGHT,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
