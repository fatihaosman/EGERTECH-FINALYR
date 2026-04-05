"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    fetch("http://127.0.0.1:8000/api/auth/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">My Profile</h2>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Reg No:</strong> {user.regNo}</p>
    </div>
  );
}