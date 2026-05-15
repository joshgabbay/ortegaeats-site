import Image from "next/image";

const APP_STORE_URL =
  "https://apps.apple.com/gh/app/ortegaeats/id6760243825";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-navy px-6 py-16">
      <div className="max-w-lg w-full text-center">
        <Image
          src="/icon.png"
          alt="OrtegaEats"
          width={80}
          height={80}
          className="rounded-2xl mx-auto mb-8 shadow-xl shadow-black/20"
        />

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          Temporarily unavailable
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          We&apos;ll be back <span className="text-gold">soon.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10">
          OrtegaEats is on pause. The iOS app is still available
          on the App Store — check back here shortly.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal text-white px-7 py-4 rounded-2xl hover:bg-black transition-colors"
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

          <a
            href="mailto:ortegaeatscontact@gmail.com"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            ortegaeatscontact@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
