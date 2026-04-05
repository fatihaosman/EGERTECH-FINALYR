"use client";

import { useState } from "react";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("authToken");

    const res = await fetch("http://127.0.0.1:8000/api/auth/change-password/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        old_password: oldPassword,
        new_password: newPassword,
      }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Change Password</h2>

      <input
        type="password"
        placeholder="Old Password"
        className="border p-2 w-full mb-2"
        onChange={(e) => setOldPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="New Password"
        className="border p-2 w-full mb-2"
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update Password
      </button>
    </div>
  );
}