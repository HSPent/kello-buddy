import { motion } from "framer-motion";
import { Languages, CreditCard } from "lucide-react";

const solutions = [
  {
    icon: Languages,
    title: "언어 장벽 없는 AI 번역 다이렉트 소통",
    desc: "외국인 고객의 문의부터 예약 확정까지, 사장님과 손님 사이의 모든 대화를 AI가 실시간으로 완벽하게 번역해 드립니다.",
    gradient: "from-kello-green to-primary",
  },
  {
    icon: CreditCard,
    title: "노쇼 스트레스 0%, 100% 선결제 확정",
    desc: "외국인 예약은 무조건 '사전 결제'로만 진행됩니다! 노쇼로 인한 손해 걱정은 이제 그만, 예약 들어오는 즉시 사장님의 '확정 매출'이 됩니다.",
    gradient: "from-kello-gold to-accent",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 bg-kello-blue-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.08) 0%, transparent 50%)" }} />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Solution</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Kello는 든든한 사장님 전용<br />
            <span className="text-primary">'AI 예약 대행인'</span>입니다
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            단순한 홍보 플랫폼이 아닌, 매출을 확실하게 책임지는 실행 중심 솔루션
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-kello-card border border-border hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${s.gradient} mb-6 shadow-md`}>
                <s.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 leading-snug">{s.title}</h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium break-keep">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
