"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Lucide icons
import { User, Mail, Phone, Lock, Book } from "lucide-react";

export default function SignPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <section className="min-h-screen flex bg-[#F9F9F9] relative overflow-auto items-center justify-center px-4">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image
          src="/background-pattern.png"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Form Card */}
      <div className="w-full flex items-center justify-center z-10 py-8">
        <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          
          {/* Top Header with Logo */}
          <div className="bg-brand py-2 px-6 flex flex-col items-center">
            <Image
              src="/logo.png"
              alt="Egerton Logo"
              width={80}
              height={80}
              className="mb-2"
            />
            <h1 className="text-2xl font-semibold text-white text-center">
              Student Details
            </h1>
          </div>

          {/* Form Body */}
          <div className="p-8 space-y-6">
            {success ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold">Registration Successful!</h2>
                <p className="mt-2">Your account has been created successfully.</p>
                <p className="mt-1 text-sm">Redirecting to login page...</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const data = {
                    full_name: formData.get("full_name"),
                    registration_number: formData.get("registration_number"),
                    email: formData.get("email"),
                    faculty_department: formData.get("faculty_department"),
                    phone_number: formData.get("phone_number"),
                    password: formData.get("password"),
                  };
                  try {
                    const res = await fetch(
                      "http://127.0.0.1:8000/api/auth/register/",
                      {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                      }
                    );
                    const result = await res.json();
                    if (res.ok) {
                      setSuccess(true);
                      setTimeout(() => router.push("/login"), 3000);
                    } else {
                      let errorMsg = "";
                      for (const key in result) {
                        if (Array.isArray(result[key])) {
                          errorMsg += `${key}: ${result[key].join(", ")}\n`;
                        } else {
                          errorMsg += `${key}: ${result[key]}\n`;
                        }
                      }
                      alert(errorMsg);
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Something went wrong!");
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                {/* Full Name */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Enter full name"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Registration No */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Registration No
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="text"
                      name="registration_number"
                      placeholder="Enter registration no"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Student Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Faculty / Dept */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Faculty / Dept
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="text"
                      name="faculty_department"
                      placeholder="Enter faculty or department"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Phone No
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone_number"
                      placeholder="Enter phone number"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-green-500" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:scale-105 transition transform"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 bg-brand text-white py-2 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition transform duration-200 shadow-md"
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </form>
            )}

            {!success && (
              <div className="text-center text-sm text-gray-600 font-body mt-3">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-green-600 font-medium hover:underline"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}