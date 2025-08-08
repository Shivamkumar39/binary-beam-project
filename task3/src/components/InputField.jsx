import React from "react";

export default function InputField({
  label,
  name,
  register,
  required,
  validationRules = {},
  errors,
  type = "text",
  placeholder,
}) {
  return (
    <div className="mb-6">
      {label && (
        <label htmlFor={name} className="block mb-2 font-semibold text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required, ...validationRules })}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
          ${errors && errors[name] ? "border-red-500" : "border-gray-300"}`}
      />
      {errors && errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message || "This field is invalid"}</p>
      )}
    </div>
  );
}
