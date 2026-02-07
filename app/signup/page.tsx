"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignPage() {
    const router = useRouter();
    // Redirect if already logged in
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   if (token) {
  //     router.replace("/");
  //   }
  // }, [router]);
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black text-center">
          Student Details
        </h1>

        {/* Form */}
        <form
            
  className="space-y-6 bg-brand/5 px-6 py-4 rounded-lg font-body"
  onSubmit={async (e) => {
  e.preventDefault();

  // Tell TypeScript this is an HTMLFormElement
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = {
    full_name: formData.get("full_name"),
    registration_number: formData.get("registration_number"),
    email: formData.get("email"),
    faculty_department: formData.get("faculty_department"),
    phone_number: formData.get("phone_number"),
    password: formData.get("password")
  };

  try {
    const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Signup successful!");
      window.location.href = "/login";
    } else {
      alert(JSON.stringify(result));
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
}}
>



          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Full Name
            </label>
            <input type="text" name="full_name" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Registration No
            </label>
            <input type="text" name="registration_number" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Student Email
            </label>
            <input type="email" name="email" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Faculty / Dept
            </label>
            <input type="text"    name="faculty_department" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Phone No
            </label>
            <input type="tel" name="phone_number" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Password
            </label>
            <input type="password" name="password" className="line-input flex-1" />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-brand text-white py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>

        </form>

        {/* Footer links */}
        <div className="text-center text-sm text-gray-600 font-body">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-brand-accent font-medium hover:underline"
          >
            Login
          </Link>
        </div>

      </div>
    </section>
  );
}
