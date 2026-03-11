"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({
    message: "",
    visible: false,
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      email: formData.get("registration_number"), // <- we’ll use email for login in backend
      password: formData.get("password"),
    };

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/token/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok || result.access) {
        // ✅ Store JWT token for authenticated requests
        localStorage.setItem("authToken", result.access);

        // ✅ Show toast notification
        setToast({ message: `Welcome back!`, visible: true });

        // ✅ Auto-hide after 3 seconds
        setTimeout(() => setToast({ message: "", visible: false }), 3000);

        // ✅ Redirect to dashboard after 1.5s
        setTimeout(() => router.push("/"), 1500);
      } else {
        // Handle login errors nicely
        let errorMsg = "";
        for (const key in result) {
          errorMsg += `${key}: ${result[key]}\n`;
        }
        alert(errorMsg);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex">
      {/* LEFT - Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
          <div className="w-full max-w-md space-y-8 ">
            {/* Heading */}
            <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black text-center">
              Student Login
            </h1>

            {/* Form */}
            <form
              className="space-y-6 bg-brand/5 px-6 py-30 rounded-lg font-body"
              onSubmit={handleLogin}
            >
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-semibold text-black">
                  Email
                </label>
                <input
                  type="email"
                  name="registration_number"
                  className="line-input flex-1"
                  placeholder="Enter email"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="w-32 text-sm font-semibold text-black">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="line-input flex-1"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-brand text-white py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <div className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                href="/signup"
                className="text-brand-accent font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* RIGHT - Image */}
      <div className="hidden md:block md:w-1/2 relative h-[80vh]">
        <Image
          src="/login.png"
          alt="University students collaborating"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ✅ Toast Notification - Top Right */}
      {toast.visible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
          {toast.message}
        </div>
      )}
    </section>
  );
}