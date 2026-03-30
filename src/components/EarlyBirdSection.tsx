import { motion } from "framer-motion";
import { Zap, Star, Video, TicketPercent, CheckCircle2 } from "lucide-react";
import KelloText from "./KelloText";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: Zap,
    title: "2026년 이용료 0원",
    desc: "2026년까지 모든 서비스 이용료가 면제됩니다.",
  },
  {
    icon: Star,
    title: "상단 우선 노출 혜택",
    desc: "K-뷰티 카테고리 최상단 노출 및 '추천 매장' 인증 마크를 부여해 드립니다.",
  },
  {
    icon: Video,
    title: "숏폼 홍보 지원",
    desc: "외국인 관광객의 시선을 끄는 숏폼 콘텐츠 제작 및 플랫폼 홍보를 지원합니다.",
  },
];

const EarlyBirdSection = () => {
  return (
    <section className="py-24 bg-spring-yellow relative overflow-hidden" id="benefits">
      {/* Decorative floral elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-kello-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-amber-900 mb-8 break-keep leading-[1.15]">
              2026년은 <KelloText /> 뷰티 파트너에게<br className="hidden md:block" /> 
              <span className="text-primary border-b-4 border-primary">무료로 제공합니다.</span>
            </h2>
            <p className="text-xl md:text-2xl text-amber-900/80 font-bold leading-relaxed break-keep mb-4">
              제휴 매장이 <KelloText /> 서비스를 무료로 사용할 수 있습니다.
            </p>
            <div className="inline-flex items-center gap-2 py-3 px-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white font-black text-amber-900 shadow-sm mt-4">
              외국인 고객으로 매출상승의 기회, 바로 지금입니다 ✨
            </div>

            {/* K-Beauty Category Icons - Moved below */}
            <div className="flex justify-center items-start flex-nowrap gap-2 sm:gap-6 md:gap-10 lg:gap-12 mt-12 w-full max-w-[1400px] mx-auto px-4">
              {[
                { name: "헤어", src: "/헤어.png" },
                { name: "메이크업", src: "/메이크업.png" },
                { name: "에스테틱", src: "/에스테틱.png" },
                { name: "네일", src: "/네일.png" },
                { name: "속눈썹", src: "/속눈썹.png" },
              ].map((icon) => (
                <div key={icon.name} className="flex flex-col items-center gap-2 sm:gap-4 shrink w-[18%] sm:w-32 md:w-44 lg:w-52">
                  <div className="w-full aspect-square bg-white rounded-[1.2rem] sm:rounded-[2.5rem] shadow-sm hover:scale-105 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden ring-1 ring-black/5">
                    <img src={icon.src} alt={icon.name} className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  </div>
                  <span className="text-amber-900 font-black text-[11px] sm:text-base md:text-xl tracking-tight mt-1 text-center break-keep">{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 0.15} className="flex h-full w-full">
              <div className="flex-1 glass-card rounded-[2.5rem] p-10 border-white bg-white/40 hover:-translate-y-2 transition-transform duration-500 group shadow-lg flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <b.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-amber-900 mb-4">{b.title}</h3>
                <p className="text-amber-900/70 font-bold leading-relaxed break-keep text-lg">
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyBirdSection;
