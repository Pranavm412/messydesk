"use client";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

export default function ContactForm() {
  // const form = useRef<HTMLFormElement>(null);
  // const [isSent, setIsSent] = useState(false);
  // const [error, setError] = useState(false);

  // const sendEmail = (e: React.FormEvent) => {
  //   const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  //   const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  //   const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
  //   e.preventDefault();

  //   if (!form.current) return;

  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
  //     () => {
  //       setIsSent(true);
  //       setError(false);
  //       form.current?.reset();
  //     },
  //     () => {
  //       setError(true);
  //     }
  //   );
  // };

  return (
    <section className="bg-[#092327] relative px-4 pb-20 z-0">
      <div className="absolute inset-0 bg-pattern-grids pointer-events-none -z-1" />
      <div className="max-w-3xl mx-auto">
        <form
          // ref={form}
          // onSubmit={sendEmail}
          className="bg-[#f0ece1] p-6 rounded-xl shadow-lg space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#092327] mb-1">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full border border-[#092327] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c97f4e]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#092327] mb-1">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full border border-[#092327] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c97f4e]"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#092327] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="user_phone"
                className="w-full border border-[#092327] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c97f4e]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#092327] mb-1">
                Service Interested In
              </label>
              <select
                name="user_service"
                required
                className="w-full border border-[#092327] rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#c97f4e]"
              >
                <option value="">Select a service</option>
                <option value="Wedding">Wedding</option>
                <option value="Ad Shoots">Ad Shoots</option>
                <option value="Food">Food</option>
                <option value="Design">Design</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#092327] mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full border border-[#092327] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c97f4e]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#092327] text-white py-3 rounded-md font-medium hover:bg-[#b76b3e] transition hover:cursor-pointer"
          >
            Send Message
          </button>
          {/* {isSent && (
            <p className="text-green-600 text-sm mt-2 text-center">
              ✅ Your message was sent successfully!
            </p>
          )} */}
          {/* {error && (
            <p className="text-red-600 text-sm mt-2 text-center">
              ❌ Something went wrong. Please try again later.
            </p>
          )} */}
        </form>
      </div>
    </section>
  );
}
