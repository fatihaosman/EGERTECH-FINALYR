import Link from "next/link";

export default function SignPage() {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 ">

        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-black text-center">
          Student Details
        </h1>

        {/* Form */}
        <form className="space-y-6 bg-brand/5 px-6 py-4 rounded-lg font-body">

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Full Name
            </label>
            <input type="text" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Registration No
            </label>
            <input type="text" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Student Email
            </label>
            <input type="email" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Faculty / Dept
            </label>
            <input type="text" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Phone No
            </label>
            <input type="tel" className="line-input flex-1" />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-32 text-sm font-semibold text-black">
              Password
            </label>
            <input type="password" className="line-input flex-1" />
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
