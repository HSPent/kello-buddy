import { motion } from "framer-motion";
import { BadgeCheck, Star, ShieldCheck, MessageSquareQuote } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "가격 신뢰", desc: "정찰제 기반의 투명한 가격 안내" },
  { icon: Star, label: "후기 기반", desc: "실제 이용 후기로 검증된 매장" },
  { icon: ShieldCheck, label: "보안·개인정보", desc: "안전한 결제 및 개인정보 보호" },
];

const reviews = [
  {
    name: "김사장님",
    role: "강남 네일샵",
    text: "외국인 손님 응대가 너무 편해졌어요. 번역기 안 써도 예약부터 결제까지 자동으로 되니까 진짜 좋습니다.",
    rating: 5,
  },
  {
    name: "이대표님",
    role: "홍대 헤어살롱",
    text: "노쇼 때문에 스트레스였는데, 선결제 시스템 도입하고 나서 한 건도 없었어요. 매출도 확실히 늘었습니다.",
    rating: 5,
  },
  {
    name: "박원장님",
    role: "명동 피부관리",
    text: "관광객 예약이 꾸준히 들어와서 비수기에도 매출이 안정적이에요. 파트너 신청하길 잘했습니다.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-kello-blue-light relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-kello-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Trust</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            사장님이 신뢰할 수 있는 이유
          </h2>
        </motion.div>

        {/* Trust Icons */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-kello-card border border-border text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-kello-card border border-border"
            >
              <MessageSquareQuote className="h-6 w-6 text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-kello-gold text-kello-gold" />
                ))}
              </div>
              <div>
                <div className="font-bold text-foreground text-sm">{review.name}</div>
                <div className="text-xs text-muted-foreground">{review.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
