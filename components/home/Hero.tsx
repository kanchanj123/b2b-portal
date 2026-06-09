import Image from "next/image";
export default function Hero() {
  return (
    <section className="relative h-[500px]">

      <Image
        src="/images/hero-banner.webp"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />

      {/* <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">
          India's B2B Marketplace
        </h1>
      </div> */}

    </section>
  );
}