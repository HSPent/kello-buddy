import React, { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
const CountUpText = ({ endValue, duration = 1.5, delay = 0.5 }: { endValue: number, duration?: number, delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, endValue, { duration, delay, ease: "easeOut" });
    return controls.stop;
  }, [count, endValue, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
};

const stats = [
  {
    title: "전체 외국인 관광객 수",
    mainVal: "2024년 1,700만 명",
    subTitle: "방한 외래 관광객 수",
    subContent: (
      <div className="w-full flex flex-col items-center justify-between h-full min-h-[140px] mt-auto">
        <div className="relative w-full h-[90px] sm:h-[100px] flex flex-grow items-end justify-center mb-3">
          <svg viewBox="0 0 120 80" className="w-full h-full overflow-visible">
            {/* Main Curve */}
            <motion.path 
              d="M 0 55 Q 12 55, 24 52 T 48 45 T 72 35 T 96 20 T 120 5" 
              fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />
            
            {/* Data Points */}
            {[
              { x: 0,   y: 55, yr: "2021" },
              { x: 24,  y: 52, yr: "2022" },
              { x: 48,  y: 45, yr: "2023" },
              { x: 72,  y: 35, yr: "2024" },
              { x: 96,  y: 20, yr: "2025" },
              { x: 120, y: 5,  yr: "2026" }
            ].map((p, i) => (
              <g key={i}>
                <motion.circle 
                  cx={p.x} cy={p.y} r="3.5" fill="#fff" stroke="hsl(var(--primary))" strokeWidth="1.5" className="drop-shadow-sm" 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: 0.2 + (i * 0.3) }}
                />
                <text x={p.x} y="72" textAnchor="middle" className="text-[9px] fill-muted-foreground font-bold font-sans">{p.yr}</text>
              </g>
            ))}

            {/* "?" Tooltip */}
            <foreignObject x="105" y="-18" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center">
                <motion.div 
                  className="bg-rose-500 text-white text-[13px] font-black w-7 h-7 rounded-md shadow-lg flex items-center justify-center leading-none relative"
                  initial={{ scale: 0, y: 10 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 2, stiffness: 200, damping: 12 }}
                >
                  ?
                  <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-rose-500 rotate-45" />
                </motion.div>
              </div>
            </foreignObject>
          </svg>
        </div>
        <div className="w-full flex justify-center pb-1">
          <p className="text-[10px] sm:text-[11px] font-bold text-rose-400 italic bg-rose-50/50 py-1.5 px-3 rounded-full border border-rose-100/50 w-full text-center break-keep leading-tight shadow-[0_2px_8px_rgba(255,228,230,0.5)]">
            "2024년 1,700만명 &gt;&gt; 2026년 대폭 상승 추정"
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "미용·뷰티 이용자 수 및 비중",
    mainVal: "약 250만 명",
    subTitle: "미용 서비스 이용자 수",
    subContent: (
      <div className="flex flex-col items-center w-full h-full justify-center min-h-[140px] mt-auto">
        <div className="flex items-center justify-start gap-3 sm:gap-4 w-full px-2">
          <div className="relative w-20 h-20 sm:w-[90px] sm:h-[90px] shrink-0">
            <svg viewBox="0 0 36 36" className="w-full h-full drop-shadow-md transform -rotate-90">
              <circle cx="18" cy="18" r="16" fill="none" stroke="#fce7f3" strokeWidth="3.5" />
              <motion.circle
                cx="18" cy="18" r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="3.5"
                strokeDasharray="100 100" strokeDashoffset="100" strokeLinecap="round"
                initial={{ strokeDashoffset: 100 }}
                whileInView={{ strokeDashoffset: 85 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[14px] font-black text-rose-500 mt-0.5">
              <CountUpText endValue={15} duration={1.5} delay={0.4} />%
            </div>
          </div>
          <div className="text-left flex flex-col justify-center">
            <p className="text-[12px] sm:text-[14px] font-black text-muted-foreground leading-tight mb-1.5 break-keep">전체 관광객 중 비중</p>
            <p className="text-[24px] sm:text-[28px] font-black text-rose-500 tracking-tight leading-none">
              약 <CountUpText endValue={15} duration={1.5} delay={0.4} />%
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "1인당 미용 목적 평균 지출",
    mainVal: "153만 원",
    subTitle: "결제 데이터 분석",
    subContent: (
      <div className="space-y-2 sm:space-y-3 w-full h-full flex flex-col justify-end min-h-[140px] mt-auto">
        <div className="flex items-center gap-3 bg-[#F8F9FB] p-3 rounded-2xl w-full border border-slate-100">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-lg sm:text-xl">💳</div>
          <div className="text-left flex-1 space-y-0.5">
            <p className="text-[10px] sm:text-[11px] font-bold text-muted-foreground leading-tight">외국인 미용목적 결제액</p>
            <p className="text-[14px] sm:text-[16px] font-black text-primary leading-tight">153만 원</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm w-full opacity-80">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center text-lg sm:text-xl">🛍️</div>
          <div className="text-left flex-1 space-y-0.5">
            <p className="text-[10px] sm:text-[11px] font-bold text-muted-foreground leading-tight">일반 여행객 전체 평균</p>
            <p className="text-[14px] sm:text-[16px] font-black text-slate-500 leading-tight">399만 원</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "이용객 및 매출 성장 곡선",
    mainVal: "폭발적 성장",
    subTitle: "미용·뷰티 분야 매출 추이",
    subContent: (
      <div className="w-full h-full flex flex-col items-center justify-end pb-2 mt-auto">
        <img 
          src="/beauty-growth.png.png" 
          alt="뷰티 소비 급상승" 
          className="w-[95%] h-auto max-h-[150px] object-contain object-bottom drop-shadow-[0_8px_16px_rgba(217,54,68,0.15)]"
        />
      </div>
    ),
  }
];

const getCardAnimation = (index: number) => {
  const norm = 0;
  const up = -12;
  const scNorm = 1;
  const scUp = 1.04;
  const shNorm = "0 6px 14px rgba(0,0,0,0.03)";
  const shUp = "0 30px 50px -10px rgba(217, 54, 68, 0.15), 0 10px 20px rgba(0,0,0,0.05)";
  const zNorm = 1;
  const zUp = 50;

  const start = index * 0.25;
  const peak = index * 0.25 + 0.125;
  const end = index * 0.25 + 0.25;

  let times = [];
  let y = [];
  let scale = [];
  let boxShadow = [];
  let zIndex = [];

  if (start === 0) {
    times = [0, peak, end, 1];
    y = [norm, up, norm, norm];
    scale = [scNorm, scUp, scNorm, scNorm];
    boxShadow = [shNorm, shUp, shNorm, shNorm];
    zIndex = [zNorm, zUp, zNorm, zNorm];
  } else if (end === 1) {
    times = [0, start, peak, 1];
    y = [norm, norm, up, norm];
    scale = [scNorm, scNorm, scUp, scNorm];
    boxShadow = [shNorm, shNorm, shUp, shNorm];
    zIndex = [zNorm, zNorm, zUp, zNorm];
  } else {
    times = [0, start, peak, end, 1];
    y = [norm, norm, up, norm, norm];
    scale = [scNorm, scNorm, scUp, scNorm, scNorm];
    boxShadow = [shNorm, shNorm, shUp, shNorm, shNorm];
    zIndex = [zNorm, zNorm, zUp, zNorm, zNorm];
  }

  return {
    y,
    scale,
    boxShadow,
    zIndex,
    transition: {
      duration: 10, // 2.5s per card smooth continuous loop
      times,
      ease: "easeInOut" as const,
      repeat: Infinity
    }
  };
};

const KBeautyTrendSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFF5F7] to-[#FFE3EC] relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">🌸</div>
      <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none text-2xl">🌸</div>
      <div className="absolute top-1/2 right-1/4 opacity-10 pointer-events-none text-xl">✨</div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-[1500px]">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground mb-4 break-keep">
              글로벌 관광객 유입과 <br className="sm:hidden" /> <span className="text-rose-500">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-base sm:text-xl font-bold text-muted-foreground break-keep">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Stats Cards - Continuous Seamless Wave Interaction */}
        <ScrollReveal width="100%" delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 mt-8 mb-20 lg:mb-32 px-1 sm:px-4 w-full relative justify-items-center">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                animate={getCardAnimation(i)}
                className="w-full h-[300px] sm:h-[360px] sm:h-[390px] flex flex-col items-center text-center relative bg-white/95 backdrop-blur-3xl rounded-[2rem] p-4 sm:p-5 lg:p-7 border border-[#FDE1E8] shadow-sm transform-gpu"
              >
                {/* ── Header Area ── */}
                <div className="flex flex-col items-center w-full mb-3 mt-1 sm:mb-5">
                  <div className="min-h-[4rem] sm:min-h-[4.5rem] flex flex-col justify-start items-center">
                    <h3 className="text-[15px] sm:text-[16px] font-black text-[#555] mb-1.5 break-keep leading-tight px-1 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-[22px] sm:text-[26px] font-black text-rose-600 tracking-tighter leading-none whitespace-nowrap">
                      {s.mainVal}
                    </p>
                  </div>
                  <div className="h-4 flex items-center justify-center mt-1 sm:mt-2">
                    <p className="text-[12px] sm:text-[13px] font-bold text-muted-foreground break-keep leading-none whitespace-nowrap">
                      {s.subTitle || " "}
                    </p>
                  </div>
                </div>

                {/* ── Content Area ── */}
                <div className="w-full flex-grow flex flex-col items-center justify-end border-t border-rose-50 pt-4 mt-auto">
                  {s.subContent}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Decorative bottom */}
        <div className="mt-6 flex justify-center gap-6 opacity-15 pointer-events-none text-3xl">
          <span className="animate-pulse">🌸</span>
          <span className="animate-bounce">🌸</span>
          <span className="animate-pulse delay-75">🌸</span>
        </div>
      </div>
    </section>
  );
};

export default KBeautyTrendSection;
