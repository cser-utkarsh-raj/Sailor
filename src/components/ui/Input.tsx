import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white border-2 border-ocean-200
          text-navy-900 placeholder:text-navy-400
          focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200
          transition-all duration-200
          ${error ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-100' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-danger-600">{error}</p>
      )}
    </div>
  );
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-navy-700 mb-1.5">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white border-2 border-ocean-200
          text-navy-900 placeholder:text-navy-400
          focus:outline-none focus:border-ocean-500 focus:ring-2 focus:ring-ocean-200
          transition-all duration-200 resize-none
          ${error ? 'border-danger-500 focus:border-danger-500 focus:ring-danger-100' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-danger-600">{error}</p>
      )}
    </div>
  );
}
