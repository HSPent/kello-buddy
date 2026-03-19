import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-spring-pink/40 via-[#fdf2f7] to-white relative overflow-hidden">
      {/* Soft Decorative Globs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] translate-x-1/2 pointer-events-none" />

      <div className="w-full relative z-10 px-0 sm:px-4 md:px-0">
        <ScrollReveal width="100%">
          <div className="relative w-full overflow-hidden shadow-[0_20px_60px_-15px_rgba(168,68,141,0.12)] border-y border-white/60 bg-white group">
            <img 
              src="/그래프11.png" 
              alt="글로벌 관광객 유입과 K-뷰티 소비 트렌드" 
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.002] image-render-high"
              style={{ imageRendering: 'auto', WebkitBackfaceVisibility: 'hidden' }}
            />
            {/* Subtle gloss overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-white/10 pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
