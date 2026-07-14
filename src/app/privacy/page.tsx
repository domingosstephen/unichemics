import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Sociedade Teoflor Chemi. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="text-blue-400 hover:underline">Home</Link>
            <span className="mx-2">&rsaquo;</span> Privacy Policy
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate">
          <h2>1. Information We Collect</h2>
          <p>When you submit a quote request or contact form on our website, we collect the information you provide, including your name, email address, phone number, company name, country, and details about the products you are interested in.</p>
          <p>We also collect standard web analytics data such as IP address, browser type, pages visited, and referring URL to improve our website performance.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Respond to your quote requests and inquiries</li>
            <li>Provide pricing, product availability, and shipping information</li>
            <li>Communicate about orders, shipments, and account matters</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses HTTPS encryption for all data transmission.</p>

          <h2>5. Cookies</h2>
          <p>Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.</p>

          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:contact@sociedadeteoflorchemi.com">contact@sociedadeteoflorchemi.com</a>.</p>

          <h2>7. Contact</h2>
          <p>For questions about this privacy policy, contact us at:</p>
          <p>Sociedade Teoflor Chemi<br />Poligon Industrial Mas Xirgu, Carrer Can Pau Birol, 101<br />17005 Girona, Spain<br />Email: <a href="mailto:contact@sociedadeteoflorchemi.com">contact@sociedadeteoflorchemi.com</a></p>
        </div>
      </section>
    </>
  );
}
