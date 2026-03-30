import { motion } from "framer-motion";
import { Globe, Phone, TicketPercent, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import KelloText from "./KelloText";
import ScrollReveal from "./ScrollReveal";

const HeroSection = () => {
  return (
    <section className="bg-spring-pink flex flex-col w-full relative">
      {/* Top Video Area */}
      <div className="relative w-full h-[45vh] lg:h-[55vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback if video tag is not supported */}
          <img src={heroBg} alt="한국 거리를 즐기는 외국인 관광객들" className="w-full h-full object-cover" />
        </video>
        {/* Soft gradient to blend with the dark background below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(350_40%_98%)] via-white/20 to-transparent" />
      </div>

      {/* Content Area Below the Video */}
      <div className="container relative z-10 mx-auto px-6 pb-24 pt-12 md:pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >


          <ScrollReveal delay={0.4}>
            <h1 className="text-[20px] sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 break-keep drop-shadow-xl text-center flex flex-col items-center">
              <div className="flex items-center gap-2 sm:gap-4 mb-4 whitespace-nowrap px-4 scale-[0.9] sm:scale-100 origin-center">
                <span className="text-black">
                  <span className="text-primary">K</span> - beauty의 첫 H<span className="text-primary">e</span><span className="text-primary">ll</span><span className="text-primary">o</span>
                </span>
                <img 
                  src="/content.png" 
                  alt="Kello Hand" 
                  className="h-10 w-10 sm:h-28 sm:w-28 md:h-32 md:w-32 drop-shadow-lg animate-bounce-subtle shrink-0"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <span className="block text-black px-4 whitespace-nowrap scale-[0.9] sm:scale-100 origin-center mt-4 sm:mt-6">
                이제, 외국인 손님이 <span className="text-primary">매출</span>이 됩니다
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <p className="text-base sm:text-lg md:text-2xl text-black/70 leading-relaxed mb-10 font-bold max-w-4xl mx-auto break-keep px-4">
              외국인 손님 매출을 한번에 해결할 "Kello"을 만나보세요!
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <button
              onClick={() => window.dispatchEvent(new Event('open-promo-popup'))}
              className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-6 py-4 md:px-8 md:py-5 rounded-full text-base md:text-xl shadow-kello-glow hover:scale-105 transition-transform relative z-10"
            >
              <Phone className="h-5 w-5 md:h-6 md:w-6" />
              외국인 고객 받고 매출 올리기
            </button>
          </ScrollReveal>

          <ScrollReveal delay={1.0}>
            <div className="mt-4 flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/60 tracking-tight"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary/70" />
              <span>신청 1분 <span className="mx-1 text-foreground/30">·</span> 확인 후 순차 연락 <span className="mx-1 text-foreground/30">·</span> DM 문의 가능</span>
            </div>
          </ScrollReveal>


        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
