"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a range of creative services including web design, graphic design, digital marketing, photography, and video production.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity, but most projects are completed within 2 to 6 weeks.",
  },
  {
    question: "Can you work with clients remotely?",
    answer:
      "Yes, we work with clients globally using modern communication tools and platforms to ensure smooth collaboration.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing is project-based. We offer custom quotes depending on the scope, deliverables, and timeline.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Absolutely! We provide ongoing maintenance and support packages tailored to your needs.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#092327] text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-teal-500 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl transform transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pt-0 pb-4 text-gray-300 transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
