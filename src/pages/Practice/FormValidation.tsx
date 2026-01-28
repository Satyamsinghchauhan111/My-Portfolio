import { useRef, useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const FormValidation = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    // HTML5 validation check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    // Custom validation
    if (password !== confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    setErrors({});
    alert("Form submitted successfully ✅");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <h2 className="text-xl font-semibold">Register</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          name="name"
          type="text"
          required
          minLength={3}
          className="p-2 rounded-2xl bg-black border-2 border-stone-700 text-white"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          required
          className="p-2 rounded-2xl bg-black border-2 border-stone-700 text-white"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium">Password</label>
        <input
          name="password"
          type="password"
          required
          minLength={8}
          pattern="^(?=.*[A-Z])(?=.*\d).*$"
          title="Must contain 1 uppercase letter and 1 number"
          className="p-2 rounded-2xl bg-black border-2 border-stone-700 text-white"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium">Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          required
          className="p-2 rounded-2xl bg-black border-2 border-stone-700 text-white"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FormValidation;
