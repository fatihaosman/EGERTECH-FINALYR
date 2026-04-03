"use client";

import { useState } from "react";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can send this data to your backend here
    console.log("Support request submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Support</h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions or need help? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Question or issue 
          "
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <button
            type="submit"
            className="bg-brand text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}