import { motion } from "framer-motion";
import { Globe, CreditCard, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import KelloText from "./KelloText";

const ProblemSection = () => {
  return (
    <>
      {/* --- PAGE 1: 문제 제기 --- */}
      <section className="py-24 md:py-32 bg-spring-pink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-kello-coral/5 rounded-full blur-[100px] -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <ScrollReveal width="100%">
            <div className="w-full text-center mx-auto">
              
              {/* 상단 제목을 크고 웅장하지만 세련되게 */}
              <div className="bg-primary/5 border-l-[6px] sm:border-l-8 border-primary p-4 sm:p-8 lg:p-10 rounded-r-2xl sm:rounded-r-3xl mb-12 sm:mb-16 text-left max-w-fit mx-auto shadow-sm">
                <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight tracking-tight break-keep">
                  "사장님들 외국인 고객손님 불편하셨죠?"
                </h2>
              </div>
              
              {/* 문제점 풀-위드스 거대 카드 영역 */}
              <div className="w-full flex flex-col gap-10 md:gap-14 mt-12 text-left pb-10">
                
                {/* 장벽 1 */}
                <div className="glass-card p-6 sm:p-12 lg:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm relative overflow-hidden border border-kello-coral/30 hover:-translate-y-1 transition-transform">
                  <span className="font-extrabold text-kello-coral tracking-tight text-lg sm:text-2xl mb-3 sm:mb-4 block relative z-10">언어 장벽</span>
                  <p className="text-slate-600 font-semibold italic text-base sm:text-4xl leading-relaxed break-keep relative z-10">
                    "회원권 유도, 가격 안내, 환불 정책 등 세부 설명을 외국인에게 전달하기가 너무 어려워요."
                  </p>
                  <div className="absolute top-1/2 right-0 w-64 h-64 bg-kello-coral/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                </div>

                {/* 장벽 2 */}
                <div className="glass-card p-6 sm:p-12 lg:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm relative overflow-hidden border border-primary/30 hover:-translate-y-1 transition-transform">
                  <span className="font-extrabold text-primary tracking-tight text-lg sm:text-2xl mb-3 sm:mb-4 block relative z-10">인증 장벽</span>
                  <p className="text-slate-600 font-semibold italic text-base sm:text-4xl leading-relaxed break-keep relative z-10">
                    "한국 번호가 없어 실명인증이 안 되니, 노쇼 시 연락이 안 되는 문제가 발생하면 업체가 불이익을 받게 돼요."
                  </p>
                  <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                </div>

                {/* 장벽 3 */}
                <div className="glass-card p-6 sm:p-12 lg:p-16 rounded-[1.5rem] sm:rounded-[2.5rem] shadow-sm relative overflow-hidden border border-kello-gold/30 hover:-translate-y-1 transition-transform">
                  <span className="font-extrabold text-kello-gold tracking-tight text-lg sm:text-2xl mb-3 sm:mb-4 block relative z-10">신뢰 장벽</span>
                  <p className="text-slate-600 font-semibold italic text-base sm:text-4xl leading-relaxed break-keep relative z-10">
                    "정보가 부족한 외국인들이 가격에 의심을 가지고 신뢰가 부족해요."
                  </p>
                  <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-kello-gold/20 rounded-full blur-[80px] -translate-y-1/2 pointer-events-none" />
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- PAGE 2: Kello 해결책 --- */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-spring-pink/30 via-orange-50/40 to-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-kello-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
          <ScrollReveal width="100%">
            <div className="w-full text-center mx-auto">
              
              {/* 해결책 진입 문구 */}
              <div className="mb-12 sm:mb-20 text-center break-keep">
                <strong className="text-primary text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight drop-shadow-md block mb-3 sm:mb-4">
                  <KelloText />는 이 문제를 
                </strong>
                <strong className="text-foreground text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm block">
                  완벽하게 <span className="text-primary">해결</span>합니다.
                </strong>
              </div>
              
              {/* 해결책 풀-위드스 거대 카드 영역 */}
              <div className="w-full flex flex-col gap-12 md:gap-16 text-left">
                
                {/* 솔루션 1: 언어 */}
                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-kello-coral/20 hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mb-8 md:mb-10">
                    <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-2xl sm:rounded-[2rem] bg-kello-coral/10 text-kello-coral flex items-center justify-center shrink-0">
                      <Globe className="w-10 h-10 sm:w-16 sm:h-16" />
                    </div>
                    <h3 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-foreground break-keep leading-tight">
                      언어 장벽 없는<br className="hidden md:block"/> 매끄러운 연결
                    </h3>
                  </div>
                  <p className="text-slate-600 font-semibold text-base sm:text-2xl lg:text-3xl leading-relaxed break-keep">
                    외국인 고객이 자국어로 Kello에서 편하게 샵을 둘러보고 예약하면, 원장님은 직관적인 시스템을 통해 예약 내역과 결제 완료 상태만 확인하시면 됩니다.
                  </p>
                </div>

                {/* 솔루션 2: 인증/결제 */}
                <div className="bg-white/90 backdrop-blur-md p-6 sm:p-12 lg:p-16 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-primary/20 hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-2xl sm:rounded-[2rem] bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <CreditCard className="w-10 h-10 sm:w-16 sm:h-16" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="bg-primary/5 text-primary text-xs sm:text-base font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full w-max border border-primary/20">인증 장벽 해결</span>
                          <h3 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-foreground break-keep tracking-tight">글로벌 선결제 시스템</h3>
                        </div>
                      </div>
                      <p className="text-rose-500 font-bold text-base sm:text-2xl lg:text-3xl mt-2 break-keep tracking-tight leading-snug">
                        Kello가 선결제를 통해 분쟁을 해결합니다. <br />
                        <strong className="font-extrabold">노쇼(No-Show) 스트레스 제로!</strong>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4 sm:space-y-6 bg-slate-50 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100/50 text-slate-700">
                    <p className="font-medium text-base sm:text-xl lg:text-2xl leading-relaxed break-keep">
                      Kello는 해외 신용카드 및 글로벌 간편 결제 시스템을 완벽하게 지원합니다. 
                      고객이 자국에서 쓰던 결제 수단으로 예약금 또는 전액을 <span className="text-rose-500 font-bold">'선결제'</span>해야만 예약 확정이 가능합니다.
                    </p>
                    <p className="font-semibold text-base sm:text-xl lg:text-2xl leading-relaxed break-keep">
                      외국인 고객은 현금 환전의 불편함을 덜고, 원장님은 악성 노쇼로 인한 매출 타격 걱정 없이 시술에만 온전히 집중하실 수 있습니다.
                    </p>
                  </div>
                </div>

                {/* 솔루션 3: 맺음말 초거대 배너 */}
                <div className="mt-8 sm:mt-10 w-full bg-gradient-to-r from-primary via-primary to-rose-400 p-8 sm:p-16 lg:p-20 rounded-[2rem] sm:rounded-[2.5rem] text-center shadow-xl text-white relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/20 blur-[100px] rounded-full" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-xl sm:text-4xl lg:text-6xl font-extrabold mb-8 sm:mb-10 drop-shadow-md break-keep leading-tight tracking-tight">
                      🤝 Kello와 함께,<br /> 샵의 무대를 전 세계로 넓히세요.
                    </h3>
                    <div className="max-w-4xl mx-auto space-y-5 md:space-y-6">
                      <p className="text-white/90 font-semibold text-lg sm:text-xl lg:text-3xl leading-relaxed break-keep">
                        복잡한 예약과 결제, 노쇼 방지까지 모두 Kello가 책임지겠습니다.
                      </p>
                      <p className="text-white font-extrabold text-xl sm:text-3xl lg:text-4xl leading-relaxed break-keep pb-6 sm:pb-8">
                        원장님은 훌륭한 K-뷰티 서비스만 준비해 주세요.
                      </p>
                      <button 
                        onClick={() => {
                          document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-white text-primary text-lg sm:text-xl md:text-2xl font-bold px-8 sm:px-14 py-4 sm:py-8 rounded-full shadow-xl hover:bg-slate-50 transition-colors w-full sm:w-auto hover:-translate-y-1"
                      >
                        지금 파트너가 되어, <br className="sm:hidden" /> 글로벌 고객을 맞이해 보세요!
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default ProblemSection;
