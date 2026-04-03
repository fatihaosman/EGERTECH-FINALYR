"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I report a lost item?",
      answer:
        "Go to the Lost & Found page and submit the item details including title, description, and image.",
    },
    {
      question: "How do I claim an item?",
      answer:
        "Follow the instructions provided in the post or contact the person who reported it. You may be asked to verify ownership.",
    },
    {
      question: "What proof is required to claim an item?",
      answer:
        "You may need to provide identification or describe specific details about the item to confirm ownership.",
    },
    {
      question: "Can I post non-ID items?",
      answer:
        "Yes, you can post other lost items such as keys, bags, or personal belongings under the 'Other' category.",
    },
    {
      question: "How long are items displayed?",
      answer:
        "Items remain visible for a limited period or until they are claimed depending on system rules.",
    },
    {
      question: "Do I need an account?",
      answer:
        "Yes, you need to log in to post items, but browsing is available to everyone.",
    },
    {
      question: "Who do I contact for help?",
      answer:
        "You can reach out through the Student Opportunities section or contact system support.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-white py-12">
      <div className="max-w-3xl mx-auto px-4">

        {/* 🔹 Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h1>

        {/* 🔹 FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium hover:bg-gray-100"
              >
                <span>{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🔹 Bottom Help */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand text-white px-6 py-2 rounded-md hover:opacity-90"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}