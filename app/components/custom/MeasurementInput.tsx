import React from "react";

interface MeasurementInputProps {
  type?: React.HTMLInputTypeAttribute;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
}

export default function MeasurementInput({
  type = "number",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  autoComplete = "off",
}: MeasurementInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      autoComplete={autoComplete}
      inputMode={type === "number" ? "numeric" : undefined}
      className="
        w-full
        rounded-2xl
        border
        border-neutral-300
        bg-white
        px-5
        py-4
        text-sm
        text-neutral-900
        placeholder:text-neutral-400
        transition-all
        duration-200
        outline-none
        focus:border-black
        focus:ring-2
        focus:ring-black/5
        disabled:cursor-not-allowed
        disabled:bg-neutral-100
        disabled:text-neutral-400
      "
    />
  );
}