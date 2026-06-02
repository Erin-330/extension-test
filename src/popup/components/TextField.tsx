import { InputHTMLAttributes } from 'react';

type TextFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'id' | 'value' | 'onChange'>;

export default function TextField({
  id,
  label,
  value,
  onChange,
  error,
  ...inputProps
}: TextFieldProps) {
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={`h-11 rounded-lg border bg-white px-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:cursor-not-allowed disabled:bg-gray-50 ${
          error ? 'border-red-400' : 'border-gray-200'
        }`}
        {...inputProps}
      />
      {error && (
        <p id={describedBy} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
