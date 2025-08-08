import React from "react";
import { useForm } from "react-hook-form";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Navigate to result page with form data in state
    navigate("/result", { state: data });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">React Hook Form - Custom Input Component</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Username"
          name="username"
          register={register}
          required="Username is required"
          validationRules={{ minLength: { value: 3, message: "Minimum 3 characters" } }}
          errors={errors}
          placeholder="Enter username"
        />

        <InputField
          label="Email"
          name="email"
          register={register}
          required="Email is required"
          validationRules={{
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid email address",
            },
          }}
          errors={errors}
          placeholder="Enter email"
          type="email"
        />

        <InputField
          label="Password"
          name="password"
          register={register}
          required="Password is required"
          validationRules={{
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          }}
          errors={errors}
          placeholder="Enter password"
          type="password"
        />

        <InputField
          label="Age"
          name="age"
          register={register}
          required={false}
          validationRules={{
            validate: (value) =>
              value === "" || (parseInt(value) >= 18 && parseInt(value) <= 99) || "Age must be between 18 and 99",
          }}
          errors={errors}
          placeholder="Enter age (optional)"
          type="number"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
