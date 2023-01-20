import classnames from 'classnames';
import { useFormContext } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  className?: string;
};

export function Input({ name, label, className }: Props) {
  const { register } = useFormContext();
  const renderInputName = label || name;
  return (
    <div className={classnames('flex flex-col gap-2', className)}>
      <label htmlFor={name}>{renderInputName}</label>
      <input {...register(name)} id={name} type="text" placeholder={renderInputName} />
    </div>
  );
}
