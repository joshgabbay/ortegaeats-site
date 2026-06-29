"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/gh/app/ortegaeats/id6760243825";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`opacity-0 ${className}`}>
      {children}
    </section>
  );
}

function AppStoreButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-charcoal text-white px-7 py-4 rounded-2xl hover:bg-black transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-glow ${className}`}
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] uppercase tracking-wider opacity-80">
          Download on the
        </div>
        <div className="text-lg font-semibold -mt-1">App Store</div>
      </div>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="animate-float relative">
      {/* Phone frame */}
      <div className="relative w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] md:w-[300px] md:h-[600px] bg-charcoal rounded-[2.5rem] sm:rounded-[3rem] p-2.5 sm:p-3 shadow-2xl shadow-navy/30">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-charcoal rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="h-12 bg-off-white" />
          {/* App content mockup */}
          <div className="flex-1 px-5 py-4 bg-off-white">
            <div className="text-xl font-extrabold text-charcoal mb-1">
              Ortega Menu
            </div>
            <div className="text-xs text-mist mb-4">Pick your meal</div>

            {/* Menu cards */}
            {[
              { name: "Classic Burger", price: "$7", emoji: "🍔" },
              { name: "Grilled Chicken Bowl", price: "$7", emoji: "🍗" },
              { name: "Veggie Wrap", price: "$7", emoji: "🌯" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 mb-3 flex items-center gap-3 shadow-sm border border-gray-100"
              >
                <div className="text-3xl">{item.emoji}</div>
                <div className="flex-1">
                  <div className="font-bold text-sm text-charcoal">
                    {item.name}
                  </div>
                  <div className="text-xs text-mist">Ortega Dining</div>
                </div>
                <div className="text-sm font-extrabold text-sea-green">
                  {item.price}
                </div>
              </div>
            ))}

            {/* Order button */}
            <div className="mt-4 bg-gold rounded-2xl py-3 text-center">
              <span className="text-navy font-bold text-sm">
                Place Order
              </span>
            </div>
          </div>
          {/* Tab bar */}
          <div className="h-16 bg-white border-t border-gray-100 flex items-center justify-around px-6">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-gold" />
              <div className="text-[9px] mt-1 text-navy font-bold">Order</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-gray-200" />
              <div className="text-[9px] mt-1 text-gray-400">Help</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-gray-200" />
              <div className="text-[9px] mt-1 text-gray-400">Profile</div>
            </div>
          </div>
        </div>
      </div>
      {/* Glow effect behind phone */}
      <div className="absolute -inset-8 bg-gold/20 rounded-full blur-3xl -z-10" />
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] md:hidden" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="absolute top-0 right-0 w-72 h-full bg-white shadow-2xl p-8 pt-20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-off-white"
        >
          <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col gap-6">
          {[
            { href: "#how-it-works", label: "How It Works" },
            { href: "#pricing", label: "Pricing" },
            { href: "#earn", label: "Earn Money" },
            { href: "#faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-lg font-semibold text-charcoal hover:text-navy transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://www.instagram.com/ortega.eats/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-charcoal hover:text-navy transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
          <hr className="border-gray-100" />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-white px-5 py-3 rounded-xl text-center font-bold hover:bg-navy-light transition-colors"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="overflow-x-hidden">
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* ============ NAV ============ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/icon.png"
              alt="OrtegaEats"
              width={36}
              height={36}
              className="rounded-xl sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-extrabold">
              <span className="text-navy">Ortega</span>
              <span className="text-gold">Eats</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-charcoal/70 hover:text-navy transition-colors"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-charcoal/70 hover:text-navy transition-colors"
            >
              Pricing
            </a>
            <a
              href="#earn"
              className="text-sm font-medium text-charcoal/70 hover:text-navy transition-colors"
            >
              Earn Money
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-charcoal/70 hover:text-navy transition-colors"
            >
              FAQ
            </a>
            <a
              href="https://www.instagram.com/ortega.eats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-navy transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-navy text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-navy-light transition-colors"
            >
              Download
            </a>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-off-white"
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy animate-gradient" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-aqua rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Live at UCSB — Ortega Dining Commons
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.08] mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
              Ortega meals{" "}
              <span className="text-gold">for $7.</span>
              <br />
              <span className="text-white/80">No meal plan needed.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
              Someone with a meal plan picks up your food from Ortega Dining
              Commons. You get a real dining hall meal for just $7 — delivered
              through the app.
            </p>

            <div className="animate-fade-in-up animation-delay-600">
              <AppStoreButton />
            </div>
          </div>

          {/* Phone — hidden on very small screens, shown from sm up */}
          <div className="flex-shrink-0 animate-fade-in-up animation-delay-400 hidden sm:block">
            <PhoneMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ============ SOCIAL PROOF BAR ============ */}
      <section className="bg-white py-6 sm:py-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-navy">$7</div>
            <div className="text-xs sm:text-sm text-charcoal/50 font-medium">
              Flat price per meal
            </div>
          </div>
          <div className="w-px h-8 sm:h-10 bg-gray-200" />
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-navy">10AM–8PM</div>
            <div className="text-xs sm:text-sm text-charcoal/50 font-medium">
              Available daily
            </div>
          </div>
          <div className="w-px h-8 sm:h-10 bg-gray-200 hidden sm:block" />
          <div className="hidden sm:block">
            <div className="text-2xl sm:text-3xl font-extrabold text-navy">UCSB</div>
            <div className="text-xs sm:text-sm text-charcoal/50 font-medium">
              Ortega Dining Commons
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY NOT DOORDASH ============ */}
      <Section className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
              Why pay <span className="text-coral line-through decoration-2">$25</span> when you can pay <span className="text-gold">$7</span>?
            </h2>
            <p className="text-base sm:text-lg text-charcoal/50 max-w-xl mx-auto">
              Delivery apps charge insane fees. OrtegaEats doesn&apos;t.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {/* Competitor 1 */}
            <div className="bg-off-white rounded-2xl p-6 sm:p-8 text-center border border-gray-100 opacity-60">
              <div className="text-2xl mb-3">🚗</div>
              <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2">DoorDash</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-charcoal/40 mb-1">~$22</div>
              <div className="text-xs text-charcoal/30 leading-relaxed">
                $12 food + $5 delivery + $3 service fee + tip
              </div>
            </div>

            {/* Competitor 2 */}
            <div className="bg-off-white rounded-2xl p-6 sm:p-8 text-center border border-gray-100 opacity-60">
              <div className="text-2xl mb-3">🛵</div>
              <div className="text-sm font-bold text-charcoal/50 uppercase tracking-wider mb-2">UberEats</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-charcoal/40 mb-1">~$25</div>
              <div className="text-xs text-charcoal/30 leading-relaxed">
                $14 food + $5 delivery + $4 fees + tip
              </div>
            </div>

            {/* OrtegaEats */}
            <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-2xl p-6 sm:p-8 text-center border-2 border-gold shadow-xl shadow-gold/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-extrabold px-3 py-1 rounded-full">
                BEST VALUE
              </div>
              <div className="text-2xl mb-3">🎓</div>
              <div className="text-sm font-bold text-white/70 uppercase tracking-wider mb-2">OrtegaEats</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-gold mb-1">$7</div>
              <div className="text-xs text-white/50 leading-relaxed">
                Full dining hall meal. No delivery fee. No tip. No BS.
              </div>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-charcoal/40 mt-8 max-w-md mx-auto">
            That&apos;s up to 70% cheaper than delivery apps — and you get real dining hall food, not reheated leftovers.
          </p>
        </div>
      </Section>

      {/* ============ TRUST BADGES ============ */}
      <section className="bg-off-white py-10 sm:py-14 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Secure Payments",
                desc: "Powered by Stripe",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
                title: "Built by Students",
                desc: "Made at UCSB",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: "Peer-to-Peer",
                desc: "Student to student",
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Instant Orders",
                desc: "No wait, no delivery",
              },
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                  {badge.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-charcoal">{badge.title}</div>
                  <div className="text-xs text-charcoal/40">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <Section
        id="how-it-works"
        className="py-16 sm:py-24 md:py-32 bg-off-white"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
              How it works
            </h2>
            <p className="text-lg text-charcoal/50 max-w-xl mx-auto">
              Three taps. One meal. No meal plan required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "📱",
                title: "Browse & Order",
                desc: "Open the app, browse the Ortega dining hall menu, and place your order. Pay $7 securely through the app.",
              },
              {
                step: "02",
                icon: "🤝",
                title: "A Helper Picks It Up",
                desc: "A student with a meal plan accepts your order and picks up your food from Ortega Dining Commons.",
              },
              {
                step: "03",
                icon: "🎉",
                title: "Scan & Enjoy",
                desc: "Your helper sends you a QR code. Scan it at pickup and enjoy your dining hall meal.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/5 transition-all duration-500"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <div className="text-xs font-bold text-gold tracking-widest uppercase mb-3">
                  Step {item.step}
                </div>
                <h3 className="text-xl font-extrabold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {item.desc}
                </p>
                {/* Accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ PRICING ============ */}
      <Section id="pricing" className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="relative bg-gradient-to-br from-navy to-navy-light rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 md:p-16 overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-aqua/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                  One price.{" "}
                  <span className="text-gold">Every meal.</span>
                </h2>
                <p className="text-lg text-white/60 max-w-md mb-8 leading-relaxed">
                  No hidden fees, no surge pricing, no subscriptions. Every
                  meal from Ortega is a flat $7. That&apos;s it.
                </p>
                <AppStoreButton />
              </div>

              {/* Price card */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-3xl p-10 text-center shadow-2xl shadow-black/20 min-w-[260px]">
                  <div className="text-sm font-bold text-gold uppercase tracking-widest mb-2">
                    Per meal
                  </div>
                  <div className="text-7xl font-extrabold text-navy mb-2">
                    $7
                  </div>
                  <div className="text-sm text-charcoal/50 mb-6">
                    Flat rate, always
                  </div>
                  <div className="space-y-3 text-left">
                    {[
                      "Full dining hall meal",
                      "Secure in-app payment",
                      "No meal plan required",
                      "No hidden fees",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className="w-5 h-5 bg-sea-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-sea-green"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-charcoal/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ EARN MONEY ============ */}
      <Section id="earn" className="py-16 sm:py-24 md:py-32 bg-off-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
              Have a meal plan?{" "}
              <span className="text-gold">Earn money.</span>
            </h2>
            <p className="text-lg text-charcoal/50 max-w-xl mx-auto">
              Turn your unused swipes into cash. Help fellow students eat
              and get paid $5 per order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Earnings card */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-extrabold text-charcoal mb-2">
                $5 per order
              </h3>
              <p className="text-charcoal/60 leading-relaxed mb-6">
                Every order you fulfill earns you $5, paid directly to your
                Venmo or Zelle. No caps, no limits.
              </p>
              <div className="bg-off-white rounded-2xl p-5">
                <div className="text-xs font-bold text-mist uppercase tracking-wider mb-3">
                  Quick math
                </div>
                <div className="space-y-2">
                  {[
                    { orders: "2 orders/day", amount: "$10/day" },
                    { orders: "10 orders/week", amount: "$50/week" },
                    { orders: "40 orders/month", amount: "$200/month" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-charcoal/60">
                        {item.orders}
                      </span>
                      <span className="text-sm font-extrabold text-sea-green">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to start */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-extrabold text-charcoal mb-2">
                How to start helping
              </h3>
              <p className="text-charcoal/60 leading-relaxed mb-6">
                It takes 2 minutes to set up. Start earning between classes.
              </p>
              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    text: "Download the app & create an account",
                  },
                  {
                    num: "2",
                    text: "Set up your Venmo or Zelle for payouts",
                  },
                  {
                    num: "3",
                    text: "Toggle on Helper Mode when you're near Ortega",
                  },
                  {
                    num: "4",
                    text: "Accept orders, pick up food, and get paid",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-extrabold text-navy">
                        {item.num}
                      </span>
                    </div>
                    <span className="text-charcoal/70 text-sm pt-1">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ FAQ ============ */}
      <Section id="faq" className="py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal mb-4">
              Questions?
            </h2>
            <p className="text-lg text-charcoal/50">
              Everything you need to know.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Do I need a meal plan to order?",
                a: "Nope! That's the whole point. You order through the app, pay $7, and someone with a meal plan picks up the food for you from Ortega Dining Commons.",
              },
              {
                q: "How do I get my food?",
                a: "After a helper picks up your order, they'll send you a QR code through the app. You scan it at the dining hall to collect your meal.",
              },
              {
                q: "What dining halls are available?",
                a: "We're currently available at Ortega Dining Commons at UCSB, with plans to expand to more locations.",
              },
              {
                q: "When can I order?",
                a: "Orders are available daily from 10 AM to 8 PM, split into two fulfillment windows: 10 AM – 2 PM and 2 PM – 8 PM.",
              },
              {
                q: "How do helpers get paid?",
                a: "Helpers earn $5 per fulfilled order, paid directly to their Venmo or Zelle account by midnight the same day.",
              },
              {
                q: "Is this affiliated with UCSB?",
                a: "OrtegaEats is not affiliated with UCSB or university dining services. We're an independent platform built by students, for students.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-off-white rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-gold/5 transition-colors">
                  <span className="font-bold text-charcoal pr-4">
                    {item.q}
                  </span>
                  <svg
                    className="w-5 h-5 text-charcoal/30 flex-shrink-0 group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-charcoal/60 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Image
            src="/icon.png"
            alt="OrtegaEats"
            width={80}
            height={80}
            className="rounded-2xl mx-auto mb-8 shadow-xl shadow-black/20"
          />
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Ready to eat for{" "}
            <span className="text-gold">$7</span>?
          </h2>
          <p className="text-lg text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
            Download OrtegaEats and get your first meal from Ortega Dining
            Commons today. No meal plan required.
          </p>
          <AppStoreButton className="mx-auto" />
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-charcoal text-white/50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/icon.png"
                alt="OrtegaEats"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-sm font-bold text-white/70">
                <span className="text-white">Ortega</span>
                <span className="text-gold">Eats</span>
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="mailto:ortegaeatscontact@gmail.com"
                className="hover:text-white transition-colors"
              >
                ortegaeatscontact@gmail.com
              </a>
              <a
                href="https://www.instagram.com/ortega.eats/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                App Store
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-xs text-white/30">
            <div className="text-center mb-4">
              &copy; {new Date().getFullYear()} OrtegaEats. All rights reserved.
            </div>
            <div className="max-w-3xl mx-auto space-y-3 leading-relaxed">
              <p>
                OrtegaEats is an independent, student-built platform and is not affiliated with,
                endorsed by, or associated with the University of California, Santa Barbara (UCSB),
                UC Regents, or any university dining services. All university names, dining hall names,
                and related trademarks are the property of their respective owners and are used here
                solely for purposes of identifying the location of service.
              </p>
              <p>
                Use of OrtegaEats is at your own risk. OrtegaEats acts solely as a technology platform
                connecting users and does not prepare, handle, or guarantee the quality or safety of any
                food. OrtegaEats makes no warranties, express or implied, regarding the service,
                including but not limited to merchantability, fitness for a particular purpose, or
                food safety. By using OrtegaEats, you acknowledge and agree that you assume all risk
                associated with meal transactions facilitated through the platform. OrtegaEats shall
                not be liable for any damages, claims, or losses arising from the use of the service.
                Users are responsible for complying with all applicable university policies and local
                regulations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
