import { motion } from "framer-motion";
import { Globe, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="한국 거리를 즐기는 외국인 관광객들" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center flex flex-col items-center"
        >
          {/* Logo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            src="/logo.png"
            alt="Kello Logo"
            className="h-32 md:h-48 w-auto object-contain mb-6 drop-shadow-2xl"
            onError={(e) => e.currentTarget.style.display = 'none'}
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 mb-8"
          >
            <Globe className="h-4 w-4 text-kello-gold" />
            <span className="text-sm font-medium text-primary-foreground/90">사장님 전용 파트너 제휴</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gradient-hero mb-6">
            놓치던 외국인 예약,{" "}
            <br className="hidden md:block" />
            이제 매출로 연결하세요
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 font-light max-w-4xl mx-auto break-keep whitespace-nowrap md:whitespace-normal">
            한국 번호 인증 장벽 때문에 놓치던 외국인 고객, 이제 Kello으로 더 쉽게 연결하세요.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {[
              { number: "1,900만+", label: "연간 방문 관광객" },
              { number: "80%", label: "자유여행객 비율" },
              { number: "0원", label: "초기 입점 비용" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-black text-kello-gold">{stat.number}</div>
                <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#cta-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground font-bold px-8 py-4 rounded-full text-lg shadow-kello-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-5 w-5" />
            파트너 신청하기
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
