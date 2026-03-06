import { motion } from "framer-motion";
import { MessageCircleX, ShieldX, UserX } from "lucide-react";

const problems = [
  {
    icon: MessageCircleX,
    title: "언어 장벽",
    desc: "\"회원권 유도, 가격 안내, 환불 정책 등 세부 설명을 외국인에게 전달하기가 너무 어려워요.\"",
    color: "text-kello-coral",
    bg: "bg-kello-coral/10",
  },
  {
    icon: ShieldX,
    title: "인증 장벽",
    desc: "\"한국 번호가 없어 실명인증이 안 되니, 노쇼 시 연락이 안 되는 문제가 발생하면 업체가 불이익을 받게 돼요.\"",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: UserX,
    title: "신뢰 장벽",
    desc: "\"정보가 부족한 외국인들이 가격에 의심을 가지고 신뢰가 부족해요.\"",
    color: "text-kello-gold",
    bg: "bg-kello-gold/10",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-kello-coral/5 rounded-full blur-3xl -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/3" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-widest uppercase mb-4">Problem</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            사장님, 혹시 이런 경험 없으신가요?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative bg-card rounded-2xl p-8 shadow-kello-card border border-border hover:shadow-kello-glow transition-shadow group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${p.bg} mb-6`}>
                <p.icon className={`h-7 w-7 ${p.color}`} />
              </div>
              <span className={`text-xs font-bold uppercase tracking-wider ${p.color} mb-2 block`}>
                {p.title}
              </span>
              <p className="text-foreground font-medium text-lg leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
