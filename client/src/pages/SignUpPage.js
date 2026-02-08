import React, { useState } from "react";

function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSignUp = () => {
    // TODO: connect to backend registration
    console.log("Signing up:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Sign Up</h1>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 border rounded mb-4"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-4"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignUpPage;
