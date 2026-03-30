import { motion } from "framer-motion";
import KelloText from "./KelloText";

const RevenueGraphSection = () => {
  return (
    <section className="py-24 bg-spring-yellow relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Revenue Growth</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-foreground mb-4 sm:mb-6 leading-tight break-keep">
            외국인 고객 몇 명만 늘어도 <br /> <span className="text-rose-500">매출이</span> 이렇게 <span className="text-rose-500">증가</span>합니다
          </h2>
          <div className="flex flex-col items-center gap-2 mb-8">
            <p className="text-sm sm:text-base md:text-lg text-rose-500 font-bold break-keep">
              K-뷰티를 찾는 외국인 관광객은 <br className="sm:hidden" /> 
              단순 시술이 아닌 <br className="sm:hidden" /> 
              '프리미엄 패키지'를 선호합니다.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              (Kello 예상 외국인 평균 객단가: 15만원)
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-md rounded-[2.5rem] px-6 py-8 sm:px-10 md:px-16 shadow-2xl border border-rose-100 relative overflow-hidden group">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground mb-1 leading-tight break-keep text-center">
              한 달에 딱 <span className="text-rose-500">10명</span>만 늘어도,<br className="sm:hidden" /> <span className="text-rose-600">매출 앞자리</span>가 바뀝니다.
            </h3>
            <div className="w-16 h-1 bg-rose-200 rounded-full mt-4" />
          </div>

          {/* Real Graph Container */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full mt-10">
            {/* X-Axis Labels */}
            <div className="absolute bottom-[-30px] w-full flex justify-between px-2 sm:px-10 text-xs sm:text-sm font-black text-rose-400">
              <span>0명</span>
              <span>5명</span>
              <span>10명</span>
              <span>20명</span>
              <span>30명</span>
            </div>

            {/* The Curve Overlay (SVG) */}
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#f1f5f9" />
                </linearGradient>
                <linearGradient id="extraGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--primary) / 0.1)" />
                </linearGradient>
              </defs>

              {/* Baseline Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0 100 Q 15 95, 30 90 Q 60 85, 100 80 L 100 100 L 0 100 Z"
                fill="url(#baseGradient)"
                className="opacity-20"
              />
              {/* Kello Extra Revenue Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 0 100 Q 15 90, 30 70 Q 60 40, 100 10 L 100 80 Q 60 85, 30 90 Q 15 95, 0 100 Z"
                fill="url(#extraGradient)"
              />
              {/* Main Growth Curve Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 0 100 Q 15 90, 30 70 Q 60 40, 100 10"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Floating Value Label (30 guests) */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2 }}
              className="absolute right-0 top-[10%] -translate-y-[60%] translate-x-1/2 z-20"
            >
              <div className="bg-primary px-3 sm:px-4 py-1.5 rounded-full shadow-xl flex flex-col items-center animate-bounce">
                <span className="text-[10px] font-black text-white/80 leading-none mb-0.5">30명</span>
                <span className="text-sm sm:text-base font-black text-white">450만원</span>
                <div className="absolute -bottom-1 w-2 h-2 bg-primary rotate-45" />
              </div>
            </motion.div>

            {/* Area Labels - Centered within regions */}
            <div className="absolute bottom-[30%] sm:bottom-[35%] left-1/2 -translate-x-1/3 text-[12px] sm:text-[18px] font-black text-rose-500/80 tracking-tight break-keep text-center drop-shadow-sm pointer-events-none w-full max-w-[150px] sm:max-w-none">
              <KelloText />로 인한 추가 수익
            </div>
            <div className="absolute bottom-[5%] left-[60%] -translate-x-1/2 text-[10px] sm:text-xs font-black text-slate-400 uppercase tracking-widest italic pointer-events-none">
              기존 매출
            </div>
          </div>

          {/* Footer Text */}
          <p className="mt-16 text-center text-[10px] sm:text-xs text-muted-foreground font-medium break-keep">
            *외국인 관광객 프리미엄 시술(두피 스파, 펌, 아트 네일 등) 평균 객단가 15만 원 기준
          </p>
        </div>
      </div>
    </section>
  );
};

export default RevenueGraphSection;
