import Image from "next/image";

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
          OrtegaEats is on pause. Check back here shortly.
        </p>

        <a
          href="mailto:ortegaeatscontact@gmail.com"
          className="text-sm text-white/60 hover:text-white transition-colors"
        >
          ortegaeatscontact@gmail.com
        </a>
      </div>
    </main>
  );
}
