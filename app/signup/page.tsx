"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // <-- Track success

  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">

        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black text-center">
          Student Details
        </h1>

        {success ? (
          // ✅ Success message block
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg text-center">
            <h2 className="text-lg font-semibold">Registration Successful!</h2>
            <p className="mt-2">Your account has been created successfully.</p>
            <p className="mt-1 text-sm">Redirecting to login page...</p>
          </div>
        ) : (
          // Form
          <form
            className="space-y-6 bg-brand/5 px-6 py-4 rounded-lg font-body"
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
                  // ✅ Show success message instead of alert
                  setSuccess(true);

                  // ✅ Automatically redirect after 2.5 seconds
                  setTimeout(() => {
                    router.push("/login");
                  }, 3000);

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
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Full Name</label>
              <input type="text" name="full_name" className="line-input flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Registration No</label>
              <input type="text" name="registration_number" className="line-input flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Student Email</label>
              <input type="email" name="email" className="line-input flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Faculty / Dept</label>
              <input type="text" name="faculty_department" className="line-input flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Phone No</label>
              <input type="tel" name="phone_number" className="line-input flex-1" />
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-sm font-semibold text-black">Password</label>
              <input type="password" name="password" className="line-input flex-1" />
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-brand text-white py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}

        {!success && (
          <div className="text-center text-sm text-gray-600 font-body">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-brand-accent font-medium hover:underline"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}