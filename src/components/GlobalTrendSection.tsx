import { motion } from "framer-motion";
import { Users, TrendingUp, CreditCard, PieChart, BarChart3, LineChart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GlobalTrendSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-spring-pink/30 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 break-keep">
              글로벌 관광객 유입과 <span className="text-primary">K-뷰티 소비 트렌드</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-bold">
              외국인 관광객의 미용 서비스 이용 현황 및 지출 분석
            </p>
          </div>
        </ScrollReveal>

        {/* Top 3 Metric Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ScrollReveal delay={0.1} width="100%">
            <div className="glass-card p-10 rounded-[2.5rem] border-primary/10 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-muted-foreground mb-2">전체 외국인 관광객 수</h3>
              <div className="text-3xl md:text-4xl font-black text-foreground mb-4">
                2024년 <span className="text-primary">1,700만 명</span>
              </div>
              <div className="mt-auto pt-6 w-full opacity-50">
                <LineChart className="w-full h-12 text-primary/30" />
                <div className="flex justify-between text-[10px] font-bold mt-2">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <div className="glass-card p-10 rounded-[2.5rem] border-accent/10 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <PieChart className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-muted-foreground mb-2">미용·뷰티 이용자 수 및 비중</h3>
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-black text-foreground">약 <span className="text-accent">250만 명</span></div>
                <div className="text-sm font-bold text-muted-foreground mt-1">전체 관광객 중 비중 <span className="text-accent">약 15%</span></div>
              </div>
              <div className="relative w-24 h-24 mt-4">
                 <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="15" className="text-slate-100" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="currentColor" strokeWidth="15" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.15)} className="text-accent" />
                 </svg>
                 <div className="absolute inset-0 flex items-center justify-center text-lg font-black text-accent">15%</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3} width="100%">
            <div className="glass-card p-10 rounded-[2.5rem] border-kello-gold/10 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-kello-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="text-kello-gold w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-muted-foreground mb-2">1인당 미용 목적 평균 지출</h3>
              <div className="space-y-4 w-full">
                <div className="bg-white/80 p-4 rounded-2xl border border-kello-gold/5 shadow-sm">
                   <div className="text-2xl md:text-3xl font-black text-foreground">153만 원</div>
                   <div className="text-xs font-bold text-muted-foreground">미용목적 카드 사용액 평균</div>
                </div>
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                   <div className="text-xl md:text-2xl font-black text-slate-500">399만 원</div>
                   <div className="text-xs font-bold text-slate-400">한국 내 전체 카드 사용액 평균</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Growth Charts Section */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="glass-card p-8 md:p-16 rounded-[3rem] border-primary/5">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-12 text-center">미용·뷰티 이용객 및 매출 성장 추이</h3>
            
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Bar Chart */}
              <div className="space-y-8">
                <div className="flex justify-between items-end mb-4">
                   <span className="text-sm font-bold text-muted-foreground">미용 뷰티 이용객 수 (만 명)</span>
                   <span className="text-xs font-bold p-1 bg-primary/10 rounded text-primary">GROWING FAST</span>
                </div>
                <div className="flex items-end justify-between h-64 gap-4 px-2 border-b border-slate-100">
                  <div className="flex-1 flex flex-col items-center">
                    <motion.div initial={{height:0}} whileInView={{height:'40%'}} transition={{duration:1}} className="w-full bg-slate-200 rounded-t-lg" />
                    <span className="text-[10px] mt-2 font-bold text-slate-400">2021</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center relative">
                    <div className="absolute -top-10 bg-primary/5 px-2 py-1 rounded-lg text-[10px] font-black text-primary">150만 명</div>
                    <motion.div initial={{height:0}} whileInView={{height:'60%'}} transition={{duration:1, delay:0.2}} className="w-full bg-primary/40 rounded-t-lg" />
                    <span className="text-[10px] mt-2 font-bold text-slate-400">2022</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center relative">
                    <div className="absolute -top-10 bg-primary/10 px-2 py-1 rounded-lg text-[10px] font-black text-primary">210만 명</div>
                    <motion.div initial={{height:0}} whileInView={{height:'80%'}} transition={{duration:1, delay:0.4}} className="w-full bg-primary/60 rounded-t-lg" />
                    <span className="text-[10px] mt-2 font-bold text-slate-400">2023</span>
                  </div>
                  <div className="flex-1 flex flex-col items-center relative">
                    <div className="absolute -top-12 bg-primary px-3 py-1 rounded-lg text-xs font-black text-white shadow-lg animate-pulse">250만 명</div>
                    <motion.div initial={{height:0}} whileInView={{height:'100%'}} transition={{duration:1, delay:0.6}} className="w-full bg-primary rounded-t-lg shadow-kello-glow" />
                    <span className="text-[10px] mt-2 font-bold text-primary">2024</span>
                  </div>
                </div>
              </div>

              {/* Right Line Chart */}
              <div className="space-y-8">
                <div className="flex justify-between items-end mb-4">
                   <span className="text-sm font-bold text-muted-foreground">미용 시술 총 매출액 (백만 원)</span>
                   <BarChart3 className="w-5 h-5 text-accent" />
                </div>
                <div className="relative h-64 border-b border-slate-100 px-4">
                  <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                    <motion.path 
                      d="M 10 45 Q 35 40, 60 25 T 90 5" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      className="text-accent"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    {[
                      {x: 10, y: 45, val: "3,000만"},
                      {x: 60, y: 25, val: "6,750만"},
                      {x: 90, y: 5, val: "7,000만 명"}
                    ].map((point, idx) => (
                      <motion.circle 
                        key={idx}
                        cx={point.x} cy={point.y} r="2" 
                        fill="white" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                        className="text-accent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + idx * 0.2 }}
                      />
                    ))}
                  </svg>
                  {/* Tooltips for Line Chart */}
                  <div className="absolute left-[5%] bottom-[5%] translate-y-[-100%] bg-accent/10 px-2 py-1 rounded-lg text-[9px] font-bold text-accent">3,000만</div>
                  <div className="absolute left-[55%] bottom-[50%] translate-y-[-100%] bg-accent/10 px-2 py-1 rounded-lg text-[9px] font-bold text-accent">6,750만</div>
                  <div className="absolute right-[5%] top-[5%] translate-x-[50%] bg-accent px-3 py-1 rounded-lg text-[11px] font-black text-white shadow-lg">7,000만 명</div>
                  
                  <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
                    <span>2021</span>
                    <span>2022</span>
                    <span>2023</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GlobalTrendSection;
