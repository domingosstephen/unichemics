import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Sociedade Teoflor Chemi. Read our terms of use, ordering policies, and shipping conditions.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">&rsaquo;</span> Terms & Conditions
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Terms & Conditions</h1>
          <p className="text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate">
          <h2>1. General</h2>
          <p>These terms and conditions govern the use of the Sociedade Teoflor Chemi website and any purchase agreements entered into through our platform. By using this website, you agree to these terms.</p>

          <h2>2. Product Information</h2>
          <p>Product specifications, descriptions, and images on this website are provided for general reference. Actual product specifications are confirmed in the formal quotation and accompanying documentation (Certificate of Analysis, Safety Data Sheet).</p>

          <h2>3. Quotations & Orders</h2>
          <p>All prices quoted are subject to confirmation at the time of order. Quotations are valid for the period specified in the quote document. Orders are confirmed only upon written acceptance by Sociedade Teoflor Chemi.</p>

          <h2>4. Payment Terms</h2>
          <p>Payment terms are established on a per-order basis and specified in the formal quotation. Standard terms include advance payment, letter of credit, and agreed credit terms for established accounts.</p>

          <h2>5. Shipping & Delivery</h2>
          <p>We offer FOB, CIF, CFR, and DDP shipping terms. Delivery timelines are estimates and may vary based on product availability, manufacturing schedules, and logistics conditions. All chemical shipments comply with IMDG and ADR regulations.</p>

          <h2>6. Quality & Documentation</h2>
          <p>All products are supplied with Certificates of Analysis (CoA) and Safety Data Sheets (SDS). Quality claims must be reported within 14 days of receipt. Products must be stored and handled according to SDS guidelines.</p>

          <h2>7. Limitation of Liability</h2>
          <p>Sociedade Teoflor Chemi shall not be liable for indirect, incidental, or consequential damages arising from the use of products supplied. Our liability is limited to the value of the goods in question.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of Spain. Any disputes shall be resolved through arbitration in Girona, Spain.</p>

          <h2>9. Contact</h2>
          <p>For questions about these terms, contact us at <a href="mailto:contact@sociedadeteoflorchemi.com">contact@sociedadeteoflorchemi.com</a>.</p>
        </div>
      </section>
    </>
  );
}
