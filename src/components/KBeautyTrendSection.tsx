import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList, AreaChart, Area, Tooltip as RechartsTooltip } from "recharts";

const stats = [
  {
    title: "전체 외국인 관광객 수",
    mainVal: "2024년 1,700만 명",
    subTitle: "방한 외래 관광객 수",
    subContent: (
      <div className="w-full flex flex-col items-center justify-between h-full min-h-[140px] mt-auto">
        <div className="relative w-full h-[90px] sm:h-[100px] flex flex-grow items-end justify-center mb-3">
          <svg viewBox="0 0 120 80" className="w-full h-full overflow-visible">
            {/* Main Curve (Mathematically precise smooth curve) */}
            <path d="M 0 55 Q 12 55, 24 52 T 48 45 T 72 35 T 96 20 T 120 5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Data Points - perfectly intersecting the curve */}
            {[
              { x: 0,   y: 55, yr: "2021" },
              { x: 24,  y: 52, yr: "2022" },
              { x: 48,  y: 45, yr: "2023" },
              { x: 72,  y: 35, yr: "2024" },
              { x: 96,  y: 20, yr: "2025" },
              { x: 120, y: 5,  yr: "2026" }
            ].map((p, i) => (
              <g key={i}>
                <circle cx={p.x} cy={p.y} r="3" fill="#fff" stroke="hsl(var(--primary))" strokeWidth="1.5" className="drop-shadow-sm" />
                <text x={p.x} y="72" textAnchor="middle" className="text-[9px] fill-muted-foreground font-bold font-sans">{p.yr}</text>
              </g>
            ))}

            {/* "?" Tooltip - perfectly centered over 2026 */}
            <foreignObject x="105" y="-18" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center">
                <div className="bg-rose-500 text-white text-[13px] font-black w-7 h-7 rounded-md shadow-lg flex items-center justify-center leading-none relative">
                  ?
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-500 rotate-45" />
                </div>
              </div>
            </foreignObject>
          </svg>
        </div>
        <div className="w-full flex justify-center pb-1">
          <p className="text-[11px] sm:text-[12px] font-bold text-rose-400 italic bg-rose-50/50 py-1.5 px-3 rounded-full border border-rose-100/50 w-full text-center break-keep leading-tight shadow-[0_2px_8px_rgba(255,228,230,0.5)]">
            "2024년 1,700만 명 &gt;&gt; 2026년 1,800만명~2,000만 명 사이 추정"
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "미용·뷰티 이용자 수 및 비중",
    mainVal: "약 250만 명",
    subTitle: "미용 서비스 이용자 수",
    extra: (
      <div className="flex flex-col items-center w-full h-full justify-center min-h-[140px] mt-auto">
        <div className="flex items-center justify-center gap-4 sm:gap-6 w-full pb-0">
          <div className="relative w-24 h-24 sm:w-[100px] sm:h-[100px] shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-md">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#fce7f3" strokeWidth="3.5" />
              <motion.circle
                cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="3.5"
                strokeDasharray="100 100" strokeDashoffset="85" strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 85 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[13px] sm:text-[15px] font-black text-rose-500 mt-0.5">15%</div>
          </div>
          <div className="text-left flex flex-col justify-center">
            <p className="text-[13px] sm:text-[15px] font-black text-muted-foreground leading-tight mb-1.5 break-keep">전체 관광객 중 비중</p>
            <p className="text-[28px] sm:text-[34px] font-black text-rose-500 tracking-tight leading-none">약 15%</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "1인당 미용 목적 평균 지출",
    mainVal: "153만 원",
    subTitle: " ",
    extra: (
      <div className="space-y-2 sm:space-y-3 w-full h-full flex flex-col justify-end min-h-[140px] mt-auto">
        <div className="flex items-center gap-3 sm:gap-4 bg-white/60 p-3 sm:p-4 rounded-2xl border border-white shadow-sm w-full">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-xl sm:text-[24px] shadow-inner">💳</div>
          <div className="text-left flex-1 space-y-0.5">
            <p className="text-[12px] sm:text-[13px] font-bold text-muted-foreground leading-tight">미용목적 카드 사용액 평균</p>
            <p className="text-[15px] sm:text-[17px] font-black text-primary leading-tight">153만 원</p>
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 bg-white/60 p-3 sm:p-4 rounded-2xl border border-white shadow-sm w-full">
          <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-rose-50 flex items-center justify-center text-xl sm:text-[24px] shadow-inner">🛍️</div>
          <div className="text-left flex-1 space-y-0.5">
            <p className="text-[12px] sm:text-[13px] font-bold text-muted-foreground leading-tight">한국 내 전체 카드 사용액 평균</p>
            <p className="text-[15px] sm:text-[17px] font-black text-rose-500 leading-tight">399만 원</p>
          </div>
        </div>
      </div>
    ),
  },
];

const KBeautyTrendSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF5F7] to-[#FFE3EC] relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">🌸</div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none text-2xl">🌸</div>
      <div className="absolute top-1/2 right-1/4 opacity-10 pointer-events-none text-xl">✨</div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 break-keep">
              글로벌 관광객 유입과 <br className="sm:hidden" /> <span className="text-rose-500">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg sm:text-xl font-bold text-muted-foreground break-keep">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Stats Cards - Standardized Design System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14 max-w-[1300px] mx-auto items-stretch w-full px-4">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction="up" width="100%" className="flex h-full !w-full [&>div]:w-full">
              <div className="flex-1 w-full bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-5 sm:p-8 border-2 border-white shadow-xl flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-300">
                
                {/* ── Fixed Height Common Header (Title/Value/Subtitle) ── */}
                <div className="flex flex-col items-center w-full mb-4 sm:mb-6">
                  {/* Container for title and main value to perfectly align baselines without excessive height */}
                  <div className="min-h-[4.5rem] sm:min-h-[5.5rem] flex flex-col justify-start items-center">
                    <h3 className="text-[17px] sm:text-[19px] md:text-[20px] font-black text-foreground/80 mb-2 break-keep leading-tight px-1 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[26px] sm:text-[34px] md:text-[40px] font-black text-rose-600 tracking-tighter leading-none whitespace-nowrap">
                      {s.mainVal}
                    </p>
                  </div>
                  {/* Subtle space for subtitle */}
                  <div className="h-5 flex items-center justify-center mt-1">
                    <p className="text-[14px] sm:text-[15px] font-bold text-muted-foreground break-keep leading-none whitespace-nowrap">
                      {s.subTitle || " "}
                    </p>
                  </div>
                </div>

                {/* ── Standardized Bottom Content Area (Compact) ── */}
                <div className="w-full flex-grow flex flex-col items-center justify-end border-t border-rose-100 pt-4 sm:pt-6 mt-auto">
                  {s.subContent || s.extra}
                </div>
                
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Charts Container */}
        <ScrollReveal width="100%" delay={0.2}>
          <div className="w-full mx-auto">
            <div className="text-center mb-10 max-w-[1300px] mx-auto px-4">
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">미용·뷰티 이용객 및 매출 성장 추이</h3>
              <div className="w-16 h-1 bg-rose-300 mx-auto mt-3 rounded-full" />
            </div>

            {/* Image Replacement for Charts */}
            <div className="w-full max-w-[1400px] mx-auto px-4 mt-4 sm:mt-8">
              <img 
                src="/fff.png" 
                alt="미용·뷰티 이용객 및 매출 성장 추이 그래프" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative bottom */}
        <div className="mt-16 flex justify-center gap-6 opacity-15 pointer-events-none text-3xl">
          <span className="animate-pulse">🌸</span>
          <span className="animate-bounce">🌸</span>
          <span className="animate-pulse delay-75">🌸</span>
        </div>
      </div>
    </section>
  );
};

export default KBeautyTrendSection;
