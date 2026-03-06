import { motion } from "framer-motion";
import { Languages, CreditCard } from "lucide-react";

const solutions = [
  {
    icon: Languages,
    title: "Kello 번역",
    desc: "사장님과 손님 사이에서 번역을 도와드립니다. 채팅하듯 상담하세요.",
    gradient: "from-kello-green to-primary",
  },
  {
    icon: CreditCard,
    title: "100% 선결제 보장",
    desc: "예약 시 결제 완료! 노쇼 걱정 제로, 확정 매출 확보.",
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Kello는 사장님의
            <br />
            <span className="text-primary">'AI 예약 대행인'</span>입니다.
          </h2>
          <p className="text-muted-foreground">
            단순한 홍보 플랫폼이 아닌, 실행 중심의 AI 솔루션
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-7 shadow-kello-card border border-border hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} mb-5`}>
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
