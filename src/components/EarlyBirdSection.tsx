import { motion } from "framer-motion";
import { Zap, Star, Video } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "입점비 및 초기 3개월 수수료 0원",
    desc: "리스크 없이 시작하세요. 정식 오픈 전까지 모든 비용이 무료입니다.",
  },
  {
    icon: Star,
    title: "상단 우선 노출 & 추천 마크",
    desc: "플랫폼 내 'K-뷰티/로컬 맛집' 카테고리 상단 노출 및 추천 마크가 부여됩니다.",
  },
  {
    icon: Video,
    title: "숏폼 홍보 영상 무료 제작",
    desc: "외국인 타겟 숏폼 홍보 영상을 무료로 제작해 드립니다.",
  },
];

const EarlyBirdSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-kello-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-kello-gold tracking-widest uppercase mb-4">Early-Bird Benefit</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
            2026년 정식 오픈 전,
            <br />
            <span className="text-kello-gold">파트너사만을 위한 독점 혜택</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent mb-5">
                <b.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-primary-foreground mb-3">{b.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarlyBirdSection;
