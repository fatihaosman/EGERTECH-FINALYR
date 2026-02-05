import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full mt-6">
      {/* Top footer content */}
      <div className="max-w-6xl mx-auto px-6 py-2 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700 items-center">
        
        {/* First column */}
        <div className="text-center md:text-left">
          {/* <img src="logo.png" alt="" /> */}
          <h2 className="text-lg font-bold mb-2">
            <Link href="/" className="hover:underline">
               EgerConnect
              </Link>
            </h2>
          <p className="mb-2 italic font-semibold">
            Empowering students through academics, clubs, and innovation.
          </p>
          <p>Njoro, Kenya</p>
        </div>

        {/* Second column */}
        <div className="flex justify-center ">
          <ul className="space-y-2  text-center md:text-left">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About School
              </Link>
            </li>
            <li>
              <Link href="/clubs" className="hover:underline">
                Clubs &amp; Societies
              </Link>
            </li>
            <li>
              <Link href="/notices" className="hover:underline">
                Notices
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Third column */}
        <div className="text-center md:text-right space-y-2">
          <p>📧 info@egerton.ac.ke</p>
          <p>📞 +254 7XX XXX XXX</p>
          <p>🕒 Mon–Fri: 8am – 5pm</p>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} EgerConnect. All rights reserved.</p>
      </div>
    </footer>
  );
}
