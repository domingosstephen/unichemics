"use client";

import { useState } from "react";

const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Quote Request Received</h3>
        <p className="text-slate-500">Thank you! Our team will respond with pricing and availability within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const form = e.currentTarget;
        const data = new FormData(form);
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: JSON.stringify({
              access_key: WEB3FORMS_KEY,
              subject: `Quote Request — ${data.get("products")}`,
              from_name: data.get("name"),
              name: data.get("name"),
              company: data.get("company"),
              email: data.get("email"),
              phone: data.get("phone"),
              country: data.get("country"),
              products: data.get("products"),
              quantity: data.get("quantity"),
              grade: data.get("grade"),
              details: data.get("details"),
            }),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          if (res.ok) {
            setSubmitted(true);
          } else {
            window.location.href = `mailto:contact@sociedadeteoflorchemi.com?subject=Quote Request&body=${encodeURIComponent(
              `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCountry: ${data.get("country")}\nProducts: ${data.get("products")}\nQuantity: ${data.get("quantity")}\nGrade: ${data.get("grade")}\nDetails: ${data.get("details")}`
            )}`;
          }
        } catch {
          window.location.href = `mailto:contact@sociedadeteoflorchemi.com?subject=Quote Request&body=${encodeURIComponent(
            `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCountry: ${data.get("country")}\nProducts: ${data.get("products")}\nQuantity: ${data.get("quantity")}\nGrade: ${data.get("grade")}\nDetails: ${data.get("details")}`
          )}`;
        } finally {
          setSubmitting(false);
        }
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name *</label>
          <input name="name" type="text" required placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <input name="company" type="text" placeholder="Your company" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Email *</label>
          <input name="email" type="email" required placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Country *</label>
        <input name="country" type="text" required placeholder="Your country" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Product(s) of Interest *</label>
        <input name="products" type="text" required placeholder="e.g., Citric Acid, Sodium Cyanide, Urea" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Quantity Required</label>
          <input name="quantity" type="text" placeholder="e.g., 20 MT, 1 FCL" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Grade Required</label>
          <select name="grade" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50">
            <option>Select grade...</option>
            <option>Technical Grade</option>
            <option>Food Grade (FCC)</option>
            <option>Pharmaceutical Grade (USP/EP)</option>
            <option>Reagent Grade (ACS)</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-1">Additional Details</label>
        <textarea name="details" placeholder="Packaging preferences, delivery schedule, specifications, etc." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm h-28 resize-y focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        {submitting ? "Sending..." : "Submit Quote Request"}
      </button>
    </form>
  );
}
