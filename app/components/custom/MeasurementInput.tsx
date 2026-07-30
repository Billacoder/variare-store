import React from "react";

type MeasurementInputProps = {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export default function MeasurementInput({
  type = "number",
  name,
  placeholder,
  value,
  onChange,
}: MeasurementInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="rounded-xl border p-4"
    />
  );
}