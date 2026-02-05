"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black text-center">
          Student Login
        </h1>

        {/* Form */}
        <form
          className="space-y-6 bg-brand/5 px-6 py-4 rounded-lg font-body"
          onSubmit={async (e) => {
            e.preventDefault();

            // Cast to HTMLFormElement to satisfy TypeScript
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const data = {
              registration_number: formData.get("registration_number"),
              password: formData.get("password"),
            };

            try {
              const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });

              const result = await res.json();

              if (res.ok) {
                alert(`Welcome ${result.full_name}!`);
                window.location.href = "/"; // redirect to dashboard
              } else {
                alert(JSON.stringify(result)); // show login errors
              }
            } catch (err) {
              console.error(err);
              alert("Something went wrong!");
            }
          }}
        >

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
             Registration No
            </label>
            <input
              type="text"
              name="registration_number"
              className="line-input flex-1"
              placeholder="Enter reg NO"
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-brand text-white py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
          >
            Login
          </button>

        </form>

        {/* Footer links */}
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
  );
}
