"use client";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you! We will respond within 24 hours.");
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name *</label>
          <input type="text" required placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Company Name</label>
          <input type="text" placeholder="Your company" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Email *</label>
          <input type="email" required placeholder="you@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Country *</label>
        <input type="text" required placeholder="Your country" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-1">Product(s) of Interest *</label>
        <input type="text" required placeholder="e.g., Citric Acid, Sodium Cyanide, Urea" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Quantity Required</label>
          <input type="text" placeholder="e.g., 20 MT, 1 FCL" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Grade Required</label>
          <select className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50">
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
        <textarea placeholder="Packaging preferences, delivery schedule, specifications, etc." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm h-28 resize-y focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50" />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
        Submit Quote Request
      </button>
    </form>
  );
}
