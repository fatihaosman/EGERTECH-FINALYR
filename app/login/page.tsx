"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// ✅ Import Lucide icons
import { User, Lock } from "lucide-react";

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
      email: formData.get("registration_number"),
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
        localStorage.setItem("authToken", result.access);
         // ✅ Decode token to get user info
  type DecodedToken = {
  full_name: string;
  email: string;
  registration_number: string;
};

const decoded = jwtDecode<DecodedToken>(result.access);

  const user = {
    name: decoded.full_name,
    email: decoded.email,
    regNo: decoded.registration_number,
  };

  localStorage.setItem("user", JSON.stringify(user));

        setToast({ message: `Welcome back!`, visible: true });
        setTimeout(() => setToast({ message: "", visible: false }), 3000);
        setTimeout(() => router.push("/"), 1500);
      } else {
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
  <section className="min-h-screen flex bg-[#F9F9F9] relative overflow-hidden items-center justify-center">
  {/* Background Pattern */}
  <div className="absolute inset-0">
    <Image
      src="/background-pattern.png"
      alt="Background pattern"
      fill
      className="object-cover"
    />
  </div>

  {/* Login Form */}
  <div className="w-full flex items-center justify-center z-10">
    <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      
      {/* Top Header with Logo */}
      <div className="bg-brand py-2 px-6 flex flex-col items-center">
        <Image
          src="/logo.png" // <-- your Egerton logo
          alt="Egerton Logo"
          width={80}
          height={80}
          className="mb-1"
        />
        <h1 className="text-2xl font-semibold text-white text-center">
          Student Login
        </h1>
      </div>

      {/* Form Body */}
      <div className="p-8 space-y-6">
        <form className="space-y-5" onSubmit={handleLogin}>
          {/* Registration No */}
          <div className="flex flex-col relative">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Registration No
            </label>
            <div className="relative">
              {/* Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-green-500" />
              </div>
              <input
                type="email"
                name="registration_number"
                placeholder="Enter email"
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col relative">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              {/* Icon */}
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="w-5 h-5 text-green-500" />
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </div>

        {/* Welcome Text (inside card, bottom) */}
        <p className="text-center text-gray-500 text-sm mt-4 font-body font-medium">
          Welcome back! Login to access all your campus resources you need.
        </p>
      </div>
    </div>
  </div>

  {/* Toast Notification */}
  {toast.visible && (
    <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-in">
      {toast.message}
    </div>
  )}
</section>
);
}